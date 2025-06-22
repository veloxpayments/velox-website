#!/bin/bash

#Script to get current task definition, and based on that add new ecr image address to old template and remove attributes that are not needed, then we send new task definition, get new revision number from output and update service
TAG_NAME=$(cat "workspace/tag_name.txt")
echo "Tag:${TAG_NAME}"

set -e
ECR_IMAGE="730330577077.dkr.ecr.us-east-1.amazonaws.com/velox-website:${TAG_NAME}"
TASK_DEFINITION=$(aws ecs describe-task-definition --task-definition "$TASK_FAMILY" --region "us-east-1")
NEW_TASK_DEFINITION=$(echo "$TASK_DEFINITION" | jq --arg IMAGE "$ECR_IMAGE" '.taskDefinition | .containerDefinitions[0].image = $IMAGE | del(.taskDefinitionArn) | del(.registeredAt) | del(.registeredBy) | del(.revision) | del(.status) | del(.requiresAttributes) | del(.compatibilities)')
NEW_TASK_INFO=$(aws ecs register-task-definition --region "us-east-1" --cli-input-json "$NEW_TASK_DEFINITION")
NEW_REVISION=$(echo $NEW_TASK_INFO | jq '.taskDefinition.revision')
echo "Service: ${ECS_SERVICE_NAME}"
aws ecs update-service --cluster "${ECS_CLUSTER}" \
                       --service "${ECS_SERVICE_NAME}" \
                       --task-definition "${TASK_FAMILY}":"${NEW_REVISION}"``
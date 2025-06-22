SHORT_SHA1=$(echo $CIRCLE_SHA1 | cut -c -7)
TAG_NAME=${SHORT_SHA1}_${CIRCLE_BRANCH}
echo ${TAG_NAME}

docker build -t velox-website:"${TAG_NAME}" .
docker tag velox-website:"${TAG_NAME}" 730330577077.dkr.ecr.us-east-1.amazonaws.com/velox-website:"${TAG_NAME}"
docker push 730330577077.dkr.ecr.us-east-1.amazonaws.com/velox-website:"${TAG_NAME}"
mkdir -p workspace
echo "${TAG_NAME}" > workspace/tag_name.txt

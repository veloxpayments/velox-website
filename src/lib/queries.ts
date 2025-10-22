import { groq } from 'next-sanity';


export const PAGE_SIZE = 9;


export const postsListQuery = groq`
*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[($page-1)*$limit...($page*$limit)]{
_id,
title,
excerpt,
'slug': slug.current,
publishedAt,
featured,
readingMinutes,
coverImage,
author->{name, avatar},
categories[]-> { title, slug },
}`;


export const postsCountQuery = groq`count(*[_type == "post" && defined(slug.current)])`;


export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0]{
_id,
title,
excerpt,
'slug': slug.current,
publishedAt,
featured,
readingMinutes,
coverImage,
author->{name, role, avatar, twitter, linkedin},
categories[]-> { title, slug },
tags,
content,
seo { title, description, ogImage },
}`;


export const relatedPostsQuery = groq`
*[_type == "post" && references($id) == false && count( (tags[])[@ in ^.^.tags] ) > 0][0...3]{
_id,
title,
'slug': slug.current,
coverImage,
publishedAt,
}`;


export const settingsQuery = groq`*[_type == 'settings' && _id == 'blogSettings'][0]`;
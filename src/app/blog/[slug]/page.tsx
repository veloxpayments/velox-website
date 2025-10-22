import Image from "next/image";
import { sanityClient } from "../../../lib/sanity.client";
import { postBySlugQuery, relatedPostsQuery } from "../../../lib/queries";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../../lib/image";
import type { Metadata } from "next";
import { formatDateToLong } from "../../../lib/consts";

export const revalidate = 60; // ISR

export async function generateMetadata({
  params,
}: {
  params:  Promise<{ slug: string }>
}): Promise<Metadata> {
  const data = await sanityClient.fetch(postBySlugQuery, { slug: (await params).slug });
  const title = data?.seo?.title || data?.title || "Velox Blog";
  const description = data?.seo?.description || data?.excerpt;
  const og = data?.seo?.ogImage || data?.coverImage;
  const ogUrl = og
    ? urlFor(og).width(1200).height(630).fit("crop").url()
    : undefined;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogUrl ? [{ url: ogUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogUrl ? [ogUrl] : undefined,
    },
  };
}

const components = {
  types: {
    image: ({ value }: any) => (
      <div className="my-6">
        <Image
          src={urlFor(value).width(1200).fit("max").url()}
          alt={value.alt || ""}
          width={1200}
          height={600}
        />
      </div>
    ),
    code: ({ value }: any) => (
      <pre className="my-6 p-4 bg-neutral-100 overflow-x-auto">
        <code>{value.code}</code>
      </pre>
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-semibold mt-8 mb-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold mt-6 mb-2">{children}</h3>
    ),
    normal: ({ children }: any) => <p className="leading-7 my-4">{children}</p>,
  },
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await sanityClient.fetch(postBySlugQuery, { slug: (await params).slug });
  if (!data) return <div className="p-6">Not found</div>;

  const related = await sanityClient.fetch(relatedPostsQuery, {
    id: data._id,
    tags: data.tags ?? [],
  });

  return (
    <main className="mx-auto max-w-3xl p-6 pb-8 md:pb-16 pt-28 md:pt-44">
      {data.coverImage && (
        <div className="relative aspect-[16/9] mb-6">
          <Image
            src={urlFor(data.coverImage)
              .width(1200)
              .height(675)
              .fit("crop")
              .url()}
            alt={data.title}
            fill
            sizes="(max-width:1024px) 100vw, 75vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      <h1 className="text-3xl font-semibold mb-2">{data.title}</h1>
      <div className="text-sm opacity-70 mb-6 flex items-center gap-2">
        {data.author?.avatar && (
          <Image
            src={urlFor(data.author.avatar).width(32).height(32).url()}
            alt={data.author?.name || "Author"}
            width={32}
            height={32}
            className="w-8 h-8 rounded-xl object-cover"
            loading="lazy"
          />
        )}
        <div className="flex flex-col">
          <span>{data.author?.name} </span>
          {data.publishedAt
            ? formatDateToLong(new Date(data.publishedAt).toLocaleDateString())
            : "Draft"}{" "}
          • {data.readingMinutes ?? ""}
          {data.readingMinutes ? " min" : ""}
        </div>
      </div>

      {data.excerpt && (
        <p className="text-lg opacity-80 mb-6">{data.excerpt}</p>
      )}

      <PortableText value={data.content} components={components} />

      {/* Related */}
      {related?.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Related posts</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {related.map((p: any) => (
              <li key={p._id} className="border rounded p-3">
                <a href={`/blog/${p.slug}`}>{p.title}</a>
                <div className="text-xs opacity-60">
                  {p.publishedAt
                    ? formatDateToLong(
                        new Date(p.publishedAt).toLocaleDateString()
                      )
                    : ""}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

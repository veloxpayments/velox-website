// ...existing code...
import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "../../lib/sanity.client";
import { postsListQuery, postsCountQuery, PAGE_SIZE } from "../../lib/queries";
import { urlFor } from "../../lib/image";
import { formatDateToLong } from "../../lib/consts";
import BlogCoverButton from "../../components/buttons/blog-cover-button";

export const revalidate = 60; // ISR

export default async function BlogIndex({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam ?? "1");
  const [posts, total] = await Promise.all([
    sanityClient.fetch(postsListQuery, { page, limit: PAGE_SIZE }),
    sanityClient.fetch(postsCountQuery),
  ]);
  const pages = Math.ceil((total || 0) / PAGE_SIZE);

  // Sort posts by publishedAt descending (most recent first)
  const sortedPosts = [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const [coverPost, ...otherPosts] = sortedPosts;

  return (
    <div className="w-full min-h-screen font-satoshi bg-[#F9FAFB] pt-7 md:px-0 md:pt-0">
      {/* Cover Post */}
      {coverPost && (
        <header className="w-full px-4 md:px-0 pb-8 md:pb-16 pt-0 md:pt-44 relative">
          <div className="md:max-w-[90vw] mx-auto flex flex-col md:flex-row items-center bg-[linear-gradient(110deg,_#F0F3FB_0.23%,_#D1DAF4_99.77%)] gap-10 p-4 md:p-8 pt-32 md:pt-8 rounded-2xl">
            <div className="flex-1 flex flex-col gap-3 md:gap-6 items-start justify-center">
              <h1 className="capitalize text-[#000] text-4xl md:text-6xl font-bold leading-tight">
                {coverPost.title}
              </h1>
              {coverPost.excerpt && (
                <p className="capitalize text-[#2c2c2c] text-lg md:text-2xl max-w-xl">
                  {coverPost.excerpt}
                </p>
              )}
              <div className="flex items-center gap-3 text-neutral-500 text-base">
                <Image
                  src="/clock.svg"
                  width={20}
                  height={20}
                  alt="time"
                  className="w-5 h-5"
                  loading="lazy"
                />
                <span>
                  {coverPost.readingMinutes
                    ? `${coverPost.readingMinutes} min read`
                    : "Read"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {coverPost.author?.avatar && (
                  <Image
                    src={urlFor(coverPost.author.avatar)
                      .width(48)
                      .height(48)
                      .url()}
                    alt={coverPost.author?.name || "Author"}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-2xl object-cover"
                    loading="lazy"
                  />
                )}
                <div>
                  <div className="font-bold text-[#000] text-lg">
                    {coverPost.author?.name}
                  </div>
                  <div className="text-[#2c2c2c] text-sm">
                    {coverPost.publishedAt
                      ? formatDateToLong(
                          new Date(coverPost.publishedAt).toLocaleDateString()
                        )
                      : "Draft"}
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <BlogCoverButton slug={coverPost.slug} />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              {coverPost.coverImage && (
                <Image
                  src={urlFor(coverPost.coverImage)
                    .width(600)
                    .height(400)
                    .fit("crop")
                    .url()}
                  alt={coverPost.title}
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-lg w-full object-cover"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </header>
      )}

      {/* Browse Articles Section */}
      <section className="max-w-[90vw] mx-auto w-full py-8 md:py-16 px-4">
        <div className="flex flex-col md:items-start md:justify-between gap-4 md:gap-8 mb-10">
          <h2 className="capitalize text-[#050506] text-3xl md:text-4xl font-bold">
            Browse Articles
          </h2>
          {/* Search bar placeholder (implement search logic as needed) */}
          <div className="flex items-center bg-white border border-[#51515499] rounded-xl px-4 py-3 shadow-sm w-full md:w-[464px]">
            <Image
              src="/search.svg"
              alt="search"
              width={20}
              height={20}
              className="w-5 h-5 mr-2"
              loading="lazy"
            />
            <input
              type="text"
              placeholder="Search Articles"
              className="flex-1 bg-transparent outline-none text-base text-[#51515466] placeholder-[#51515466]"
              // Add search logic
              disabled
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((p: any) => (
            <div
              key={p._id}
              className="bg-white rounded-xl overflow-hidden flex flex-col h-full border"
            >
              {p.coverImage && (
                <Image
                  src={urlFor(p.coverImage)
                    .width(400)
                    .height(240)
                    .fit("crop")
                    .url()}
                  alt={p.title}
                  width={400}
                  height={240}
                  className="h-60 w-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-[#050506] text-xl mb-2">
                  <Link href={`/blogtest/${p.slug}`}>{p.title}</Link>
                </h3>
                {p.excerpt && (
                  <p className="text-[#2d2d2d] text-sm mb-4 flex-1 line-clamp-3">
                    {p.excerpt}
                  </p>
                )}
                <div className="flex items-center gap-[2px] text-neutral-500 text-xs mb-4">
                  <Image
                    src="/clock.svg"
                    alt="time"
                    width={14}
                    height={14}
                    className="w-[14px] h-[14px]"
                    loading="lazy"
                  />
                  <span>
                    {p.readingMinutes ? `${p.readingMinutes} min read` : "Read"}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-[10px] border-t border-[#e5e7eb]">
                  <div className="flex items-center gap-2">
                    {p.author?.avatar && (
                      <Image
                        src={urlFor(p.author.avatar).width(32).height(32).url()}
                        alt={p.author?.name || "Author"}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-xl object-cover"
                        loading="lazy"
                      />
                    )}
                    <div>
                      <div className="font-bold text-[#000] text-sm">
                        {p.author?.name}
                      </div>
                      <div className="text-[#2c2c2c] text-xs">
                        {p.publishedAt
                          ? formatDateToLong(
                              new Date(p.publishedAt).toLocaleDateString()
                            )
                          : "Draft"}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <BlogCoverButton slug={p.slug} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        {pages > 1 && (
          <nav className="flex items-center justify-center gap-2 mt-12">
            {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
              <Link
                key={n}
                href={`/blogtest?page=${n}`}
                className={`px-3 py-1 border rounded ${
                  n === page ? "bg-black text-white" : ""
                }`}
              >
                {n}
              </Link>
            ))}
          </nav>
        )}
      </section>
    </div>
  );
}

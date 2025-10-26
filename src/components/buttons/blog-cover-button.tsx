"use client";
import { useRouter } from "next/navigation";
import SecondaryButton from "../../components/buttons/secondary-button";
import Image from "next/image";

interface BlogCoverButtonProps {
  slug: string;
}

const BlogCoverButton: React.FC<BlogCoverButtonProps> = ({ slug }) => {
  const router = useRouter();
  return (
    <SecondaryButton onClick={() => router.push(`/blog/${slug}`)}>
      <span className="flex items-center gap-2">
        Read Article
        <Image
          src="/arrowRight.svg"
          alt="arrow"
          width={20}
          height={20}
          className="w-5 h-5"
          loading="lazy"
        />
      </span>
    </SecondaryButton>
  );
};

export default BlogCoverButton;

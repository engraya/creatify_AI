import { Post } from "@/.contentlayer/generated";

import { BlogCard } from "./blog-card";

export function BlogPosts({
  posts,
}: {
  posts: (Post & {
    blurDataURL: string;
  })[];
}) {
  return (
    <main className="space-y-8">
      At Creatify_AI, we believe that great content should be accessible to everyone. Built by a team of passionate technologists and creatives, our mission is to simplify content creation with cutting-edge AI. Whether you&lsquo;re a business, freelancer, or content creator, Creatify_AI is here to amplify your voice and save you time
    </main>
  );
}

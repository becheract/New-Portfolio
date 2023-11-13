import PostPreview from "../components/post-preview";
import Head from "next/head";
import Text from "../components/Text";

export default function MoreStories({ posts }) {
  return (
    <section>
      <Text style={"Heading"}> More Articles</Text>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            blogCategory={post.blogCategory}
          />
        ))}
      </div>
    </section>
  );
}

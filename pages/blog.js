import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Text from "../components/Text";
import { CMS_NAME } from "../lib/constants";
import { indexQuery, categoryQuery } from "../lib/queries";
import { usePreviewSubscription } from "../lib/sanity";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import { useEffect, useState } from "react";
import BlogPost from "../components/blogPost";
import Footer from "../components/footer";
export default function Index({
  allPosts: initialAllPosts,
  preview,
  allBlogCategories: categories,
}) {
  const { data: allPosts } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  });

  const { data: allBlogCategories } = usePreviewSubscription(categoryQuery, {
    initialData: categories,
    enabled: preview,
  });

  const [hero, ...morePosts] = allPosts || [];
  const [filter, setFilter] = useState("All");
  const [years, setYears] = useState([]);

  useEffect(() => {
    let years = [];
    allPosts.map((post) => {
      let postYear = post.date.substring(0, 4);
      let foundYear = years.includes(postYear);
      if (foundYear == false) {
        years.push(postYear);
      } else {
        return;
      }
    });
    setYears(years);
  }, []);

  return (
    <>
      <Text style={"Heading"}>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Text>

      <Container>
        <Text style={"Heading"}>
          {" "}
          My
          <span className="text-green-site "> Blog</span> 📖
        </Text>

        <div className="">
          <div className="flex flex-row justify-start gap-x-5 flex-wrap">
            <button
              className="font-bold text-xl "
              onClick={() => setFilter("All")}
            >
              All
            </button>
            {allBlogCategories.map((category, index) => {
              return (
                <button
                  className="font-bold text-xl"
                  key={index}
                  onClick={() => setFilter(category.name)}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {years.map((year) => {
          return (
            <>
              {filter === "All"
                ? allPosts.map((post, index) => {
                    console.log(post);
                    if (post.date.substring(0, 4) == year) {
                      return (
                        <>
                          <BlogPost
                            title={post.title}
                            coverImage={post.coverImage}
                            key={index}
                            date={post.date}
                            author={post.author}
                            slug={post.slug}
                            excerpt={post.excerpt}
                            blogCategory={post.blogCategory}
                          />
                        </>
                      );
                    }
                  })
                : allPosts.map((post, index) => {
                    return filter === post.blogCategory[0].name &&
                      post.date.substring(0, 4) == year ? (
                      <>
                        {year}
                        <BlogPost
                          title={post.title}
                          coverImage={post.coverImage}
                          key={index}
                          date={post.date}
                          author={post.author}
                          slug={post.slug}
                          excerpt={post.excerpt}
                          blogCategory={post.blogCategory}
                        />
                      </>
                    ) : null;
                  })}
            </>
          );
        })}

        {morePosts.length > 0 && (
          <>
            <MoreStories posts={morePosts} />
          </>
        )}
      </Container>
      <Footer></Footer>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  const allBlogCategories = overlayDrafts(
    await getClient(preview).fetch(categoryQuery)
  );
  return {
    props: { allPosts, preview, allBlogCategories },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}

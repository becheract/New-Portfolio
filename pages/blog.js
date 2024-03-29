import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Text from "../components/Text";
import { indexQuery, categoryQuery } from "../lib/queries";
import { usePreviewSubscription } from "../lib/sanity";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import { useEffect, useState } from "react";
import BlogPost from "../components/blogPost";
import Footer from "../components/footer";
import { v4 as uuid_v4 } from "uuid";
import Head from "next/head";

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

  const [...morePosts] = allPosts || [];
  const [filter, setFilter] = useState("All");
  const [years, setYears] = useState([]);
  console.log(allPosts);
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
      <Head>
        <title> Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Text style={"Heading"}>
        <title>Blog</title>
      </Text>

      <Container>
        <Text style={"Heading"}>
          {" "}
          My
          <span className="text-green-site "> Blog</span> 📖
        </Text>

        <div className="">
          <div
            key={uuid_v4()}
            className="flex flex-row justify-start gap-x-5 flex-wrap"
          >
            <button
              className="font-bold text-xl "
              onClick={() => setFilter("All")}
              key={uuid_v4()}
            >
              All
            </button>
            {allBlogCategories.map((category) => {
              return (
                <button
                  className="font-bold text-xl"
                  key={uuid_v4()}
                  onClick={() => setFilter(category.name)}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-wrap flex-row">
          {years.map((year) => {
            return (
              <>
                {filter === "All"
                  ? allPosts.map((post) => {
                      if (post.date.substring(0, 4) == year) {
                        return (
                          <>
                            <BlogPost
                              title={post.title}
                              coverImage={post.coverImage}
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
                  : allPosts.map((post) => {
                      return filter === post.blogCategory[0].name &&
                        post.date.substring(0, 4) == year ? (
                        <>
                          <BlogPost
                            title={post.title}
                            coverImage={post.coverImage}
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
        </div>
        {/* {morePosts.length > 0 && (
          <>
            <MoreStories posts={morePosts} />
          </>
        )} */}
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

import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { CMS_NAME } from "../lib/constants";
import { indexQuery, categoryQuery } from "../lib/queries";
import { previewClient } from "../lib/sanity.server";
import { usePreviewSubscription } from "../lib/sanity";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import { useEffect, useState } from "react";
import BlogPost from "../components/blogPost";
import { set } from "date-fns";

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
  const [yearCategory, setYearCategory] = useState([]);

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

  console.log(years);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>

        <Container>
          <Intro text={"Blog 📖"} />

          <div className="flex justify-start flex-row flex-wrap w-screen">
            <div className="flex flex-row gap-x-10 w-100">
              <button
                className="font-bold text-xl"
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

          {/* {hero && (
            <HeroPost
              title={hero.title}
              coverImage={hero.coverImage}
              date={hero.date}
              author={hero.author}
              slug={hero.slug}
              excerpt={hero.excerpt}
            />
          )} */}

          {years.map((year) => {
            return (
              <>
                {filter === "All"
                  ? allPosts.map((post, index) => {
                      console.log(post);
                      if (post.date.substring(0, 4) == year) {
                        return (
                          <>
                            <h1>{year}</h1>
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
      </Layout>
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

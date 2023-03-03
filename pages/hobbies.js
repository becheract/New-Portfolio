import Container from "../components/container";
import Text from "../components/Text";
import { hobbiesQuery, hobbyCategoryQuery } from "../lib/queries";
import { usePreviewSubscription } from "../lib/sanity";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import { useEffect, useState } from "react";
import HobbyPost from "../components/hobbyPost";
import Footer from "../components/footer";
import { v4 as uuid_v4 } from "uuid";
import Head from "next/head";
import Skills from "../components/skills";
export default function Hobbies({
  allPosts: initialAllPosts,
  preview,
  allHobbyCategories: categories,
}) {
  const { data: allHobbies } = usePreviewSubscription(hobbiesQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  });
  const { data: allHobbyCategories } = usePreviewSubscription(
    hobbyCategoryQuery,
    {
      initialData: categories,
      enabled: preview,
    }
  );

  const [...morePosts] = allHobbies || [];
  const [filter, setFilter] = useState("All");
  const [years, setYears] = useState([]);
  const [modal, setModal] = useState(false);
  const [images, setImages] = useState([]);

  const OpenImages = async (albumImages) => {
    switch (modal) {
      case true:
        console.log("running");
        albumImages.map((img) => {
          console.log(img);
          async () => {
            console.log(img._ref);
            const refdocument = await client.get(img._ref);
            console.log(refdocument);
          };
        });
        setModal(false);
        break;
      case false:
        setModal(true);
        setImages([]);
        break;
    }
  };

  console.log(initialAllPosts);
  useEffect(() => {
    let years = [];
    initialAllPosts.map((post) => {
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
        <title> Hobbies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Text style={"Heading"}>
        <title>Hobbies</title>
      </Text>

      <Container>
        <Text style={"Heading"}>
          {" "}
          My
          <span className="text-green-site "> Hobbies</span> 📖
        </Text>

        <div className="">
          <div className="flex flex-row justify-start gap-x-5 flex-wrap">
            <button
              className="font-bold text-xl "
              onClick={() => setFilter("All")}
            >
              All
            </button>
            {allHobbyCategories.map((category) => {
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
        {/*modal for image*/}

        {!modal ? (
          <>
            <div>
              <h1>off</h1>
            </div>
          </>
        ) : (
          <>
            <div>
              <h1>On</h1>
            </div>
          </>
        )}
        {years.map((year) => {
          return (
            <div key={uuid_v4()}>
              {filter === "All"
                ? initialAllPosts.map((post) => {
                    if (post.date.substring(0, 4) == year) {
                      return (
                        <div
                          key={uuid_v4()}
                          onClick={() => OpenImages(post.images)}
                        >
                          <HobbyPost
                            title={post.title}
                            date={post.date}
                            coverImage={post.coverImage}
                            hobbyCategory={post.hobbycategory}
                            images={post.images}
                            placeholder={post.placeholder}
                          />
                        </div>
                      );
                    }
                  })
                : initialAllPosts.map((post) => {
                    return filter === post.hobbycategory[0].name &&
                      post.date.substring(0, 4) == year ? (
                      <div
                        key={uuid_v4()}
                        onClick={() => OpenImages(post.images)}
                      >
                        <HobbyPost
                          title={post.title}
                          date={post.date}
                          coverImage={post.coverImage}
                          hobbyCategory={post.hobbycategory}
                          images={post.images}
                          placeholder={post.placeholder}
                        />
                      </div>
                    ) : null;
                  })}
            </div>
          );
        })}
      </Container>
      <Footer></Footer>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(hobbiesQuery));
  const allHobbyCategories = overlayDrafts(
    await getClient(preview).fetch(hobbyCategoryQuery)
  );
  return {
    props: { allPosts, preview, allHobbyCategories },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}

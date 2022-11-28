import Container from "../components/container";
import Text from "../components/Text";
import { hobbiesQuery } from "../lib/queries";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import { useState } from "react";
import Footer from "../components/footer";
import { v4 as uuid_v4 } from "uuid";
import Head from "next/head";
import { previewClient } from "../lib/sanity.server";
import Image from "next/image";
import { urlForImage } from "../lib/sanity";
import { usePreviewSubscription } from "../lib/sanity";
export default function Index({ hobby }) {
  const [allHobbies] = useState(hobby);

  console.log(allHobbies);
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
          <span className="text-green-site "> Hobbies</span> 🎨
        </Text>

        <div className="">
          <div className="flex flex-row justify-start gap-x-5 flex-wrap">
            <button
              className="font-bold text-xl "
              onClick={() => setFilter("All")}
            >
              All
            </button>
          </div>
        </div>
        <div
          key={uuid_v4()}
          className="relative w-1/4 h-full text-center  text-white -z-1"
        >
          {/* {hobbies.map((album) => {
            return (
              <>
                <div className="bg-black border-[0.5px] border-black-500 rounded w-100 h-100 ">
                  <Image
                    width={"300"}
                    height={"170"}
                    src={urlForImage(album.placeholder.asset._ref)
                      .height(170)
                      .width(300)
                      .url()}
                    alt={album.title}
                  />
                </div>

                <span className="flex w-100 justify-center align-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {album.title}
                </span>
              </>
            );
          })} */}
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}

export async function getStaticProps() {
  const hobbies = await previewClient.fetch(hobbiesQuery);
  console.log(hobbies);
  return {
    props: {
      hobbies,
    },
  };
}

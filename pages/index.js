import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Portfolio from "../components/portfolio";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { CMS_NAME } from "../lib/constants";
import { portfolioQuery } from "../lib/queries";
import { usePreviewSubscription } from "../lib/sanity";
import { getClient, overlayDrafts, previewClient } from "../lib/sanity.server";
import { useEffect, useState } from "react";

export default function Index({ projects }) {
  return (
    <>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <Intro text={"Landing Page"} />
        {projects.length > 0 &&
          projects.map((project, index) => {
            return (
              <Portfolio
                key={index}
                title={project.title}
                content={project.content}
                project_image={project.project_image}
                skills={project.skills}
              />
            );
          })}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const projects = await previewClient.fetch(portfolioQuery);

  return {
    props: {
      projects,
    },
  };
}

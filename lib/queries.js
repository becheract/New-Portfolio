const postFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  blogCategory[]->{name},
`;

const projectFields = `
  _id,
  title,
  content,
  project_image,
  category[]->{name},
  skills[]->{picture},
  github,
`;

const hobbiesFields = `
  _id,
  title,
  placeholder,
  images,
  hobbyCategory[]->{name},
  date,
`;

const experienceFields = `
  year,
  job,
  where
`;

export const experienceQuery = `
*[_type == "experience"]{
  ${experienceFields}
}
`;

export const hobbiesQuery = `
*[_type == "hobbies"]{
  ${hobbiesFields}
}
`;

const blogCategoryFields = `
  _id,
  name,
`;

export const categoryQuery = `
*[_type == "blogcategory"]{
  ${blogCategoryFields}
}
`;

const skillQuery = `
  name,
  picture
`;

const projectCategoryFields = `
  name,
`;

export const projectCategoryQuery = `
*[_type == "category"]{
  ${projectCategoryFields}
}
`;

export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const portfolioQuery = `
*[_type == "project"]{
  ${projectFields}
}`;

export const skillsQuery = `
*[_type == "skill"]{
  ${skillQuery}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

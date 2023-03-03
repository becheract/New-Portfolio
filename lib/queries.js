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

const newHobbyFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  hobbycategory[]->{name},
`;

const projectFields = `
  _id,
  title,
  content,
  project_image,
  category[]->{name},
  imageproject[]->{picture},
  skills[]->{picture, name},
  github,
`;

const hobbiesFields = `
  _id,
  title,
  placeholder,
  images,
  date,
  hobbycategory[]->{name},
`;

const images = `
  _id,
  title,
  picture
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
*[_type == "hobbies"] | order(date desc, _updatedAt desc){
  ${hobbiesFields}
}
`;

export const hobbyImages = `
*[_type == "image"]{
  ${images}
}
`;

export const newHobbyQuery = `
*[_type == "newhobby"] | order(date desc, _updatedAt desc){
  ${newHobbyFields}
}
`;

const blogCategoryFields = `
  _id,
  name,
`;

const hobbyCategoryFields = `
  _id,
  name,
`;

export const hobbyCategoryQuery = `
*[_type == "hobbycategory"]{
  ${hobbyCategoryFields}
}
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
*[_type == "project" && !(_id in path("drafts.**"))]{
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

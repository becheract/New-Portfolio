// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
// import blockContent from './blockContent'
import post from "./post";
import project from "./project";
import skill from "./skill";
import experience from "./experience";
import hobbies from "./hobbies";
import hobbycategory from "./hobbyCategory";
import category from "./category";
import BlogCategory from "./blogCategory";
import photos from "./Gallery";
import ImageProject from "./imageProject";
// import test from "./test";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    post,
    skill,
    project,
    experience,
    hobbies,
    category,
    BlogCategory,
    ImageProject,
    hobbycategory,
    photos,
  ]),
});

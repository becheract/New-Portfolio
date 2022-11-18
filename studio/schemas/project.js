export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },

    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },

    {
      name: "github",
      title: "Github",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "project_image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

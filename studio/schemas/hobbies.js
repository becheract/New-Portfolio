export default {
  name: "hobbies",
  title: "Hobbies",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "placeholder",
      title: "Placeholder",
      type: "image",
    },

    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "hobbycategory",
      title: "Hobby Category",
      type: "array",
      of: [{ type: "reference", to: { type: "hobbycategory" } }],
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "reference", to: { type: "test" } }],
    },
  ],
};

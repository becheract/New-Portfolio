export default {
  name: "gallery",
  title: "Gallery",
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
  ],
};

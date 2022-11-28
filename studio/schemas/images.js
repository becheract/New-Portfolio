export default {
  name: "images",
  title: "Images",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "picture",
      title: "Picture",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default {
  name: "photos",
  title: "Photos",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
  ],
};

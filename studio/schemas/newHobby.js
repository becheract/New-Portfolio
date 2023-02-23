export default {
  name: "newhobby",
  title: "New Hobby",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
        },
      ],
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "hobbyCategory",
      title: "Hobby Category",
      type: "array",
      of: [{ type: "reference", to: { type: "hobbycategory" } }],
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "coverImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
};

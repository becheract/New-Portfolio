export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'year',
        title: 'Year',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'job',
        title: 'Job',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'where',
        title: 'Where',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },

    ],
  }
  
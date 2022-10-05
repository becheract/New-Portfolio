export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        of: [{ type: 'image' }]
    }
    
    ],
  }
  
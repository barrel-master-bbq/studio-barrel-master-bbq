import {defineType, defineField} from 'sanity'

export const findUsPage = defineType({
  name: 'findUsPage',
  title: 'Find Us Page',
  type: 'document',

  fields: [
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'string',
        },
        {
          name: 'updatedAt',
          title: 'Updated At Text',
          type: 'string',
        },
        {
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'calendar',
      title: 'Calendar',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'string',
        },
        {
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
        },
      ],
    }),
  ],
})

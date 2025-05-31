import {defineType, defineField} from 'sanity'

export const cateringPage = defineType({
  name: 'cateringPage',
  title: 'Catering Page',
  type: 'document',

  fields: [
    defineField({
      name: 'banner',
      title: 'Banner Section',
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
          name: 'image',
          title: 'Image',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'cateringCard',
      title: 'Catering Card',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        },
      ],
    }),
  ],
})

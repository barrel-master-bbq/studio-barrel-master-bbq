import {defineType, defineField} from 'sanity'

export const menuPage = defineType({
  name: 'menuPage',
  title: 'Menu Page',
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
      name: 'orderCard',
      title: 'Order Card',
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
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        },
      ],
    }),
  ],
})

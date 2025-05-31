import {defineType, defineField} from 'sanity'

export const orderPage = defineType({
  name: 'orderPage',
  title: 'Order Page',
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
      name: 'order',
      title: 'Order Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            {
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
                  type: 'string',
                },
              ],
            },
          ],
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
    defineField({
      name: 'featuredMenuSection',
      title: 'Featured Menu Section',
      type: 'object',
      fields: [
        {
          type: 'string',
          name: 'heading',
          title: 'Heading',
        },
      ],
    }),
  ],
})

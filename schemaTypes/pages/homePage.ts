import {defineType, defineField} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
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
          name: 'menuButton',
          title: 'Menu Button',
          type: 'string',
        },
        {
          name: 'orderButton',
          title: 'Order Button',
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
      name: 'about',
      title: 'About Section',
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
          name: 'image',
          title: 'Image',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'featured Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
        },
        {
          name: 'menuButton',
          title: 'Menu Button',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'findUs',
      title: 'Find Us Section',
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
          name: 'button',
          title: 'Button Text',
          type: 'string',
        },
      ],
    }),
  ],
})

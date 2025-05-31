import {defineField, defineType} from 'sanity'

export const emblem = defineType({
  title: 'Emblem',
  name: 'emblem',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    }),
  ],
})

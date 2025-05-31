import {defineField, defineType} from 'sanity'

export const bannerImage = defineType({
  title: 'Banner Image',
  name: 'bannerImage',
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

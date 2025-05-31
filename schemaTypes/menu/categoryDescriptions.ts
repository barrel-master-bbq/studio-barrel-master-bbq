import {defineField, defineType} from 'sanity'

export const categoryDescriptions = defineType({
  name: 'categoryDescription',
  title: 'Category Descriptions',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})

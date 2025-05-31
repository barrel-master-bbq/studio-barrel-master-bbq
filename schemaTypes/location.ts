import {defineType, defineField} from 'sanity'

export const location = defineType({
  name: 'location',
  title: 'Current Location',
  type: 'document',

  fields: [
    defineField({
      name: 'locationName',
      title: 'Location Name',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
  ],
})

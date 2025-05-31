import {defineType} from 'sanity'

export const externalLinks = defineType({
  name: 'externalLinks',
  title: 'External Links',
  type: 'document',
  fields: [
    {
      name: 'orderFormUrl',
      title: 'Order Form Url',
      type: 'url',
      initialValue: 'https://forms.gle/MrTsLZNvXumv2nZd6',
    },
    {
      name: 'googleCalendarLink',
      title: 'Google Calendar Link',
      type: 'url',
      initialValue:
        'https://calendar.google.com/calendar/embed?src=barrelmasterbbq%40gmail.com&ctz=America%2FDenver',
    },
  ],
})

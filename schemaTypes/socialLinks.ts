import {defineType} from 'sanity'

export const socialLinks = defineType({
  name: 'socialLinks',
  title: 'Social Links',
  type: 'object',
  fields: [
    {
      name: 'instagram',
      type: 'url',
      title: 'Instagram',
    },
    {
      name: 'twitter',
      type: 'url',
      title: 'Twitter',
    },
    {
      name: 'tiktok',
      type: 'url',
      title: 'TikTok',
    },
    {
      name: 'bluesky',
      type: 'url',
      title: 'Bluesky',
    },
  ],
})

import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Gallery',
  icon: ImagesIcon,
  type: 'document',
  fields: [
    defineField({
      title: 'Image (required)',
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Alt Tag (required)',
      name: 'alt',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Caption',
      name: 'caption',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      media: 'image',
      title: 'alt',
      subtitle: 'caption',
    },
  },
})

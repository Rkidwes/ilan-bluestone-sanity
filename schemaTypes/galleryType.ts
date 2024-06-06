import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Gallery',
  icon: ImagesIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alt',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      type: 'string',
    }),
  ],
})

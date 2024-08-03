import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const bio = defineType({
  name: 'bio',
  title: 'Biography',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'biographyTitle',
      title: 'Biography Title',
      type: 'string',
      // group: 'biography'
    }),
    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'array',
      of: [{type: 'block'}],
      // group: 'biography'
    }),
  ],
})
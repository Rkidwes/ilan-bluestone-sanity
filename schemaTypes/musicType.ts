import {defineField, defineType} from 'sanity'
import {PlayIcon} from '@sanity/icons'

export const musicType = defineType({
  name: 'music',
  title: 'Music',
  icon: PlayIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'releaseDate',
      type: 'date',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'listen',
      type: 'url',
    }),
  ],
})

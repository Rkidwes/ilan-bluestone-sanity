import {defineField, defineType} from 'sanity'
import {StarIcon} from '@sanity/icons'

export const music = defineType({
  name: 'music',
  title: 'Music',
  icon: StarIcon,
  type: 'document',
  fields: [
    defineField({
      title: 'Background',
      name: 'musicBg',
      type: 'image',
      // group: 'pageBgs'
    }),
    defineField({
      title: 'Background Opacity',
      name: 'musicBgOpacity',
      type: 'number',
      description:
        'If you wish to make your image transparent please enter a value between 0 and 1',
      validation: (rule) => rule.min(0).max(1).error('A value between 0 and 1 is required'),
      // group: 'pageBgs'
    }),
  ],
})
import {defineField, defineType} from 'sanity'
import {ConfettiIcon} from '@sanity/icons'

export const tour = defineType({
  name: 'tour',
  title: 'Tour',
  icon: ConfettiIcon,
  type: 'document',
  fields: [
    defineField({
      title: 'Background',
      name: 'tourBg',
      type: 'image',
      // group: 'pageBgs'
    }),
    defineField({
      title: 'Background Opacity',
      name: 'tourBgOpacity',
      type: 'number',
      // group: 'pageBgs',
      description: 'If you wish to make your image transparent please enter a value between 0 and 1',
      validation: rule => rule.min(0).max(1).error('A value between 0 and 1 is required'),
    }),
  ],
})
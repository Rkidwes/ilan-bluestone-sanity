import {defineField, defineType} from 'sanity'
import {StarIcon} from '@sanity/icons'

export const bookings = defineType({
  name: 'bookings',
  title: 'Bookings',
  icon: StarIcon,
  type: 'document',
  fields: [
    defineField({
      title: 'Background',
      name: 'bookingsBg',
      type: 'image',
    }),
    defineField({
      title: 'Background Opacity',
      name: 'bookingsBgOpacity',
      type: 'number',
      description:
        'If you wish to make your image transparent please enter a value between 0 and 1',
      validation: (rule) => rule.min(0).max(1).error('A value between 0 and 1 is required'),
    }),
  ],
})
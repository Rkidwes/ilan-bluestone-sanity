import {defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  icon: CalendarIcon,
  type: 'document',
  fields: [
    defineField({
      title: 'Event Name (required)',
      name: 'eventName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
    }),
    defineField({
      title: 'Start Date (required)',
      name: 'startDate',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      type: 'date',
    }),
    defineField({
      name: 'ticketsURL',
      description: 'The page where tickets can be purchased (e.g. https://www.example.com)',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'eventName',
      subtitle: 'startDate',
    },
  },
})

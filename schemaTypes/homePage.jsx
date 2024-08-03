import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  icon: HomeIcon,
  type: 'document',
  groups: [
    {name: 'homepage', title: 'Home Page'},
    {name: 'slidesOrder', title: 'Slides Order'},
  ],
  fields: [
    defineField({
      name: 'hpTitle',
      title: 'Homepage Title',
      type: 'string',
      group: 'homepage'
    }),
    defineField({
      name: 'hpText',
      title: 'Homepage Text',
      type: 'array',
      of: [{type: 'block'}],
      group: 'homepage'
    }),
    defineField({
      name: 'hpLinkText',
      title: 'Homepage Link Text',
      type: 'string',
      group: 'homepage'
    }),
    defineField({
      name: 'hpLinkURL',
      title: 'Homepage Link',
      type: 'string',
      hidden: ({document}) => !document?.hpLinkText,
      group: 'homepage'
    }),
    defineField({
      name: 'slide1',
      title: 'Slide #1',
      type: 'reference',
      to: [{type: 'slide'}],
      group: 'slidesOrder',
    }),
    defineField({
      name: 'slide2',
      title: 'Slide #2',
      type: 'reference',
      to: [{type: 'slide'}],
      group: 'slidesOrder',
    }),
    defineField({
      name: 'slide3',
      title: 'Slide #3',
      type: 'reference',
      to: [{type: 'slide'}],
      group: 'slidesOrder',
    }),
    defineField({
      name: 'slide4',
      title: 'Slide #4',
      type: 'reference',
      to: [{type: 'slide'}],
      group: 'slidesOrder',
    }),
  ],
})
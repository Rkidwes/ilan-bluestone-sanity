import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  icon: CogIcon,
  type: 'document',
  groups: [
    {name: 'homepage', title: 'Home Page'},
    {name: 'biography', title: 'Biography'},
    {name: 'slidesOrder', title: 'Slides Order'},
    {name: 'pageBgs', title: 'Page Backgrounds'},
    {name: 'socialIcons', title: 'Social Icons'},
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
      name: 'biographyTitle',
      title: 'Biography Title',
      type: 'string',
      group: 'biography'
    }),
    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'array',
      of: [{type: 'block'}],
      group: 'biography'
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
    defineField({
      name: 'tourBg',
      type: 'image',
      group: 'pageBgs'
    }),
    defineField({
      name: 'tourBgOpacity',
      type: 'number',
      group: 'pageBgs',
      description: 'If you wish to make your image transparent please enter a value between 0 and 1',
      validation: rule => rule.min(0).max(1).error('A value between 0 and 1 is required'),
    }),
    defineField({
      name: 'galleryBg',
      type: 'image',
      group: 'pageBgs'
    }),
    defineField({
      name: 'galleryBgOpacity',
      type: 'number',
      group: 'pageBgs'
    }),
    defineField({
      name: 'musicBg',
      type: 'image',
      group: 'pageBgs'
    }),
    defineField({
      name: 'musicBgOpacity',
      type: 'number',
      group: 'pageBgs'
    }),
    defineField({
      name: 'bookingsBg',
      type: 'image',
      group: 'pageBgs'
    }),
    defineField({
      name: 'bookingsBgOpacity',
      type: 'number',
      group: 'pageBgs'
    }),
  ],
})
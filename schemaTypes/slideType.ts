import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const slideType = defineType({
  name: 'slide',
  title: 'Slide',
  icon: ImageIcon,
  type: 'document',
  fields: [
    defineField({
      title: 'Headline (required)',
      name: 'headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: 'image',
    //   type: 'image',
    //   validation: (rule) => rule.required(),
    // }),
    defineField({
      title: 'Asset Type',
      name: 'assetType',
      type: 'string',
      initialValue: 'image',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'},
        ], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    }),
    defineField({
      title: 'Image (required)',
      name: 'image',
      type: 'image',
      hidden: ({document}) => document?.assetType !== 'image',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const {document} = context
          if (document?.assetType === 'image' && !value) {
            return 'Image is required'
          }
          return true
        }),
    }),
    defineField({
      title: 'Video (required)',
      name: 'video',
      type: 'file',
      hidden: ({document}) => document?.assetType !== 'video',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const {document} = context
          if (document?.assetType === 'video' && !value) {
            return 'Video is required'
          }
          return true
        }),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'linkText',
      type: 'string',
    }),
    defineField({
      title: 'Link URL (required)',
      name: 'linkURL',
      type: 'string',
      hidden: ({document}) => !document?.linkText,
    }),
    defineField({
      name: 'external',
      type: 'boolean',
      hidden: ({document}) => !document?.linkText,
      description:
        'If false, or left unset, link from this slide will open on top of the current page. As such, external links should be set to true.',
    }),
    defineField({
      title: 'Slide Title (required)',
      name: 'slideTitle',
      type: 'string',
      description: 'Short description for slider pagination tab',
      validation: (rule) => rule.required(),
    }),
  ],
})

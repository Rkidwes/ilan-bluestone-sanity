import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'
import {imageWithOrder} from './imageWithOrder' // Ensure correct import path

export const altGalleryType = defineType({
  name: 'altGallery',
  type: 'document',
  icon: ImagesIcon,
  title: 'Alt Gallery',
  fields: [
    defineField({
      title: 'Gallery Background',
      name: 'galleryBg',
      type: 'image',
      // group: 'pageBgs'
    }),
    defineField({
      title: 'Gallery Background Opacity',
      name: 'galleryBgOpacity',
      type: 'number',
      description:
        'If you wish to make your image transparent please enter a value between 0 and 1',
      validation: (rule) => rule.min(0).max(1).error('A value between 0 and 1 is required'),
      // group: 'pageBgs'
    }),
    // defineField({
    //   name: 'title',
    //   type: 'string',
    //   title: 'Title',
    // }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'imageWithOrder'}], // Ensure correct type reference
    }),
  ],
  // initialValue: {
  //   title: 'Gallery',
  // },
})

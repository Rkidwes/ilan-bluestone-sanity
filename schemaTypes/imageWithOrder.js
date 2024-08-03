import {defineField, defineType} from 'sanity';

export const imageWithOrder = defineType({
  name: 'imageWithOrder',
  type: 'object',
  title: 'Image with Order',
  fields: [
    // defineField({
    //   name: 'image',
    //   type: 'image',
    //   title: 'Image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
      title: 'Image (required)',
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: 'order',
    //   type: 'number',
    //   title: 'Display Order',
    // }),
    defineField({
      title: 'Alt Tag (required)',
      name: 'alt',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   title: 'Caption',
    //   name: 'caption',
    //   type: 'string',
    // }),
  ],
});
import type {StructureResolver} from 'sanity/structure'
import {CalendarIcon, ImageIcon, ImagesIcon, PlayIcon, UserIcon, CogIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Global Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      // ...S.documentTypeListItems(),
      // S.listItem()
      //   .title('Upcoming Events')
      //   .schemaType('event')
      //   .icon(CalendarIcon)
      //   .child(S.documentList().title('Upcoming Events').filter('date > now()')),
      // S.listItem()
      //   .title('Past Events')
      //   .schemaType('event')
      //   .icon(CalendarIcon)
      //   .child(S.documentList().title('Past Events').filter('date < now()')),
      // S.divider(),
      S.divider(),
      S.documentTypeListItem('slide').title('Slides').icon(ImageIcon),
      S.documentTypeListItem('event').title('Events').icon(CalendarIcon),
      // S.documentTypeListItem('music').title('Music').icon(PlayIcon),
      // S.documentTypeListItem('gallery').title('Gallery').icon(ImagesIcon),
      S.documentTypeListItem('gallery').title('Gallery').icon(ImagesIcon),
      // S.documentTypeListItem('artist').title('Artists').icon(UsersIcon),
      // S.documentTypeListItem('venue').title('Venues').icon(PinIcon),
    ])

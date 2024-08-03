import type {StructureResolver} from 'sanity/structure'
import {
  CalendarIcon,
  ImageIcon,
  ImagesIcon,
  HomeIcon,
  PlayIcon,
  ConfettiIcon,
  UserIcon,
  CogIcon,
} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Global Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.listItem()
        .title('Homepage')
        .icon(HomeIcon)
        .child(S.document().schemaType('homePage').documentId('homePage').title('Homepage')),
      S.documentTypeListItem('slide').title('Slides').icon(ImageIcon),
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
      S.listItem()
        .title('Bio')
        .icon(UserIcon)
        .child(S.document().schemaType('bio').documentId('bio').title('Biography')),
      S.divider(),
      S.listItem()
        .title('Tour')
        .icon(ConfettiIcon)
        .child(S.document().schemaType('tour').documentId('tour').title('Tour')),
      S.documentTypeListItem('event').title('Events').icon(CalendarIcon),
      S.divider(),
      S.documentTypeListItem('gallery').title('Gallery').icon(ImagesIcon),
      S.listItem()
        .title('New Gallery (Experimental)')
        .icon(ImagesIcon)
        .child(S.document().schemaType('altGallery').documentId('altGallery').title('Gallery')),
      S.divider(),
      S.listItem()
        .title('Music')
        .icon(HomeIcon)
        .child(S.document().schemaType('music').documentId('music').title('Music')),
      S.divider(),
      S.listItem()
        .title('Bookings')
        .icon(HomeIcon)
        .child(S.document().schemaType('bookings').documentId('bookings').title('Bookings')),
      // S.documentTypeListItem('music').title('Music').icon(PlayIcon),
      // S.documentTypeListItem('gallery').title('Gallery').icon(ImagesIcon),
      // S.documentTypeListItem('altGallery').title('Alt Gallery').icon(ImagesIcon),
      // S.documentTypeListItem('artist').title('Artists').icon(UsersIcon),
      // S.documentTypeListItem('venue').title('Venues').icon(PinIcon),
    ])

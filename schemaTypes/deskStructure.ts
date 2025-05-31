import {StructureResolver} from 'sanity/structure'

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .id('pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home Page')
                .id('homePage')
                .child(
                  S.document()
                    .schemaType('homePage')
                    .documentId('singleton-homePage')
                    .title('Home Page'),
                ),
              S.listItem()
                .title('Menu Page')
                .id('menuPage')
                .child(
                  S.document()
                    .schemaType('menuPage')
                    .documentId('singleton-menuPage')
                    .title('Menu Page'),
                ),
              S.listItem()
                .title('Catering Page')
                .id('cateringPage')
                .child(
                  S.document()
                    .schemaType('cateringPage')
                    .documentId('singleton-cateringPage')
                    .title('Catering Page'),
                ),
              S.listItem()
                .title('Find Us Page')
                .id('findUsPage')
                .child(
                  S.document()
                    .schemaType('findUsPage')
                    .documentId('singleton-findUsPage')
                    .title('Find Us Page'),
                ),
              S.listItem()
                .title('Order Page')
                .id('orderPage')
                .child(
                  S.document()
                    .schemaType('orderPage')
                    .documentId('singleton-orderPage')
                    .title('Order Page'),
                ),
              S.listItem()
                .title('Contact Page')
                .id('contactPage')
                .child(
                  S.document()
                    .schemaType('contactPage')
                    .documentId('singleton-contactPage')
                    .title('Contact Page'),
                ),
            ]),
        ),

      S.listItem()
        .title('Menu')
        .id('menu')
        .child(
          S.list()
            .title('Menu')
            .items([
              S.listItem()
                .title('Menu Items')
                .id('menuItems')
                .child(
                  S.documentTypeList('menuItem').title('Menu Items').filter('_type == "menuItem"'),
                ),
              S.listItem()
                .title('Category Descriptions')
                .id('categoryDescriptions')
                .child(
                  S.documentTypeList('categoryDescription')
                    .title('Category Descriptions')
                    .filter('_type == "categoryDescription"'),
                ),
            ]),
        ),

      S.listItem()
        .title('Location')
        .id('location')
        .child(
          S.document().schemaType('location').documentId('singleton-location').title('Location'),
        ),

      S.listItem()
        .title('Images')
        .id('images')
        .child(
          S.list()
            .title('Images')
            .items([
              S.listItem()
                .title('Logo')
                .id('logoImage')
                .child(
                  S.document()
                    .schemaType('logoImage')
                    .documentId('singleton-logoImage')
                    .title('Logo'),
                ),
              S.listItem()
                .title('Emblem')
                .id('emblem')
                .child(
                  S.document().schemaType('emblem').documentId('singleton-emblem').title('Emblem'),
                ),
              S.listItem()
                .title('Banner')
                .id('bannerImage')
                .child(
                  S.document()
                    .schemaType('bannerImage')
                    .documentId('singleton-bannerImage')
                    .title('Banner Image'),
                ),
            ]),
        ),

      S.listItem()
        .title('Social Links')
        .id('socialLinks')
        .child(
          S.document()
            .schemaType('socialLinks')
            .documentId('singleton-socialLinks')
            .title('Social Links'),
        ),
      S.listItem()
        .title('External Links')
        .id('externalLinks')
        .child(
          S.document()
            .schemaType('externalLinks')
            .documentId('singleton-externalLinks')
            .title('External Links'),
        ),
    ])

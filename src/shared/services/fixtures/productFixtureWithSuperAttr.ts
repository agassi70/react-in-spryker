/* tslint:disable */
export const fixtureFull: any = {
  'data': {
    'type': 'abstract-products',
    'id': '135',
    'attributes': {
      'sku': '135',
      'name': 'Acer Chromebook CB5-311',
      'description': 'Amazing mobility Slip the Acer Chromebook into your bag and work from anywhere, without recharging, because it has enough battery life to last all day long on a single charge. Indulge your eyes and see everything in vivid detail on the Acer Chromebook\'s Full HD display. The Acer Chromebook features the latest 802.11ac wireless technology, for a smooth internet experience at connection speeds that are up to three times faster than that of previous-generation wireless technologies. The Acer Chromebook starts within 8 seconds, so you can wait less and do more. At less than an inch thin and extremely light, the Acer Chromebook is the perfect tool for on-the-go computing. Plus, it sports a fanless design for whisper-quiet computing.',
      'attributes': {
        'form_factor': 'clamshell',
        'compatible_memory_cards': 'SD',
        'processor_cores': '4',
        'brand': 'Acer',
        'color': 'White',
      },
      'superAttributesDefinition': [
        'form_factor',
        'color',
      ],
      'attributeMap': {
        'attribute_variants': {
          'storage_media:SSD': {
            'id_product_concrete': '135_29836399',
          },
          'storage_media:Flash': {
            'id_product_concrete': '135_30359386',
          },
        },
        'super_attributes': {
          'storage_media': [
            'SSD',
            'Flash',
          ],
        },
        'product_concrete_ids': [
          '135_29836399',
          '135_30359386',
        ],
      },
      'metaTitle': 'Acer Chromebook CB5-311',
      'metaKeywords': 'Acer,Entertainment Electronics',
      'metaDescription': 'Amazing mobility Slip the Acer Chromebook into your bag and work from anywhere, without recharging, because it has enough battery life to last all day long',
    },
    'links': {
      'self': '/abstract-products/135',
    },
    'relationships': {
      'concrete-products': {
        'data': [
          {
            'type': 'concrete-products',
            'id': '135_29836399',
          },
          {
            'type': 'concrete-products',
            'id': '135_30359386',
          },
        ],
      },
      'abstract-product-image-sets': {
        'data': [
          {
            'type': 'abstract-product-image-sets',
            'id': '135',
          },
        ],
      },
      'abstract-product-availabilities': {
        'data': [
          {
            'type': 'abstract-product-availabilities',
            'id': '135',
          },
        ],
      },
      'abstract-product-prices': {
        'data': [
          {
            'type': 'abstract-product-prices',
            'id': '135',
          },
        ],
      },
      'category-nodes': {
        'data': [
          {
            'type': 'category-nodes',
            'id': '5',
          },
          {
            'type': 'category-nodes',
            'id': '6',
          },
          {
            'type': 'category-nodes',
            'id': '14',
          },
        ],
      },
      'tax-sets': {
        'data': [
          {
            'type': 'tax-sets',
            'id': '0e93b0d4-6d83-5fc1-ac1d-d6ae11690406',
          },
        ],
      },
    },
  },
  'included': [
    {
      'type': 'concrete-product-image-sets',
      'id': '135_29836399',
      'attributes': {
        'imageSets': [
          {
            'name': 'default',
            'images': [
              {
                'externalUrlLarge': '//images.icecat.biz/img/gallery/29836399_4420.jpg',
                'externalUrlSmall': '//images.icecat.biz/img/gallery_mediums/img_29836399_medium_1480606969_3257_31346.jpg',
              },
            ],
          },
        ],
      },
      'links': {
        'self': '/concrete-products/135_29836399/concrete-product-image-sets',
      },
    },
    {
      'type': 'concrete-product-availabilities',
      'id': '135_29836399',
      'attributes': {
        'availability': false,
        'quantity': 0,
        'isNeverOutOfStock': true,
      },
      'links': {
        'self': '/concrete-products/135_29836399/concrete-product-availabilities',
      },
    },
    {
      'type': 'concrete-product-prices',
      'id': '135_29836399',
      'attributes': {
        'price': 19137,
        'prices': [
          {
            'priceTypeName': 'DEFAULT',
            'netAmount': null,
            'grossAmount': 19137,
          },
        ],
      },
      'links': {
        'self': '/concrete-products/135_29836399/concrete-product-prices',
      },
    },
    {
      'type': 'concrete-products',
      'id': '135_29836399',
      'attributes': {
        'sku': '135_29836399',
        'name': 'Acer Chromebook CB5-311',
        'description': 'Amazing mobility Slip the Acer Chromebook into your bag and work from anywhere, without recharging, because it has enough battery life to last all day long on a single charge. Indulge your eyes and see everything in vivid detail on the Acer Chromebook\'s Full HD display. The Acer Chromebook features the latest 802.11ac wireless technology, for a smooth internet experience at connection speeds that are up to three times faster than that of previous-generation wireless technologies. The Acer Chromebook starts within 8 seconds, so you can wait less and do more. At less than an inch thin and extremely light, the Acer Chromebook is the perfect tool for on-the-go computing. Plus, it sports a fanless design for whisper-quiet computing.',
        'attributes': {
          'form_factor': 'clamshell',
          'compatible_memory_cards': 'SD',
          'processor_cores': '4',
          'brand': 'Acer',
          'color': 'White',
          'storage_media': 'SSD',
        },
        'superAttributesDefinition': [
          'form_factor',
          'color',
          'storage_media',
        ],
        'metaTitle': 'Acer Chromebook CB5-311',
        'metaKeywords': 'Acer,Entertainment Electronics',
        'metaDescription': 'Amazing mobility Slip the Acer Chromebook into your bag and work from anywhere, without recharging, because it has enough battery life to last all day long',
      },
      'links': {
        'self': '/concrete-products/135_29836399',
      },
      'relationships': {
        'concrete-product-image-sets': {
          'data': [
            {
              'type': 'concrete-product-image-sets',
              'id': '135_29836399',
            },
          ],
        },
        'concrete-product-availabilities': {
          'data': [
            {
              'type': 'concrete-product-availabilities',
              'id': '135_29836399',
            },
          ],
        },
        'concrete-product-prices': {
          'data': [
            {
              'type': 'concrete-product-prices',
              'id': '135_29836399',
            },
          ],
        },
      },
    },
    {
      'type': 'concrete-product-image-sets',
      'id': '135_30359386',
      'attributes': {
        'imageSets': [
          {
            'name': 'default',
            'images': [
              {
                'externalUrlLarge': '//images.icecat.biz/img/gallery/29836399_4420.jpg',
                'externalUrlSmall': '//images.icecat.biz/img/gallery_mediums/img_29836399_medium_1480606969_3257_31346.jpg',
              },
            ],
          },
        ],
      },
      'links': {
        'self': '/concrete-products/135_30359386/concrete-product-image-sets',
      },
    },
    {
      'type': 'concrete-product-availabilities',
      'id': '135_30359386',
      'attributes': {
        'availability': false,
        'quantity': 0,
        'isNeverOutOfStock': true,
      },
      'links': {
        'self': '/concrete-products/135_30359386/concrete-product-availabilities',
      },
    },
    {
      'type': 'concrete-product-prices',
      'id': '135_30359386',
      'attributes': {
        'price': 19137,
        'prices': [
          {
            'priceTypeName': 'DEFAULT',
            'netAmount': null,
            'grossAmount': 19137,
          },
        ],
      },
      'links': {
        'self': '/concrete-products/135_30359386/concrete-product-prices',
      },
    },
    {
      'type': 'concrete-products',
      'id': '135_30359386',
      'attributes': {
        'sku': '135_30359386',
        'name': 'Acer Chromebook CB5-311',
        'description': 'Amazing mobility Slip the Acer Chromebook into your bag and work from anywhere, without recharging, because it has enough battery life to last all day long on a single charge. Indulge your eyes and see everything in vivid detail on the Acer Chromebook\'s Full HD display. The Acer Chromebook features the latest 802.11ac wireless technology, for a smooth internet experience at connection speeds that are up to three times faster than that of previous-generation wireless technologies. The Acer Chromebook starts within 8 seconds, so you can wait less and do more. At less than an inch thin and extremely light, the Acer Chromebook is the perfect tool for on-the-go computing. Plus, it sports a fanless design for whisper-quiet computing.',
        'attributes': {
          'form_factor': 'clamshell',
          'compatible_memory_cards': 'SD',
          'processor_cores': '4',
          'brand': 'Acer',
          'color': 'White',
          'storage_media': 'Flash',
        },
        'superAttributesDefinition': [
          'form_factor',
          'color',
          'storage_media',
        ],
        'metaTitle': 'Acer Chromebook CB5-311',
        'metaKeywords': 'Acer,Entertainment Electronics',
        'metaDescription': 'Amazing mobility Slip the Acer Chromebook into your bag and work from anywhere, without recharging, because it has enough battery life to last all day long',
      },
      'links': {
        'self': '/concrete-products/135_30359386',
      },
      'relationships': {
        'concrete-product-image-sets': {
          'data': [
            {
              'type': 'concrete-product-image-sets',
              'id': '135_30359386',
            },
          ],
        },
        'concrete-product-availabilities': {
          'data': [
            {
              'type': 'concrete-product-availabilities',
              'id': '135_30359386',
            },
          ],
        },
        'concrete-product-prices': {
          'data': [
            {
              'type': 'concrete-product-prices',
              'id': '135_30359386',
            },
          ],
        },
      },
    },
    {
      'type': 'abstract-product-image-sets',
      'id': '135',
      'attributes': {
        'imageSets': [
          {
            'name': 'default',
            'images': [
              {
                'externalUrlLarge': '//images.icecat.biz/img/gallery/29836399_4420.jpg',
                'externalUrlSmall': '//images.icecat.biz/img/gallery_mediums/img_29836399_medium_1480606969_3257_31346.jpg',
              },
            ],
          },
        ],
      },
      'links': {
        'self': '/abstract-products/135/abstract-product-image-sets',
      },
    },
    {
      'type': 'abstract-product-availabilities',
      'id': '135',
      'attributes': {
        'availability': false,
        'quantity': 0,
      },
      'links': {
        'self': '/abstract-products/135/abstract-product-availabilities',
      },
    },
    {
      'type': 'abstract-product-prices',
      'id': '135',
      'attributes': {
        'price': 19137,
        'prices': [
          {
            'priceTypeName': 'DEFAULT',
            'netAmount': null,
            'grossAmount': 19137,
          },
        ],
      },
      'links': {
        'self': '/abstract-products/135/abstract-product-prices',
      },
    },
    {
      'type': 'category-nodes',
      'id': '5',
      'attributes': {
        'nodeId': 5,
        'name': 'Computer',
        'metaTitle': 'Computer',
        'metaKeywords': 'Computer',
        'metaDescription': 'Computer',
        'isActive': true,
        'children': [
          {
            'nodeId': 6,
            'name': 'Notebooks',
            'metaTitle': 'Notebooks',
            'metaKeywords': 'Notebooks',
            'metaDescription': 'Notebooks',
            'isActive': true,
            'children': {},
            'parents': {},
            'order': 100,
          },
          {
            'nodeId': 7,
            'name': 'Pc\'s/Workstations',
            'metaTitle': 'Pc\'s/Workstations',
            'metaKeywords': 'Pc\'s/Workstations',
            'metaDescription': 'Pc\'s/Workstations',
            'isActive': true,
            'children': {},
            'parents': {},
            'order': 90,
          },
          {
            'nodeId': 8,
            'name': 'Tablets',
            'metaTitle': 'Tablets',
            'metaKeywords': 'Tablets',
            'metaDescription': 'Tablets',
            'isActive': true,
            'children': {},
            'parents': {},
            'order': 80,
          },
        ],
        'parents': [
          {
            'nodeId': 1,
            'name': 'Demoshop',
            'metaTitle': 'Demoshop',
            'metaKeywords': 'English version of Demoshop',
            'metaDescription': 'English version of Demoshop',
            'isActive': true,
            'children': {},
            'parents': {},
            'order': null,
          },
        ],
        'order': 100,
      },
      'links': {
        'self': '/category-nodes/5',
      },
    },
    {
      'type': 'category-nodes',
      'id': '6',
      'attributes': {
        'nodeId': 6,
        'name': 'Notebooks',
        'metaTitle': 'Notebooks',
        'metaKeywords': 'Notebooks',
        'metaDescription': 'Notebooks',
        'isActive': true,
        'children': {},
        'parents': [
          {
            'nodeId': 5,
            'name': 'Computer',
            'metaTitle': 'Computer',
            'metaKeywords': 'Computer',
            'metaDescription': 'Computer',
            'isActive': true,
            'children': {},
            'parents': [
              {
                'nodeId': 1,
                'name': 'Demoshop',
                'metaTitle': 'Demoshop',
                'metaKeywords': 'English version of Demoshop',
                'metaDescription': 'English version of Demoshop',
                'isActive': true,
                'children': {},
                'parents': {},
                'order': null,
              },
            ],
            'order': 100,
          },
        ],
        'order': 100,
      },
      'links': {
        'self': '/category-nodes/6',
      },
    },
    {
      'type': 'category-nodes',
      'id': '14',
      'attributes': {
        'nodeId': 14,
        'name': 'Variant Showcase',
        'metaTitle': 'Variant Showcase',
        'metaKeywords': 'These are products that have more than 1 variant.',
        'metaDescription': 'These are products that have more than 1 variant.',
        'isActive': true,
        'children': {},
        'parents': [
          {
            'nodeId': 1,
            'name': 'Demoshop',
            'metaTitle': 'Demoshop',
            'metaKeywords': 'English version of Demoshop',
            'metaDescription': 'English version of Demoshop',
            'isActive': true,
            'children': {},
            'parents': {},
            'order': null,
          },
        ],
        'order': 50,
      },
      'links': {
        'self': '/category-nodes/14',
      },
    },
    {
      'type': 'tax-sets',
      'id': '0e93b0d4-6d83-5fc1-ac1d-d6ae11690406',
      'attributes': {
        'name': 'Entertainment Electronics',
        'restTaxRates': [
          {
            'name': 'Austria Standard',
            'rate': '20.00',
            'country': 'AT',
          },
          {
            'name': 'Belgium Standard',
            'rate': '21.00',
            'country': 'BE',
          },
          {
            'name': 'Bulgaria Standard',
            'rate': '20.00',
            'country': 'BG',
          },
          {
            'name': 'Czech Republic Standard',
            'rate': '21.00',
            'country': 'CZ',
          },
          {
            'name': 'Denmark Standard',
            'rate': '25.00',
            'country': 'DK',
          },
          {
            'name': 'France Standard',
            'rate': '20.00',
            'country': 'FR',
          },
          {
            'name': 'Germany Standard',
            'rate': '19.00',
            'country': 'DE',
          },
          {
            'name': 'Hungary Standard',
            'rate': '27.00',
            'country': 'HU',
          },
          {
            'name': 'Italy Standard',
            'rate': '22.00',
            'country': 'IT',
          },
          {
            'name': 'Luxembourg Standard',
            'rate': '17.00',
            'country': 'LU',
          },
          {
            'name': 'Netherlands Standard',
            'rate': '21.00',
            'country': 'NL',
          },
          {
            'name': 'Poland Standard',
            'rate': '23.00',
            'country': 'PL',
          },
          {
            'name': 'Romania Standard',
            'rate': '20.00',
            'country': 'RO',
          },
          {
            'name': 'Slovakia Standard',
            'rate': '20.00',
            'country': 'SK',
          },
          {
            'name': 'Slovenia Standard',
            'rate': '22.00',
            'country': 'SI',
          },
        ],
      },
      'links': {
        'self': '/abstract-products/135/tax-sets',
      },
    },
  ],
};

export const fixtureSuperFull: any = {
  'data': {
    'type': 'abstract-products',
    'id': '070',
    'attributes': {
      'sku': '070',
      'name': 'Samsung Galaxy Ace',
      'description': 'Ace performance at an accessible price Choose a smartphone that offers great value and outstanding performance. The Samsung Galaxy Ace 2 packs a Dual Core 800MHz processor to handle all your games and applications smoothly and efficiently. You’ll see all your entertainment at its best too, via a spacious 3.8” WVGA display that offers great clarity. 4GB of memory and extended battery power mean that this is one phone that won’t let you down. The Galaxy Ace 2’s elegant and compact design means it will fit perfectly in your pocket, too – as well as fitting in with your style. GALAXY Ace 2 users enjoy unrivalled power and excellent performance thanks to robust dual core 800MHz processor that keeps up with heavy usage and demanding applications. Smart CPU manages power consumption across applications so your phone works efficiently and conserves energy, maximising your phone’s functionalities.',
      'attributes': {
        'sensor_type': 'CMOS',
        'display_type': 'TFT',
        'weight': '118 g',
        'usb_version': '2',
        'brand': 'Samsung',
      },
      'superAttributesDefinition': [],
      'attributeMap': {
        'attribute_variants': {
          'series:Ace 2': {
            'internal_storage_capacity:2.1 GB': {
              'id_product_concrete': '070_133745031',
            },
            'internal_storage_capacity:8 GB': {
              'id_product_concrete': '070_203704321',
            },
          },
          'internal_storage_capacity:2.1 GB': {
            'series:Ace 2': {
              'id_product_concrete': '070_133745031',
            },
            'series:Ace 3': {
              'id_product_concrete': '070_133913221',
            },
          },
          'internal_storage_capacity:8 GB': {
            'series:Ace 2': {
              'id_product_concrete': '070_203704321',
            },
            'series:Ace 3': {
              'id_product_concrete': '070_133745032',
            },
            'series:Ace Plus': {
              'id_product_concrete': '070_133913222',
            },
          },
          'series:Ace 3': {
            'internal_storage_capacity:2.1 GB': {
              'id_product_concrete': '070_133913221',
            },
            'internal_storage_capacity:8 GB': {
              'id_product_concrete': '070_133745032',
            },
            'internal_storage_capacity:2.7 GB': {
              'id_product_concrete': '070_203704322',
            },
          },
          'internal_storage_capacity:2.7 GB': {
            'series:Ace 3': {
              'id_product_concrete': '070_203704322',
            },
            'series:Ace Plus': {
              'id_product_concrete': '070_133745033',
            },
          },
          'series:Ace Plus': {
            'internal_storage_capacity:8 GB': {
              'id_product_concrete': '070_133913222',
            },
            'internal_storage_capacity:2.7 GB': {
              'id_product_concrete': '070_133745033',
            },
          },
        },
        'super_attributes': {
          'series': [
            'Ace 2',
            'Ace 3',
            'Ace Plus',
          ],
          'internal_storage_capacity': [
            '2.1 GB',
            '8 GB',
            '2.7 GB',
          ],
        },
        'product_concrete_ids': [
          '070_133745031',
          '070_203704321',
          '070_133913221',
          '070_133745032',
          '070_203704322',
          '070_133913222',
          '070_133745033',
        ],
      },
      'metaTitle': 'Samsung Galaxy Ace',
      'metaKeywords': 'Samsung,Communication Electronics',
      'metaDescription': 'Ace performance at an accessible price Choose a smartphone that offers great value and outstanding performance. The Samsung Galaxy Ace 2 packs a Dual Core',
    },
    'links': {
      'self': '/abstract-products/070',
    },
    'relationships': {
      'concrete-products': {
        'data': [
          {
            'type': 'concrete-products',
            'id': '070_133745031',
          },
          {
            'type': 'concrete-products',
            'id': '070_203704321',
          },
          {
            'type': 'concrete-products',
            'id': '070_133913221',
          },
          {
            'type': 'concrete-products',
            'id': '070_133745032',
          },
          {
            'type': 'concrete-products',
            'id': '070_203704322',
          },
          {
            'type': 'concrete-products',
            'id': '070_133913222',
          },
          {
            'type': 'concrete-products',
            'id': '070_133745033',
          },
        ],
      },
      'abstract-product-image-sets': {
        'data': [
          {
            'type': 'abstract-product-image-sets',
            'id': '070',
          },
        ],
      },
      'abstract-product-availabilities': {
        'data': [
          {
            'type': 'abstract-product-availabilities',
            'id': '070',
          },
        ],
      },
      'abstract-product-prices': {
        'data': [
          {
            'type': 'abstract-product-prices',
            'id': '070',
          },
        ],
      },
      'category-nodes': {
        'data': [
          {
            'type': 'category-nodes',
            'id': '11',
          },
          {
            'type': 'category-nodes',
            'id': '12',
          },
          {
            'type': 'category-nodes',
            'id': '14',
          },
        ],
      },
      'tax-sets': {
        'data': [
          {
            'type': 'tax-sets',
            'id': 'deb94215-a1fc-5cdc-af6e-87ec3a847480',
          },
        ],
      },
    },
  },
  'included': [
    {
      'type': 'concrete-product-image-sets',
      'id': '070_133745031',
      'attributes': {
        'imageSets': [
          {
            'name': 'default',
            'images': [
              {
                'externalUrlLarge': '//images.icecat.biz/img/norm/high/13374503-9343.jpg',
                'externalUrlSmall': '//images.icecat.biz/img/norm/medium/13374503-9343.jpg',
              },
            ],
          },
        ],
      },
      'links': {
        'self': '/concrete-products/070_133745031/concrete-product-image-sets',
      },
    },
    {
      'type': 'concrete-product-availabilities',
      'id': '070_133745031',
      'attributes': {
        'availability': true,
        'quantity': 10,
        'isNeverOutOfStock': false,
      },
      'links': {
        'self': '/concrete-products/070_133745031/concrete-product-availabilities',
      },
    },
    {
      'type': 'concrete-product-prices',
      'id': '070_133745031',
      'attributes': {
        'price': 44436,
        'prices': [
          {
            'priceTypeName': 'DEFAULT',
            'netAmount': null,
            'grossAmount': 44436,
          },
        ],
      },
      'links': {
        'self': '/concrete-products/070_133745031/concrete-product-prices',
      },
    },
    {
      'type': 'concrete-products',
      'id': '070_133745031',
      'attributes': {
        'sku': '070_133745031',
        'name': 'Samsung Galaxy Ace',
        'description': 'Ace performance at an accessible price Choose a smartphone that offers great value and outstanding performance. The Samsung Galaxy Ace 2 packs a Dual Core 800MHz processor to handle all your games and applications smoothly and efficiently. You’ll see all your entertainment at its best too, via a spacious 3.8” WVGA display that offers great clarity. 4GB of memory and extended battery power mean that this is one phone that won’t let you down. The Galaxy Ace 2’s elegant and compact design means it will fit perfectly in your pocket, too – as well as fitting in with your style. GALAXY Ace 2 users enjoy unrivalled power and excellent performance thanks to robust dual core 800MHz processor that keeps up with heavy usage and demanding applications. Smart CPU manages power consumption across applications so your phone works efficiently and conserves energy, maximising your phone’s functionalities.',
        'attributes': {
          'sensor_type': 'CMOS',
          'display_type': 'TFT',
          'weight': '118 g',
          'usb_version': '2',
          'brand': 'Samsung',
          'series': 'Ace 2',
          'internal_storage_capacity': '2.1 GB',
        },
        'superAttributesDefinition': [
          'series',
          'internal_storage_capacity',
        ],
        'metaTitle': 'Samsung Galaxy Ace',
        'metaKeywords': 'Samsung,Communication Electronics',
        'metaDescription': 'Ace performance at an accessible price Choose a smartphone that offers great value and outstanding performance. The Samsung Galaxy Ace 2 packs a Dual Core',
      },
      'links': {
        'self': '/concrete-products/070_133745031',
      },
      'relationships': {
        'concrete-product-image-sets': {
          'data': [
            {
              'type': 'concrete-product-image-sets',
              'id': '070_133745031',
            },
          ],
        },
        'concrete-product-availabilities': {
          'data': [
            {
              'type': 'concrete-product-availabilities',
              'id': '070_133745031',
            },
          ],
        },
        'concrete-product-prices': {
          'data': [
            {
              'type': 'concrete-product-prices',
              'id': '070_133745031',
            },
          ],
        },
      },
    },
    {
      'type': 'concrete-product-image-sets',
      'id': '070_203704321',
      'attributes': {
        'imageSets': [
          {
            'name': 'default',
            'images': [
              {
                'externalUrlLarge': '//images.icecat.biz/img/norm/high/13374503-9343.jpg',
                'externalUrlSmall': '//images.icecat.biz/img/norm/medium/13374503-9343.jpg',
              },
            ],
          },
        ],
      },
      'links': {
        'self': '/concrete-products/070_203704321/concrete-product-image-sets',
      },
    },
    {
      'type': 'concrete-product-availabilities',
      'id': '070_203704321',
      'attributes': {
        'availability': true,
        'quantity': 10,
        'isNeverOutOfStock': false,
      },
      'links': {
        'self': '/concrete-products/070_203704321/concrete-product-availabilities',
      },
    },
    {
      'type': 'concrete-product-prices',
      'id': '070_203704321',
      'attributes': {
        'price': 17077,
        'prices': [
          {
            'priceTypeName': 'DEFAULT',
            'netAmount': null,
            'grossAmount': 17077,
          },
        ],
      },
      'links': {
        'self': '/concrete-products/070_203704321/concrete-product-prices',
      },
    },
    {
      'type': 'concrete-products',
      'id': '070_203704321',
      'attributes': {
        'sku': '070_203704321',
        'name': 'Samsung Galaxy Ace',
        'description': 'Ace performance at an accessible price Choose a smartphone that offers great value and outstanding performance. The Samsung Galaxy Ace 2 packs a Dual Core 800MHz processor to handle all your games and applications smoothly and efficiently. You’ll see all your entertainment at its best too, via a spacious 3.8” WVGA display that offers great clarity. 4GB of memory and extended battery power mean that this is one phone that won’t let you down. The Galaxy Ace 2’s elegant and compact design means it will fit perfectly in your pocket, too – as well as fitting in with your style. GALAXY Ace 2 users enjoy unrivalled power and excellent performance thanks to robust dual core 800MHz processor that keeps up with heavy usage and demanding applications. Smart CPU manages power consumption across applications so your phone works efficiently and conserves energy, maximising your phone’s functionalities.',
        'attributes': {
          'sensor_type': 'CMOS',
          'display_type': 'TFT',
          'weight': '118 g',
          'usb_version': '2',
          'brand': 'Samsung',
          'series': 'Ace 2',
          'internal_storage_capacity': '8 GB',
        },
        'superAttributesDefinition': [
          'series',
          'internal_storage_capacity',
        ],
        'metaTitle': 'Samsung Galaxy Ace',
        'metaKeywords': 'Samsung,Communication Electronics',
        'metaDescription': 'Ace performance at an accessible price Choose a smartphone that offers great value and outstanding performance. The Samsung Galaxy Ace 2 packs a Dual Core',
      },
      'links': {
        'self': '/concrete-products/070_203704321',
      },
      'relationships': {
        'concrete-product-image-sets': {
          'data': [
            {
              'type': 'concrete-product-image-sets',
              'id': '070_203704321',
            },
          ],
        },
        'concrete-product-availabilities': {
          'data': [
            {
              'type': 'concrete-product-availabilities',
              'id': '070_203704321',
            },
          ],
        },
        'concrete-product-prices': {
          'data': [
            {
              'type': 'concrete-product-prices',
              'id': '070_203704321',
            },
          ],
        },
      },
    },
    {
      'type': 'concrete-product-image-sets',
      'id': '070_133913221',
      'attributes': {
        'imageSets': [
          {
            'name': 'default',
            'images': [
              {
                'externalUrlLarge': '//images.icecat.biz/img/norm/high/13374503-9343.jpg',
                'externalUrlSmall': '//images.icecat.biz/img/norm/medium/13374503-9343.jpg',
              },
            ],
          },
        ],
      },
      'links': {
        'self': '/concrete-products/070_133913221/concrete-product-image-sets',
      },
    },
    {
      'type': 'concrete-product-availabilities',
      'id': '070_133913221',
      'attributes': {
        'availability': true,
        'quantity': 10,
        'isNeverOutOfStock': false,
      },
      'links': {
        'self': '/concrete-products/070_133913221/concrete-product-availabilities',
      },
    },
    {
      'type': 'concrete-product-prices',
      'id': '070_133913221',
      'attributes': {
        'price': 40462,
        'prices': [
          {
            'priceTypeName': 'DEFAULT',
            'netAmount': null,
            'grossAmount': 40462,
          },
        ],
      },
      'links': {
        'self': '/concrete-products/070_133913221/concrete-product-prices',
      },
    },
    {
      'type': 'concrete-products',
      'id': '070_133913221',
      'attributes': {
        'sku': '070_133913221',
        'name': 'Samsung Galaxy Ace',
        'description': 'Ace performance at an accessible price Choose a smartphone that offers great value and outstanding performance. The Samsung Galaxy Ace 2 packs a Dual Core 800MHz processor to handle all your games and applications smoothly and efficiently. You’ll see all your entertainment at its best too, via a spacious 3.8” WVGA display that offers great clarity. 4GB of memory and extended battery power mean that this is one phone that won’t let you down. The Galaxy Ace 2’s elegant and compact design means it will fit perfectly in your pocket, too – as well as fitting in with your style. GALAXY Ace 2 users enjoy unrivalled power and excellent performance thanks to robust dual core 800MHz processor that keeps up with heavy usage and demanding applications. Smart CPU manages power consumption across applications so your phone works efficiently and conserves energy, maximising your phone’s functionalities.',
        'attributes': {
          'sensor_type': 'CMOS',
          'display_type': 'TFT',
          'weight': '118 g',
          'usb_version': '2',
          'brand': 'Samsung',
          'series': 'Ace 3',
          'internal_storage_capacity': '2.1 GB',
        },
        'superAttributesDefinition': [
          'series',
          'internal_storage_capacity',
        ],
        'metaTitle': 'Samsung Galaxy Ace',
        'metaKeywords': 'Samsung,Communication Electronics',
        'metaDescription': 'Ace performance at an accessible price Choose a smartphone that offers great value and outstanding performance. The Samsung Galaxy Ace 2 packs a Dual Core',
      },
      'links': {
        'self': '/concrete-products/070_133913221',
      },
      'relationships': {
        'concrete-product-image-sets': {
          'data': [
            {
              'type': 'concrete-product-image-sets',
              'id': '070_133913221',
            },
          ],
        },
        'concrete-product-availabilities': {
          'data': [
            {
              'type': 'concrete-product-availabilities',
              'id': '070_133913221',
            },
          ],
        },
        'concrete-product-prices': {
          'data': [
            {
              'type': 'concrete-product-prices',
              'id': '070_133913221',
            },
          ],
        },
      },
    },
    {
      'type': 'concrete-product-image-sets',
      'id': '070_133745032',
      'attributes': {
        'imageSets': [
          {
            'name': 'default',
            'images': [
              {
                'externalUrlLarge': '//images.icecat.biz/img/norm/high/13374503-9343.jpg',
                'externalUrlSmall': '//images.icecat.biz/img/norm/medium/13374503-9343.jpg',
              },
            ],
          },
        ],
      },
      'links': {
        'self': '/concrete-products/070_133745032/concrete-product-image-sets',
      },
    },
    {
      'type': 'concrete-product-availabilities',
      'id': '070_133745032',
      'attributes': {
        'availability': true,
        'quantity': 10,
        'isNeverOutOfStock': false,
      },
      'links': {
        'self': '/concrete-products/070_133745032/concrete-product-availabilities',
      },
    },
    {
      'type': 'concrete-product-prices',
      'id': '070_133745032',
      'attributes': {
        'price': 24435,
        'prices': [
          {
            'priceTypeName': 'DEFAULT',
            'netAmount': null,
            'grossAmount': 24435,
          },
        ],
      },
      'links': {
        'self': '/concrete-products/070_133745032/concrete-product-prices',
      },
    },
    {
      'type': 'concrete-products',
      'id': '070_133745032',
      'attributes': {
        'sku': '070_133745032',
        'name': 'Samsung Galaxy Ace',
        'description': 'Ace performance at an accessible price Choose a smartphone that offers great value and outstanding performance. The Samsung Galaxy Ace 2 packs a Dual Core 800MHz processor to handle all your games and applications smoothly and efficiently. You’ll see all your entertainment at its best too, via a spacious 3.8” WVGA display that offers great clarity. 4GB of memory and extended battery power mean that this is one phone that won’t let you down. The Galaxy Ace 2’s elegant and compact design means it will fit perfectly in your pocket, too – as well as fitting in with your style. GALAXY Ace 2 users enjoy unrivalled power and excellent performance thanks to robust dual core 800MHz processor that keeps up with heavy usage and demanding applications. Smart CPU manages power consumption across applications so your phone works efficiently and conserves energy, maximising your phone’s functionalities.',
        'attributes': {
          'sensor_type': 'CMOS',
          'display_type': 'TFT',
          'weight': '118 g',
          'usb_version': '2',
          'brand': 'Samsung',
          'series': 'Ace 3',
          'internal_storage_capacity': '8 GB',
        },
        'superAttributesDefinition': [
          'series',
          'internal_storage_capacity',
        ],
        'metaTitle': 'Samsung Galaxy Ace',
        'metaKeywords': 'Samsung,Communication Electronics',
        'metaDescription': 'Ace performance at an accessible price Choose a smartphone that offers great value and outstanding performance. The Samsung Galaxy Ace 2 packs a Dual Core',
      },
      'links': {
        'self': '/concrete-products/070_133745032',
      },
      'relationships': {
        'concrete-product-image-sets': {
          'data': [
            {
              'type': 'concrete-product-image-sets',
              'id': '070_133745032',
            },
          ],
        },
        'concrete-product-availabilities': {
          'data': [
            {
              'type': 'concrete-product-availabilities',
              'id': '070_133745032',
            },
          ],
        },
        'concrete-product-prices': {
          'data': [
            {
              'type': 'concrete-product-prices',
              'id': '070_133745032',
            },
          ],
        },
      },
    },
    {
      'type': 'concrete-product-image-sets',
      'id': '070_203704322',
      'attributes': {
        'imageSets': [
          {
            'name': 'default',
            'images': [
              {
                'externalUrlLarge': '//images.icecat.biz/img/norm/high/13374503-9343.jpg',
                'externalUrlSmall': '//images.icecat.biz/img/norm/medium/13374503-9343.jpg',
              },
            ],
          },
        ],
      },
      'links': {
        'self': '/concrete-products/070_203704322/concrete-product-image-sets',
      },
    },
    {
      'type': 'concrete-product-availabilities',
      'id': '070_203704322',
      'attributes': {
        'availability': true,
        'quantity': 10,
        'isNeverOutOfStock': false,
      },
      'links': {
        'self': '/concrete-products/070_203704322/concrete-product-availabilities',
      },
    },
    {
      'type': 'concrete-product-prices',
      'id': '070_203704322',
      'attributes': {
        'price': 42131,
        'prices': [
          {
            'priceTypeName': 'DEFAULT',
            'netAmount': null,
            'grossAmount': 42131,
          },
        ],
      },
      'links': {
        'self': '/concrete-products/070_203704322/concrete-product-prices',
      },
    },
    {
      'type': 'concrete-products',
      'id': '070_203704322',
      'attributes': {
        'sku': '070_203704322',
        'name': 'Samsung Galaxy Ace',
        'description': 'Ace performance at an accessible price Choose a smartphone that offers great value and outstanding performance. The Samsung Galaxy Ace 2 packs a Dual Core 800MHz processor to handle all your games and applications smoothly and efficiently. You’ll see all your entertainment at its best too, via a spacious 3.8” WVGA display that offers great clarity. 4GB of memory and extended battery power mean that this is one phone that won’t let you down. The Galaxy Ace 2’s elegant and compact design means it will fit perfectly in your pocket, too – as well as fitting in with your style. GALAXY Ace 2 users enjoy unrivalled power and excellent performance thanks to robust dual core 800MHz processor that keeps up with heavy usage and demanding applications. Smart CPU manages power consumption across applications so your phone works efficiently and conserves energy, maximising your phone’s functionalities.',
        'attributes': {
          'sensor_type': 'CMOS',
          'display_type': 'TFT',
          'weight': '118 g',
          'usb_version': '2',
          'brand': 'Samsung',
          'series': 'Ace 3',
          'internal_storage_capacity': '2.7 GB',
        },
        'superAttributesDefinition': [
          'series',
          'internal_storage_capacity',
        ],
        'metaTitle': 'Samsung Galaxy Ace',
        'metaKeywords': 'Samsung,Communication Electronics',
        'metaDescription': 'Ace performance at an accessible price Choose a smartphone that offers great value and outstanding performance. The Samsung Galaxy Ace 2 packs a Dual Core',
      },
      'links': {
        'self': '/concrete-products/070_203704322',
      },
      'relationships': {
        'concrete-product-image-sets': {
          'data': [
            {
              'type': 'concrete-product-image-sets',
              'id': '070_203704322',
            },
          ],
        },
        'concrete-product-availabilities': {
          'data': [
            {
              'type': 'concrete-product-availabilities',
              'id': '070_203704322',
            },
          ],
        },
        'concrete-product-prices': {
          'data': [
            {
              'type': 'concrete-product-prices',
              'id': '070_203704322',
            },
          ],
        },
      },
    },
    {
      'type': 'concrete-product-image-sets',
      'id': '070_133913222',
      'attributes': {
        'imageSets': [
          {
            'name': 'default',
            'images': [
              {
                'externalUrlLarge': '//images.icecat.biz/img/norm/high/13374503-9343.jpg',
                'externalUrlSmall': '//images.icecat.biz/img/norm/medium/13374503-9343.jpg',
              },
            ],
          },
        ],
      },
      'links': {
        'self': '/concrete-products/070_133913222/concrete-product-image-sets',
      },
    },
    {
      'type': 'concrete-product-availabilities',
      'id': '070_133913222',
      'attributes': {
        'availability': true,
        'quantity': 10,
        'isNeverOutOfStock': false,
      },
      'links': {
        'self': '/concrete-products/070_133913222/concrete-product-availabilities',
      },
    },
    {
      'type': 'concrete-product-prices',
      'id': '070_133913222',
      'attributes': {
        'price': 41575,
        'prices': [
          {
            'priceTypeName': 'DEFAULT',
            'netAmount': null,
            'grossAmount': 41575,
          },
        ],
      },
      'links': {
        'self': '/concrete-products/070_133913222/concrete-product-prices',
      },
    },
    {
      'type': 'concrete-products',
      'id': '070_133913222',
      'attributes': {
        'sku': '070_133913222',
        'name': 'Samsung Galaxy Ace',
        'description': 'Ace performance at an accessible price Choose a smartphone that offers great value and outstanding performance. The Samsung Galaxy Ace 2 packs a Dual Core 800MHz processor to handle all your games and applications smoothly and efficiently. You’ll see all your entertainment at its best too, via a spacious 3.8” WVGA display that offers great clarity. 4GB of memory and extended battery power mean that this is one phone that won’t let you down. The Galaxy Ace 2’s elegant and compact design means it will fit perfectly in your pocket, too – as well as fitting in with your style. GALAXY Ace 2 users enjoy unrivalled power and excellent performance thanks to robust dual core 800MHz processor that keeps up with heavy usage and demanding applications. Smart CPU manages power consumption across applications so your phone works efficiently and conserves energy, maximising your phone’s functionalities.',
        'attributes': {
          'sensor_type': 'CMOS',
          'display_type': 'TFT',
          'weight': '118 g',
          'usb_version': '2',
          'brand': 'Samsung',
          'series': 'Ace Plus',
          'internal_storage_capacity': '8 GB',
        },
        'superAttributesDefinition': [
          'series',
          'internal_storage_capacity',
        ],
        'metaTitle': 'Samsung Galaxy Ace',
        'metaKeywords': 'Samsung,Communication Electronics',
        'metaDescription': 'Ace performance at an accessible price Choose a smartphone that offers great value and outstanding performance. The Samsung Galaxy Ace 2 packs a Dual Core',
      },
      'links': {
        'self': '/concrete-products/070_133913222',
      },
      'relationships': {
        'concrete-product-image-sets': {
          'data': [
            {
              'type': 'concrete-product-image-sets',
              'id': '070_133913222',
            },
          ],
        },
        'concrete-product-availabilities': {
          'data': [
            {
              'type': 'concrete-product-availabilities',
              'id': '070_133913222',
            },
          ],
        },
        'concrete-product-prices': {
          'data': [
            {
              'type': 'concrete-product-prices',
              'id': '070_133913222',
            },
          ],
        },
      },
    },
    {
      'type': 'concrete-product-image-sets',
      'id': '070_133745033',
      'attributes': {
        'imageSets': [
          {
            'name': 'default',
            'images': [
              {
                'externalUrlLarge': '//images.icecat.biz/img/norm/high/13374503-9343.jpg',
                'externalUrlSmall': '//images.icecat.biz/img/norm/medium/13374503-9343.jpg',
              },
            ],
          },
        ],
      },
      'links': {
        'self': '/concrete-products/070_133745033/concrete-product-image-sets',
      },
    },
    {
      'type': 'concrete-product-availabilities',
      'id': '070_133745033',
      'attributes': {
        'availability': true,
        'quantity': 10,
        'isNeverOutOfStock': false,
      },
      'links': {
        'self': '/concrete-products/070_133745033/concrete-product-availabilities',
      },
    },
    {
      'type': 'concrete-product-prices',
      'id': '070_133745033',
      'attributes': {
        'price': 11714,
        'prices': [
          {
            'priceTypeName': 'DEFAULT',
            'netAmount': null,
            'grossAmount': 11714,
          },
        ],
      },
      'links': {
        'self': '/concrete-products/070_133745033/concrete-product-prices',
      },
    },
    {
      'type': 'concrete-products',
      'id': '070_133745033',
      'attributes': {
        'sku': '070_133745033',
        'name': 'Samsung Galaxy Ace',
        'description': 'Ace performance at an accessible price Choose a smartphone that offers great value and outstanding performance. The Samsung Galaxy Ace 2 packs a Dual Core 800MHz processor to handle all your games and applications smoothly and efficiently. You’ll see all your entertainment at its best too, via a spacious 3.8” WVGA display that offers great clarity. 4GB of memory and extended battery power mean that this is one phone that won’t let you down. The Galaxy Ace 2’s elegant and compact design means it will fit perfectly in your pocket, too – as well as fitting in with your style. GALAXY Ace 2 users enjoy unrivalled power and excellent performance thanks to robust dual core 800MHz processor that keeps up with heavy usage and demanding applications. Smart CPU manages power consumption across applications so your phone works efficiently and conserves energy, maximising your phone’s functionalities.',
        'attributes': {
          'sensor_type': 'CMOS',
          'display_type': 'TFT',
          'weight': '118 g',
          'usb_version': '2',
          'brand': 'Samsung',
          'series': 'Ace Plus',
          'internal_storage_capacity': '2.7 GB',
        },
        'superAttributesDefinition': [
          'series',
          'internal_storage_capacity',
        ],
        'metaTitle': 'Samsung Galaxy Ace',
        'metaKeywords': 'Samsung,Communication Electronics',
        'metaDescription': 'Ace performance at an accessible price Choose a smartphone that offers great value and outstanding performance. The Samsung Galaxy Ace 2 packs a Dual Core',
      },
      'links': {
        'self': '/concrete-products/070_133745033',
      },
      'relationships': {
        'concrete-product-image-sets': {
          'data': [
            {
              'type': 'concrete-product-image-sets',
              'id': '070_133745033',
            },
          ],
        },
        'concrete-product-availabilities': {
          'data': [
            {
              'type': 'concrete-product-availabilities',
              'id': '070_133745033',
            },
          ],
        },
        'concrete-product-prices': {
          'data': [
            {
              'type': 'concrete-product-prices',
              'id': '070_133745033',
            },
          ],
        },
      },
    },
    {
      'type': 'abstract-product-image-sets',
      'id': '070',
      'attributes': {
        'imageSets': [
          {
            'name': 'default',
            'images': [
              {
                'externalUrlLarge': '//images.icecat.biz/img/norm/high/13374503-9343.jpg',
                'externalUrlSmall': '//images.icecat.biz/img/norm/medium/13374503-9343.jpg',
              },
            ],
          },
        ],
      },
      'links': {
        'self': '/abstract-products/070/abstract-product-image-sets',
      },
    },
    {
      'type': 'abstract-product-availabilities',
      'id': '070',
      'attributes': {
        'availability': true,
        'quantity': 70,
      },
      'links': {
        'self': '/abstract-products/070/abstract-product-availabilities',
      },
    },
    {
      'type': 'abstract-product-prices',
      'id': '070',
      'attributes': {
        'price': 29678,
        'prices': [
          {
            'priceTypeName': 'DEFAULT',
            'netAmount': null,
            'grossAmount': 29678,
          },
        ],
      },
      'links': {
        'self': '/abstract-products/070/abstract-product-prices',
      },
    },
    {
      'type': 'category-nodes',
      'id': '11',
      'attributes': {
        'nodeId': 11,
        'name': 'Telecom & Navigation',
        'metaTitle': 'Telecom & Navigation',
        'metaKeywords': 'Telecom & Navigation',
        'metaDescription': 'Telecom & Navigation',
        'isActive': true,
        'children': [
          {
            'nodeId': 12,
            'name': 'Smartphones',
            'metaTitle': 'Smartphones',
            'metaKeywords': 'Smartphones',
            'metaDescription': 'Smartphones',
            'isActive': true,
            'children': {},
            'parents': {},
            'order': 80,
          },
        ],
        'parents': [
          {
            'nodeId': 1,
            'name': 'Demoshop',
            'metaTitle': 'Demoshop',
            'metaKeywords': 'English version of Demoshop',
            'metaDescription': 'English version of Demoshop',
            'isActive': true,
            'children': {},
            'parents': {},
            'order': null,
          },
        ],
        'order': 80,
      },
      'links': {
        'self': '/category-nodes/11',
      },
    },
    {
      'type': 'category-nodes',
      'id': '12',
      'attributes': {
        'nodeId': 12,
        'name': 'Smartphones',
        'metaTitle': 'Smartphones',
        'metaKeywords': 'Smartphones',
        'metaDescription': 'Smartphones',
        'isActive': true,
        'children': {},
        'parents': [
          {
            'nodeId': 11,
            'name': 'Telecom & Navigation',
            'metaTitle': 'Telecom & Navigation',
            'metaKeywords': 'Telecom & Navigation',
            'metaDescription': 'Telecom & Navigation',
            'isActive': true,
            'children': {},
            'parents': [
              {
                'nodeId': 1,
                'name': 'Demoshop',
                'metaTitle': 'Demoshop',
                'metaKeywords': 'English version of Demoshop',
                'metaDescription': 'English version of Demoshop',
                'isActive': true,
                'children': {},
                'parents': {},
                'order': null,
              },
            ],
            'order': 80,
          },
        ],
        'order': 80,
      },
      'links': {
        'self': '/category-nodes/12',
      },
    },
    {
      'type': 'category-nodes',
      'id': '14',
      'attributes': {
        'nodeId': 14,
        'name': 'Variant Showcase',
        'metaTitle': 'Variant Showcase',
        'metaKeywords': 'These are products that have more than 1 variant.',
        'metaDescription': 'These are products that have more than 1 variant.',
        'isActive': true,
        'children': {},
        'parents': [
          {
            'nodeId': 1,
            'name': 'Demoshop',
            'metaTitle': 'Demoshop',
            'metaKeywords': 'English version of Demoshop',
            'metaDescription': 'English version of Demoshop',
            'isActive': true,
            'children': {},
            'parents': {},
            'order': null,
          },
        ],
        'order': 50,
      },
      'links': {
        'self': '/category-nodes/14',
      },
    },
    {
      'type': 'tax-sets',
      'id': 'deb94215-a1fc-5cdc-af6e-87ec3a847480',
      'attributes': {
        'name': 'Communication Electronics',
        'restTaxRates': [
          {
            'name': 'Austria Standard',
            'rate': '20.00',
            'country': 'AT',
          },
          {
            'name': 'Belgium Standard',
            'rate': '21.00',
            'country': 'BE',
          },
          {
            'name': 'Bulgaria Standard',
            'rate': '20.00',
            'country': 'BG',
          },
          {
            'name': 'Czech Republic Standard',
            'rate': '21.00',
            'country': 'CZ',
          },
          {
            'name': 'Denmark Standard',
            'rate': '25.00',
            'country': 'DK',
          },
          {
            'name': 'France Standard',
            'rate': '20.00',
            'country': 'FR',
          },
          {
            'name': 'Germany Standard',
            'rate': '19.00',
            'country': 'DE',
          },
          {
            'name': 'Hungary Standard',
            'rate': '27.00',
            'country': 'HU',
          },
          {
            'name': 'Italy Standard',
            'rate': '22.00',
            'country': 'IT',
          },
          {
            'name': 'Netherlands Standard',
            'rate': '21.00',
            'country': 'NL',
          },
          {
            'name': 'Romania Standard',
            'rate': '20.00',
            'country': 'RO',
          },
          {
            'name': 'Slovakia Standard',
            'rate': '20.00',
            'country': 'SK',
          },
          {
            'name': 'Slovenia Standard',
            'rate': '22.00',
            'country': 'SI',
          },
          {
            'name': 'Luxembourg Reduced1',
            'rate': '3.00',
            'country': 'LU',
          },
          {
            'name': 'Poland Reduced1',
            'rate': '5.00',
            'country': 'PL',
          },
        ],
      },
      'links': {
        'self': '/abstract-products/070/tax-sets',
      },
    },
  ],
};

export const fixtureOneProduct: any = {
  'data': {
    'type': 'abstract-products',
    'id': '191',
    'attributes': {
      'sku': '191',
      'name': 'Samsung F90BN',
      'description': 'High-spec model that captures the 360° world in spectacular beauty. Beauty as far as the eye can see, and a breathtaking sense of presence making you feel you are "right there, right now". From still images to long movies (max. 25 minutes long), record your memories in a vivid, high resolution 360° world. The new RICOH THETA S gives you even higher quality and performance. RICOH THETA S enables 25 minutes continuous shooting with 30fps.',
      'attributes': {
        'total_megapixels': '5 MP',
        'optical_zoom': '52 x',
        'display': 'LCD',
        'digital_zoom': '130 x',
        'brand': 'Samsung',
        'color': 'Silver',
      },
      'superAttributesDefinition': [
        'total_megapixels',
        'color',
      ],
      'attributeMap': {
        'attribute_variants': [],
        'super_attributes': [],
        'product_concrete_ids': [
          '191_17681791',
        ],
      },
      'metaTitle': 'Samsung F90BN',
      'metaKeywords': 'Samsung,Smart Electronics',
      'metaDescription': 'High-spec model that captures the 360° world in spectacular beauty. Beauty as far as the eye can see, and a breathtaking sense of presence making you feel ',
    },
    'links': {
      'self': '/abstract-products/191',
    },
    'relationships': {
      'concrete-products': {
        'data': [
          {
            'type': 'concrete-products',
            'id': '191_17681791',
          },
        ],
      },
      'abstract-product-image-sets': {
        'data': [
          {
            'type': 'abstract-product-image-sets',
            'id': '191',
          },
        ],
      },
      'abstract-product-availabilities': {
        'data': [
          {
            'type': 'abstract-product-availabilities',
            'id': '191',
          },
        ],
      },
      'abstract-product-prices': {
        'data': [
          {
            'type': 'abstract-product-prices',
            'id': '191',
          },
        ],
      },
      'category-nodes': {
        'data': [
          {
            'type': 'category-nodes',
            'id': '2',
          },
          {
            'type': 'category-nodes',
            'id': '3',
          },
        ],
      },
      'tax-sets': {
        'data': [
          {
            'type': 'tax-sets',
            'id': 'b1b7984e-c7dc-5be4-89f0-0ea50d20cbe1',
          },
        ],
      },
    },
  },
  'included': [
    {
      'type': 'concrete-product-image-sets',
      'id': '191_17681791',
      'attributes': {
        'imageSets': [
          {
            'name': 'default',
            'images': [
              {
                'externalUrlLarge': '//images.icecat.biz/img/norm/high/17681791-4446.jpg',
                'externalUrlSmall': '//images.icecat.biz/img/gallery_mediums/img_17681791_medium_1482143992_4607_19487.jpg',
              },
            ],
          },
        ],
      },
      'links': {
        'self': '/concrete-products/191_17681791/concrete-product-image-sets',
      },
    },
    {
      'type': 'concrete-product-availabilities',
      'id': '191_17681791',
      'attributes': {
        'availability': true,
        'quantity': 10,
        'isNeverOutOfStock': true,
      },
      'links': {
        'self': '/concrete-products/191_17681791/concrete-product-availabilities',
      },
    },
    {
      'type': 'concrete-product-prices',
      'id': '191_17681791',
      'attributes': {
        'price': 24899,
        'prices': [
          {
            'priceTypeName': 'DEFAULT',
            'netAmount': null,
            'grossAmount': 24899,
          },
        ],
      },
      'links': {
        'self': '/concrete-products/191_17681791/concrete-product-prices',
      },
    },
    {
      'type': 'concrete-products',
      'id': '191_17681791',
      'attributes': {
        'sku': '191_17681791',
        'name': 'Samsung F90BN',
        'description': 'High-spec model that captures the 360° world in spectacular beauty. Beauty as far as the eye can see, and a breathtaking sense of presence making you feel you are "right there, right now". From still images to long movies (max. 25 minutes long), record your memories in a vivid, high resolution 360° world. The new RICOH THETA S gives you even higher quality and performance. RICOH THETA S enables 25 minutes continuous shooting with 30fps.',
        'attributes': {
          'total_megapixels': '5 MP',
          'optical_zoom': '52 x',
          'display': 'LCD',
          'digital_zoom': '130 x',
          'brand': 'Samsung',
          'color': 'Silver',
        },
        'superAttributesDefinition': [
          'total_megapixels',
          'color',
        ],
        'metaTitle': 'Samsung F90BN',
        'metaKeywords': 'Samsung,Smart Electronics',
        'metaDescription': 'High-spec model that captures the 360° world in spectacular beauty. Beauty as far as the eye can see, and a breathtaking sense of presence making you feel ',
      },
      'links': {
        'self': '/concrete-products/191_17681791',
      },
      'relationships': {
        'concrete-product-image-sets': {
          'data': [
            {
              'type': 'concrete-product-image-sets',
              'id': '191_17681791',
            },
          ],
        },
        'concrete-product-availabilities': {
          'data': [
            {
              'type': 'concrete-product-availabilities',
              'id': '191_17681791',
            },
          ],
        },
        'concrete-product-prices': {
          'data': [
            {
              'type': 'concrete-product-prices',
              'id': '191_17681791',
            },
          ],
        },
      },
    },
    {
      'type': 'abstract-product-image-sets',
      'id': '191',
      'attributes': {
        'imageSets': [
          {
            'name': 'default',
            'images': [
              {
                'externalUrlLarge': '//images.icecat.biz/img/norm/high/17681791-4446.jpg',
                'externalUrlSmall': '//images.icecat.biz/img/gallery_mediums/img_17681791_medium_1482143992_4607_19487.jpg',
              },
            ],
          },
        ],
      },
      'links': {
        'self': '/abstract-products/191/abstract-product-image-sets',
      },
    },
    {
      'type': 'abstract-product-availabilities',
      'id': '191',
      'attributes': {
        'availability': true,
        'quantity': 10,
      },
      'links': {
        'self': '/abstract-products/191/abstract-product-availabilities',
      },
    },
    {
      'type': 'abstract-product-prices',
      'id': '191',
      'attributes': {
        'price': 24899,
        'prices': [
          {
            'priceTypeName': 'DEFAULT',
            'netAmount': null,
            'grossAmount': 24899,
          },
        ],
      },
      'links': {
        'self': '/abstract-products/191/abstract-product-prices',
      },
    },
    {
      'type': 'category-nodes',
      'id': '2',
      'attributes': {
        'nodeId': 2,
        'name': 'Cameras & Camcorders',
        'metaTitle': 'Cameras & Camcorders',
        'metaKeywords': 'Cameras & Camcorders',
        'metaDescription': 'Cameras & Camcorders',
        'isActive': true,
        'children': [
          {
            'nodeId': 4,
            'name': 'Digital Cameras',
            'metaTitle': 'Digital Cameras',
            'metaKeywords': 'Digital Cameras',
            'metaDescription': 'Digital Cameras',
            'isActive': true,
            'children': {},
            'parents': {},
            'order': 100,
          },
          {
            'nodeId': 3,
            'name': 'Camcorders',
            'metaTitle': 'Camcorders',
            'metaKeywords': 'Camcorders',
            'metaDescription': 'Camcorders',
            'isActive': true,
            'children': {},
            'parents': {},
            'order': 90,
          },
        ],
        'parents': [
          {
            'nodeId': 1,
            'name': 'Demoshop',
            'metaTitle': 'Demoshop',
            'metaKeywords': 'English version of Demoshop',
            'metaDescription': 'English version of Demoshop',
            'isActive': true,
            'children': {},
            'parents': {},
            'order': null,
          },
        ],
        'order': 90,
      },
      'links': {
        'self': '/category-nodes/2',
      },
    },
    {
      'type': 'category-nodes',
      'id': '3',
      'attributes': {
        'nodeId': 3,
        'name': 'Camcorders',
        'metaTitle': 'Camcorders',
        'metaKeywords': 'Camcorders',
        'metaDescription': 'Camcorders',
        'isActive': true,
        'children': {},
        'parents': [
          {
            'nodeId': 2,
            'name': 'Cameras & Camcorders',
            'metaTitle': 'Cameras & Camcorders',
            'metaKeywords': 'Cameras & Camcorders',
            'metaDescription': 'Cameras & Camcorders',
            'isActive': true,
            'children': {},
            'parents': [
              {
                'nodeId': 1,
                'name': 'Demoshop',
                'metaTitle': 'Demoshop',
                'metaKeywords': 'English version of Demoshop',
                'metaDescription': 'English version of Demoshop',
                'isActive': true,
                'children': {},
                'parents': {},
                'order': null,
              },
            ],
            'order': 90,
          },
        ],
        'order': 90,
      },
      'links': {
        'self': '/category-nodes/3',
      },
    },
    {
      'type': 'tax-sets',
      'id': 'b1b7984e-c7dc-5be4-89f0-0ea50d20cbe1',
      'attributes': {
        'name': 'Smart Electronics',
        'restTaxRates': [
          {
            'name': 'Austria Standard',
            'rate': '20.00',
            'country': 'AT',
          },
          {
            'name': 'Belgium Standard',
            'rate': '21.00',
            'country': 'BE',
          },
          {
            'name': 'Bulgaria Standard',
            'rate': '20.00',
            'country': 'BG',
          },
          {
            'name': 'Czech Republic Standard',
            'rate': '21.00',
            'country': 'CZ',
          },
          {
            'name': 'Denmark Standard',
            'rate': '25.00',
            'country': 'DK',
          },
          {
            'name': 'France Standard',
            'rate': '20.00',
            'country': 'FR',
          },
          {
            'name': 'Hungary Standard',
            'rate': '27.00',
            'country': 'HU',
          },
          {
            'name': 'Luxembourg Standard',
            'rate': '17.00',
            'country': 'LU',
          },
          {
            'name': 'Netherlands Standard',
            'rate': '21.00',
            'country': 'NL',
          },
          {
            'name': 'Poland Standard',
            'rate': '23.00',
            'country': 'PL',
          },
          {
            'name': 'Romania Standard',
            'rate': '20.00',
            'country': 'RO',
          },
          {
            'name': 'Slovakia Standard',
            'rate': '20.00',
            'country': 'SK',
          },
          {
            'name': 'Slovenia Standard',
            'rate': '22.00',
            'country': 'SI',
          },
          {
            'name': 'Germany Reduced',
            'rate': '7.00',
            'country': 'DE',
          },
          {
            'name': 'Italy Reduced1',
            'rate': '4.00',
            'country': 'IT',
          },
        ],
      },
      'links': {
        'self': '/abstract-products/191/tax-sets',
      },
    },
  ],
};

export const fixtureError: any = {
  'errors': [{'code': '301', 'status': 404, 'detail': 'Abstract product is not found.'}],
};

export const fixtureProductPrices: any = {
  'data': {
    'type': 'abstract-products',
    'id': '001',
    'attributes': {
      'sku': '001',
      'name': 'Canon IXUS 160',
      'description': 'Add a personal touch Make shots your own with quick and easy control over picture settings such as brightness and colour intensity. Preview the results while framing using Live View Control and enjoy sharing them with friends using the 6.8 cm (2.7\u201d) LCD screen. Combine with a Canon Connect Station and you can easily share your photos and movies with the world on social media sites and online albums like irista, plus enjoy watching them with family and friends on an HD TV. Effortlessly enjoy great shots of friends thanks to Face Detection technology. It detects multiple faces in a single frame making sure they remain in focus and with optimum brightness. Face Detection also ensures natural skin tones even in unusual lighting conditions.',
      'attributes': {
        'megapixel': '20 MP',
        'flash_range_tele': '4.2-4.9 ft',
        'memory_slots': '1',
        'usb_version': '2',
        'brand': 'Canon',
        'color': 'Red',
      },
      'superAttributesDefinition': ['color'],
      'attributeMap': {'attribute_variants': [], 'super_attributes': [], 'product_concrete_ids': ['001_25904006']},
      'metaTitle': 'Canon IXUS 160',
      'metaKeywords': 'Canon,Entertainment Electronics',
      'metaDescription': 'Add a personal touch Make shots your own with quick and easy control over picture settings such as brightness and colour intensity. Preview the results whi',
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/abstract-products\/001'},
    'relationships': {
      'concrete-products': {'data': [{'type': 'concrete-products', 'id': '001_25904006'}]},
      'abstract-product-image-sets': {'data': [{'type': 'abstract-product-image-sets', 'id': '001'}]},
      'abstract-product-availabilities': {'data': [{'type': 'abstract-product-availabilities', 'id': '001'}]},
      'abstract-product-prices': {'data': [{'type': 'abstract-product-prices', 'id': '001'}]},
      'category-nodes': {'data': [{'type': 'category-nodes', 'id': '4'}, {'type': 'category-nodes', 'id': '2'}]},
      'product-tax-sets': {'data': [{'type': 'product-tax-sets', 'id': '0e93b0d4-6d83-5fc1-ac1d-d6ae11690406'}]},
    },
  },
  'included': [{
    'type': 'concrete-product-image-sets',
    'id': '001_25904006',
    'attributes': {
      'imageSets': [{
        'name': 'default',
        'images': [{
          'externalUrlLarge': '\/\/images.icecat.biz\/img\/norm\/high\/25904006-8438.jpg',
          'externalUrlSmall': '\/\/images.icecat.biz\/img\/norm\/medium\/25904006-8438.jpg',
        }],
      }, {
        'name': 'default',
        'images': [{
          'externalUrlLarge': '\/\/images.icecat.biz\/img\/norm\/high\/25904006-8438.jpg',
          'externalUrlSmall': '\/\/images.icecat.biz\/img\/norm\/medium\/25904006-8438.jpg',
        }],
      }],
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/concrete-products\/001_25904006\/concrete-product-image-sets'},
  }, {
    'type': 'concrete-product-availabilities',
    'id': '001_25904006',
    'attributes': {'availability': true, 'quantity': 10, 'isNeverOutOfStock': false},
    'links': {'self': 'http:\/\/glue.de.suite.local\/concrete-products\/001_25904006\/concrete-product-availabilities'},
  }, {
    'type': 'concrete-product-prices',
    'id': '001_25904006',
    'attributes': {
      'price': 9999,
      'prices': [{'priceTypeName': 'DEFAULT', 'netAmount': null, 'grossAmount': 9999}, {
        'priceTypeName': 'ORIGINAL',
        'netAmount': null,
        'grossAmount': 12564,
      }],
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/concrete-products\/001_25904006\/concrete-product-prices'},
  }, {
    'type': 'concrete-products',
    'id': '001_25904006',
    'attributes': {
      'sku': '001_25904006',
      'name': 'Canon IXUS 160',
      'description': 'Add a personal touch Make shots your own with quick and easy control over picture settings such as brightness and colour intensity. Preview the results while framing using Live View Control and enjoy sharing them with friends using the 6.8 cm (2.7\u201d) LCD screen. Combine with a Canon Connect Station and you can easily share your photos and movies with the world on social media sites and online albums like irista, plus enjoy watching them with family and friends on an HD TV. Effortlessly enjoy great shots of friends thanks to Face Detection technology. It detects multiple faces in a single frame making sure they remain in focus and with optimum brightness. Face Detection also ensures natural skin tones even in unusual lighting conditions.',
      'attributes': {
        'megapixel': '20 MP',
        'flash_range_tele': '4.2-4.9 ft',
        'memory_slots': '1',
        'usb_version': '2',
        'brand': 'Canon',
        'color': 'Red',
      },
      'superAttributesDefinition': ['color'],
      'metaTitle': 'Canon IXUS 160',
      'metaKeywords': 'Canon,Entertainment Electronics',
      'metaDescription': 'Add a personal touch Make shots your own with quick and easy control over picture settings such as brightness and colour intensity. Preview the results whi',
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/concrete-products\/001_25904006'},
    'relationships': {
      'concrete-product-image-sets': {
        'data': [{
          'type': 'concrete-product-image-sets',
          'id': '001_25904006',
        }],
      },
      'concrete-product-availabilities': {'data': [{'type': 'concrete-product-availabilities', 'id': '001_25904006'}]},
      'concrete-product-prices': {'data': [{'type': 'concrete-product-prices', 'id': '001_25904006'}]},
    },
  }, {
    'type': 'abstract-product-image-sets',
    'id': '001',
    'attributes': {
      'imageSets': [{
        'name': 'default',
        'images': [{
          'externalUrlLarge': '\/\/images.icecat.biz\/img\/norm\/high\/25904006-8438.jpg',
          'externalUrlSmall': '\/\/images.icecat.biz\/img\/norm\/medium\/25904006-8438.jpg',
        }],
      }],
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/abstract-products\/001\/abstract-product-image-sets'},
  }, {
    'type': 'abstract-product-availabilities',
    'id': '001',
    'attributes': {'availability': true, 'quantity': 10},
    'links': {'self': 'http:\/\/glue.de.suite.local\/abstract-products\/001\/abstract-product-availabilities'},
  }, {
    'type': 'abstract-product-prices',
    'id': '001',
    'attributes': {
      'price': 9999,
      'prices': [{'priceTypeName': 'DEFAULT', 'netAmount': null, 'grossAmount': 9999}, {
        'priceTypeName': 'ORIGINAL',
        'netAmount': null,
        'grossAmount': 12564,
      }],
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/abstract-products\/001\/abstract-product-prices'},
  }, {
    'type': 'category-nodes',
    'id': '4',
    'attributes': {
      'nodeId': 4,
      'name': 'Digital Cameras',
      'metaTitle': 'Digital Cameras',
      'metaKeywords': 'Digital Cameras',
      'metaDescription': 'Digital Cameras',
      'isActive': true,
      'children': {},
      'parents': [{
        'nodeId': 2,
        'name': 'Cameras \u0026 Camcorders',
        'metaTitle': 'Cameras \u0026 Camcorders',
        'metaKeywords': 'Cameras \u0026 Camcorders',
        'metaDescription': 'Cameras \u0026 Camcorders',
        'isActive': true,
        'children': {},
        'parents': [{
          'nodeId': 1,
          'name': 'Demoshop',
          'metaTitle': 'Demoshop',
          'metaKeywords': 'English version of Demoshop',
          'metaDescription': 'English version of Demoshop',
          'isActive': true,
          'children': {},
          'parents': {},
          'order': null,
        }],
        'order': 90,
      }],
      'order': 100,
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/category-nodes\/4'},
  }, {
    'type': 'category-nodes',
    'id': '2',
    'attributes': {
      'nodeId': 2,
      'name': 'Cameras \u0026 Camcorders',
      'metaTitle': 'Cameras \u0026 Camcorders',
      'metaKeywords': 'Cameras \u0026 Camcorders',
      'metaDescription': 'Cameras \u0026 Camcorders',
      'isActive': true,
      'children': [{
        'nodeId': 4,
        'name': 'Digital Cameras',
        'metaTitle': 'Digital Cameras',
        'metaKeywords': 'Digital Cameras',
        'metaDescription': 'Digital Cameras',
        'isActive': true,
        'children': {},
        'parents': {},
        'order': 100,
      }, {
        'nodeId': 3,
        'name': 'Camcorders',
        'metaTitle': 'Camcorders',
        'metaKeywords': 'Camcorders',
        'metaDescription': 'Camcorders',
        'isActive': true,
        'children': {},
        'parents': {},
        'order': 90,
      }],
      'parents': [{
        'nodeId': 1,
        'name': 'Demoshop',
        'metaTitle': 'Demoshop',
        'metaKeywords': 'English version of Demoshop',
        'metaDescription': 'English version of Demoshop',
        'isActive': true,
        'children': {},
        'parents': {},
        'order': null,
      }],
      'order': 90,
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/category-nodes\/2'},
  }, {
    'type': 'product-tax-sets',
    'id': '0e93b0d4-6d83-5fc1-ac1d-d6ae11690406',
    'attributes': {
      'name': 'Entertainment Electronics',
      'restTaxRates': [{'name': 'Austria Standard', 'rate': '20.00', 'country': 'AT'}, {
        'name': 'Belgium Standard',
        'rate': '21.00',
        'country': 'BE',
      }, {'name': 'Bulgaria Standard', 'rate': '20.00', 'country': 'BG'}, {
        'name': 'Czech Republic Standard',
        'rate': '21.00',
        'country': 'CZ',
      }, {'name': 'Denmark Standard', 'rate': '25.00', 'country': 'DK'}, {
        'name': 'France Standard',
        'rate': '20.00',
        'country': 'FR',
      }, {'name': 'Germany Standard', 'rate': '19.00', 'country': 'DE'}, {
        'name': 'Hungary Standard',
        'rate': '27.00',
        'country': 'HU',
      }, {'name': 'Italy Standard', 'rate': '22.00', 'country': 'IT'}, {
        'name': 'Luxembourg Standard',
        'rate': '17.00',
        'country': 'LU',
      }, {'name': 'Netherlands Standard', 'rate': '21.00', 'country': 'NL'}, {
        'name': 'Poland Standard',
        'rate': '23.00',
        'country': 'PL',
      }, {'name': 'Romania Standard', 'rate': '20.00', 'country': 'RO'}, {
        'name': 'Slovakia Standard',
        'rate': '20.00',
        'country': 'SK',
      }, {'name': 'Slovenia Standard', 'rate': '22.00', 'country': 'SI'}],
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/abstract-products\/001\/product-tax-sets'},
  }],
};

export const fixtureProductImages: any = {
  'data': {
    'type': 'abstract-products',
    'id': '177',
    'attributes': {
      'sku': '177',
      'name': 'Samsung Galaxy Tab Active 8.0 8 GB',
      'description': 'Water and Dust Resistance (IP67) Keep working continuously in virtually any environment with IP67 environmental sealing that protects against damage from water and dust. Gain toughness and stability without sacrificing a premium design with 9.75-mm thickness(without cover) and a 393-gram light weight with rugged reinforcement. Don\u2019t worry about drops or impacts in active business environments. With its included cover, Samsung Galaxy Tab Active is designed to handle drops of up to 1.2 meters with protective cover (3.9 feet). Save time on communications and work process management with easy NFC device pairing and tag reading. A 3.1-megapixel (MP) Auto Focus (AF) camera with a Flash feature enables easy, efficient barcode scanning to facilitate communication and workflow.\t',
      'attributes': {
        'storage_media': 'flash',
        'processor_frequency': '1.2 GHz',
        'display_diagonal': '20.3 cm',
        'aspect_ratio': '16:09',
        'brand': 'Samsung',
      },
      'superAttributesDefinition': ['storage_media', 'processor_frequency'],
      'attributeMap': {
        'attribute_variants': {
          'internal_storage_capacity:32 GB': {'id_product_concrete': '177_25913296'},
          'internal_storage_capacity:16 GB': {'id_product_concrete': '177_24422865'},
          'internal_storage_capacity:8 GB': {'id_product_concrete': '177_24867659'},
        },
        'super_attributes': {'internal_storage_capacity': ['32 GB', '16 GB', '8 GB']},
        'product_concrete_ids': ['177_24867659', '177_24422865', '177_25913296'],
      },
      'metaTitle': 'Samsung Galaxy Tab Active 8.0 8 GB',
      'metaKeywords': 'Samsung,Communication Electronics',
      'metaDescription': 'Water and Dust Resistance (IP67) Keep working continuously in virtually any environment with IP67 environmental sealing that protects against damage from w',
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/abstract-products\/177'},
    'relationships': {
      'concrete-products': {
        'data': [{
          'type': 'concrete-products',
          'id': '177_24867659',
        }, {'type': 'concrete-products', 'id': '177_24422865'}, {'type': 'concrete-products', 'id': '177_25913296'}],
      },
      'abstract-product-image-sets': {'data': [{'type': 'abstract-product-image-sets', 'id': '177'}]},
      'abstract-product-availabilities': {'data': [{'type': 'abstract-product-availabilities', 'id': '177'}]},
      'abstract-product-prices': {'data': [{'type': 'abstract-product-prices', 'id': '177'}]},
    },
  },
  'included': [{
    'type': 'concrete-product-image-sets',
    'id': '177_24867659',
    'attributes': {
      'imageSets': [{
        'name': 'default',
        'images': [{
          'externalUrlLarge': '\/\/images.icecat.biz\/img\/norm\/high\/24867659-4916.jpg',
          'externalUrlSmall': '\/\/images.icecat.biz\/img\/norm\/medium\/24867659-4916.jpg',
        }],
      }, {
        'name': 'default',
        'images': [{
          'externalUrlLarge': '\/\/images.icecat.biz\/img\/norm\/high\/24867659-4916.jpg',
          'externalUrlSmall': '\/\/images.icecat.biz\/img\/norm\/medium\/24867659-4916.jpg',
        }],
      }],
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/concrete-products\/177_24867659\/concrete-product-image-sets'},
  }, {
    'type': 'concrete-product-availabilities',
    'id': '177_24867659',
    'attributes': {'availability': true, 'quantity': 20, 'isNeverOutOfStock': false},
    'links': {'self': 'http:\/\/glue.de.suite.local\/concrete-products\/177_24867659\/concrete-product-availabilities'},
  }, {
    'type': 'concrete-product-prices',
    'id': '177_24867659',
    'attributes': {'price': 42502, 'prices': [{'priceTypeName': 'DEFAULT', 'netAmount': null, 'grossAmount': 42502}]},
    'links': {'self': 'http:\/\/glue.de.suite.local\/concrete-products\/177_24867659\/concrete-product-prices'},
  }, {
    'type': 'concrete-products',
    'id': '177_24867659',
    'attributes': {
      'sku': '177_24867659',
      'name': 'Samsung Galaxy Tab Active 8.0 8 GB',
      'description': 'Water and Dust Resistance (IP67) Keep working continuously in virtually any environment with IP67 environmental sealing that protects against damage from water and dust. Gain toughness and stability without sacrificing a premium design with 9.75-mm thickness(without cover) and a 393-gram light weight with rugged reinforcement. Don\u2019t worry about drops or impacts in active business environments. With its included cover, Samsung Galaxy Tab Active is designed to handle drops of up to 1.2 meters with protective cover (3.9 feet). Save time on communications and work process management with easy NFC device pairing and tag reading. A 3.1-megapixel (MP) Auto Focus (AF) camera with a Flash feature enables easy, efficient barcode scanning to facilitate communication and workflow.',
      'attributes': {
        'storage_media': 'flash',
        'processor_frequency': '1.2 GHz',
        'display_diagonal': '20.3 cm',
        'aspect_ratio': '16:09',
        'brand': 'Samsung',
        'internal_storage_capacity': '8 GB',
      },
      'superAttributesDefinition': ['storage_media', 'processor_frequency', 'internal_storage_capacity'],
      'metaTitle': 'Samsung Galaxy Tab Active 8.0 8 GB',
      'metaKeywords': 'Samsung,Communication Electronics',
      'metaDescription': 'Water and Dust Resistance (IP67) Keep working continuously in virtually any environment with IP67 environmental sealing that protects against damage from w',
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/concrete-products\/177_24867659'},
    'relationships': {
      'concrete-product-image-sets': {
        'data': [{
          'type': 'concrete-product-image-sets',
          'id': '177_24867659',
        }],
      },
      'concrete-product-availabilities': {'data': [{'type': 'concrete-product-availabilities', 'id': '177_24867659'}]},
      'concrete-product-prices': {'data': [{'type': 'concrete-product-prices', 'id': '177_24867659'}]},
    },
  }, {
    'type': 'concrete-product-image-sets',
    'id': '177_24422865',
    'attributes': {
      'imageSets': [{
        'name': 'default',
        'images': [{
          'externalUrlLarge': '\/\/images.icecat.biz\/img\/norm\/high\/24867659-4916.jpg',
          'externalUrlSmall': '\/\/images.icecat.biz\/img\/norm\/medium\/24867659-4916.jpg',
        }],
      }, {
        'name': 'default',
        'images': [{
          'externalUrlLarge': '\/\/images.icecat.biz\/img\/norm\/high\/24867659-4916.jpg',
          'externalUrlSmall': '\/\/images.icecat.biz\/img\/norm\/medium\/24867659-4916.jpg',
        }],
      }],
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/concrete-products\/177_24422865\/concrete-product-image-sets'},
  }, {
    'type': 'concrete-product-availabilities',
    'id': '177_24422865',
    'attributes': {'availability': true, 'quantity': 14, 'isNeverOutOfStock': false},
    'links': {'self': 'http:\/\/glue.de.suite.local\/concrete-products\/177_24422865\/concrete-product-availabilities'},
  }, {
    'type': 'concrete-product-prices',
    'id': '177_24422865',
    'attributes': {'price': 42502, 'prices': [{'priceTypeName': 'DEFAULT', 'netAmount': null, 'grossAmount': 42502}]},
    'links': {'self': 'http:\/\/glue.de.suite.local\/concrete-products\/177_24422865\/concrete-product-prices'},
  }, {
    'type': 'concrete-products',
    'id': '177_24422865',
    'attributes': {
      'sku': '177_24422865',
      'name': 'Samsung Galaxy Tab Active 8.0 16 GB',
      'description': 'Water and Dust Resistance (IP67) Keep working continuously in virtually any environment with IP67 environmental sealing that protects against damage from water and dust. Gain toughness and stability without sacrificing a premium design with 9.75-mm thickness(without cover) and a 393-gram light weight with rugged reinforcement. Don\u2019t worry about drops or impacts in active business environments. With its included cover, Samsung Galaxy Tab Active is designed to handle drops of up to 1.2 meters with protective cover (3.9 feet). Save time on communications and work process management with easy NFC device pairing and tag reading. A 3.1-megapixel (MP) Auto Focus (AF) camera with a Flash feature enables easy, efficient barcode scanning to facilitate communication and workflow.',
      'attributes': {
        'storage_media': 'flash',
        'processor_frequency': '1.2 GHz',
        'display_diagonal': '20.3 cm',
        'aspect_ratio': '16:09',
        'brand': 'Samsung',
        'internal_storage_capacity': '16 GB',
      },
      'superAttributesDefinition': ['storage_media', 'processor_frequency', 'internal_storage_capacity'],
      'metaTitle': 'Samsung Galaxy Tab Active 8.0 8 GB',
      'metaKeywords': 'Samsung,Communication Electronics',
      'metaDescription': 'Water and Dust Resistance (IP67) Keep working continuously in virtually any environment with IP67 environmental sealing that protects against damage from w',
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/concrete-products\/177_24422865'},
    'relationships': {
      'concrete-product-image-sets': {
        'data': [{
          'type': 'concrete-product-image-sets',
          'id': '177_24422865',
        }],
      },
      'concrete-product-availabilities': {'data': [{'type': 'concrete-product-availabilities', 'id': '177_24422865'}]},
      'concrete-product-prices': {'data': [{'type': 'concrete-product-prices', 'id': '177_24422865'}]},
    },
  }, {
    'type': 'concrete-product-image-sets',
    'id': '177_25913296',
    'attributes': {
      'imageSets': [{
        'name': 'default',
        'images': [{
          'externalUrlLarge': '\/\/images.icecat.biz\/img\/norm\/high\/24867659-4916.jpg',
          'externalUrlSmall': '\/\/images.icecat.biz\/img\/norm\/medium\/24867659-4916.jpg',
        }],
      }, {
        'name': 'default',
        'images': [{
          'externalUrlLarge': '\/\/images.icecat.biz\/img\/norm\/high\/24867659-4916.jpg',
          'externalUrlSmall': '\/\/images.icecat.biz\/img\/norm\/medium\/24867659-4916.jpg',
        }],
      }],
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/concrete-products\/177_25913296\/concrete-product-image-sets'},
  }, {
    'type': 'concrete-product-availabilities',
    'id': '177_25913296',
    'attributes': {'availability': true, 'quantity': 18, 'isNeverOutOfStock': false},
    'links': {'self': 'http:\/\/glue.de.suite.local\/concrete-products\/177_25913296\/concrete-product-availabilities'},
  }, {
    'type': 'concrete-product-prices',
    'id': '177_25913296',
    'attributes': {'price': 42502, 'prices': [{'priceTypeName': 'DEFAULT', 'netAmount': null, 'grossAmount': 42502}]},
    'links': {'self': 'http:\/\/glue.de.suite.local\/concrete-products\/177_25913296\/concrete-product-prices'},
  }, {
    'type': 'concrete-products',
    'id': '177_25913296',
    'attributes': {
      'sku': '177_25913296',
      'name': 'Samsung Galaxy Tab Active 8.0 32 GB',
      'description': 'Water and Dust Resistance (IP67) Keep working continuously in virtually any environment with IP67 environmental sealing that protects against damage from water and dust. Gain toughness and stability without sacrificing a premium design with 9.75-mm thickness(without cover) and a 393-gram light weight with rugged reinforcement. Don\u2019t worry about drops or impacts in active business environments. With its included cover, Samsung Galaxy Tab Active is designed to handle drops of up to 1.2 meters with protective cover (3.9 feet). Save time on communications and work process management with easy NFC device pairing and tag reading. A 3.1-megapixel (MP) Auto Focus (AF) camera with a Flash feature enables easy, efficient barcode scanning to facilitate communication and workflow.',
      'attributes': {
        'storage_media': 'flash',
        'processor_frequency': '1.2 GHz',
        'display_diagonal': '20.3 cm',
        'aspect_ratio': '16:09',
        'brand': 'Samsung',
        'internal_storage_capacity': '32 GB',
      },
      'superAttributesDefinition': ['storage_media', 'processor_frequency', 'internal_storage_capacity'],
      'metaTitle': 'Samsung Galaxy Tab Active 8.0 8 GB',
      'metaKeywords': 'Samsung,Communication Electronics',
      'metaDescription': 'Water and Dust Resistance (IP67) Keep working continuously in virtually any environment with IP67 environmental sealing that protects against damage from w',
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/concrete-products\/177_25913296'},
    'relationships': {
      'concrete-product-image-sets': {
        'data': [{
          'type': 'concrete-product-image-sets',
          'id': '177_25913296',
        }],
      },
      'concrete-product-availabilities': {'data': [{'type': 'concrete-product-availabilities', 'id': '177_25913296'}]},
      'concrete-product-prices': {'data': [{'type': 'concrete-product-prices', 'id': '177_25913296'}]},
    },
  }, {
    'type': 'abstract-product-image-sets',
    'id': '177',
    'attributes': {
      'imageSets': [{
        'name': 'default',
        'images': [{
          'externalUrlLarge': '\/\/images.icecat.biz\/img\/norm\/high\/24867659-4916.jpg',
          'externalUrlSmall': '\/\/images.icecat.biz\/img\/norm\/medium\/24867659-4916.jpg',
        }],
      }],
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/abstract-products\/177\/abstract-product-image-sets'},
  }, {
    'type': 'abstract-product-availabilities',
    'id': '177',
    'attributes': {'availability': true, 'quantity': 52},
    'links': {'self': 'http:\/\/glue.de.suite.local\/abstract-products\/177\/abstract-product-availabilities'},
  }, {
    'type': 'abstract-product-prices',
    'id': '177',
    'attributes': {'price': 42502, 'prices': [{'priceTypeName': 'DEFAULT', 'netAmount': null, 'grossAmount': 42502}]},
    'links': {'self': 'http:\/\/glue.de.suite.local\/abstract-products\/177\/abstract-product-prices'},
  }],
};

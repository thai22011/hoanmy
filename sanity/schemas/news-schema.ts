const news = {
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name:'slug',
            title: 'Project Slug',
            type: 'slug',
            options:{source: 'title'}
        },
        {
            name:'image',
            title: 'Project Featured Image',
            type: 'image',
            options:{hotspot: true},
            fields: [
                {
            name: 'alt',
            title: 'Alt Tag',
            type: 'string'
                }
            ]
              
                
        },
        {
            name: 'language',
            title: 'Language',
            type: 'string',
            options: {
                list: [
                    {title:'Vietnamese', value: 'vi'},
                    {title: 'English', value: 'en'}
                ],
                layout: 'radio'
            }
        },
      
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name: 'date',
            title: 'date',
            type: 'date'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name:'content',
            title: 'Content',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name:'newsPhoto1',
            title: 'News Photo 1',
            type: 'image',
            options:{hotspot: true},
            fields: [
                {
            name: 'alt',
            title: 'Alt Tag',
            type: 'string'
                }
            ]
              
                
        }, {
            name:'newsPhoto2',
            title: 'News Photo 2',
            type: 'image',
            options:{hotspot: true},
            fields: [
                {
            name: 'alt',
            title: 'Alt Tag',
            type: 'string'
                }
            ]
              
                
        }, {
            name:'newsPhoto3',
            title: 'News Photo 3',
            type: 'image',
            options:{hotspot: true},
            fields: [
                {
            name: 'alt',
            title: 'Alt Tag',
            type: 'string'
                }
            ]
              
                
        }, {
            name:'newsPhoto4',
            title: 'News Photo 4',
            type: 'image',
            options:{hotspot: true},
            fields: [
                {
            name: 'alt',
            title: 'Alt Tag',
            type: 'string'
                }
            ]
              
                
        }, {
            name:'newsPhoto5',
            title: 'News Photo 5',
            type: 'image',
            options:{hotspot: true},
            fields: [
                {
            name: 'alt',
            title: 'Alt Tag',
            type: 'string'
                }
            ]
              
                
        },
    ]


}

export default news
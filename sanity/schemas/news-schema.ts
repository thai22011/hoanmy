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
                    {title:'Vietnamese', value: 'vn'},
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
        }
    ]


}

export default news
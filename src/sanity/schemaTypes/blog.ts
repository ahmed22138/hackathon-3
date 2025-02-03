


export default {
    name:'blog',
    title:'blog',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'title',
                maxLength:96
            }
        },
      
      {
       name:'image',
       title:'Image',
       type:'image',
       options:{
        hotspot:true
       }
      },

        {
            title: 'Description',
            name: 'description',
            type: 'text'
          },
          {
            title: 'Content', 
            name: 'content',
            type: 'array', 
            of: [{type: 'block'}]
          },
       
        {
            name:'publishedAt',
            title:'Published at',
            type:'datetime'
        },
       
       
    ]
}
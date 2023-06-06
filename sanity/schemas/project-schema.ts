import { title } from "process";

const project = {
    name: 'project',
    title: 'Projects',
    type: "document",
    fields:[
        { name: 'name', title:'name', type: 'string'},
        {name:'slug',title:'Slug',type:'slug',options:{source:'name'}},
        {name:'image',title:'Image',type:'image',options:{hotspot:true},fields:[
            {name:'alt',title:'Alt',type:'string'}
        ]},
        {name:'url',title:'URL',type:'url'},
        {name:'description',title:'Description',type:'array',of:[{type:'block'}]},
        {name:'detail',title:'Detail',type:'array',of:[{type:'block'}]},
        {name:'excerpt',title:'Excerpt',type:'array',of:[{type:'block'}]},
    ]
}

export default project;




export interface Blog {
    _id:string;
    _type: "blog";
    title:string;
    image?:{
  
        asset : {
          _ref:string;
          _type:'image';
        }
    }
    content?:string,
   description?:string;
  
   slug?:{
    _type:'slug'
    current:string;
   };
   
  
  } 
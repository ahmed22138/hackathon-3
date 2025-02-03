



export interface Food {
    _id:string;
    name:string;
    _type: "food";
    image?:{
        asset : {
          _ref:string;
          _type:'image';
        }
    }
   price:number;
   description?:string;
   
   originalPrice?:number;

   slug:{
    _type:'slug';
    current:string;
   };
   inventory:number;
   }

   



export interface Chef {
  _id:string;
  name:string;
  _type: "chef";
  image?:{
      asset : {
        _ref:string;
        _type:'image';
      }
  }
 description?:string;
 
}





export interface Blog {
  _id:string;
  title:string;
  _type: "blog";
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
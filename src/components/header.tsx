
import Image from "next/image"
import Link from "next/link"
import { SlHandbag } from "react-icons/sl";
import { MdAccountBox } from "react-icons/md";
import { GoSearch } from "react-icons/go";


export default function Header(){
  return(
   
      
   <div>

    <div className="head">
    
   
         
         <Image src={'/images/Foodtuck.png'} alt="//" width={90} height={50} />
 
        <ul>
        <Link href={'/'}><li>Home</li></Link>
        <Link href={'/menu'}><li>Menu</li></Link>
         <Link href={'/blogs'}><li>Blog</li></Link>
        <Link href={'/pages'}><li>Pages</li></Link>
         <Link href={''}><li>About</li></Link>
         <Link href={'/shops'}><li>Shop</li></Link>
          <Link href={''}><li>Contact</li></Link>
          <Link href={'/signup'}><li>Sign up</li></Link> 
         </ul>

        
        <div className="mbn">
        <GoSearch className="w-7 h-7"/><MdAccountBox className="w-7 h-7" /><SlHandbag className="w-7 h-6" />


        </div>




    </div>






   </div>
    





           

  
  )
}
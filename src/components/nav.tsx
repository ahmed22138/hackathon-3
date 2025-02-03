import Image from "next/image";

import Link from "next/link";

export default function Navbar(){
    return(
        <div>
          
          <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
    rel="stylesheet"
/>

          <nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
        <i className="ri-menu-3-fill"></i>
        </label>
        <ul>
            <li><Link className="active" href="/">Home</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="Blogs">Blog</Link></li>
            <li><Link href="/pages">Pages</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/shops">Shop</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="/signup">Sign In</Link></li>
        </ul>
    </nav>
        
        <div >
        <Image src='/images/Foodtuck.png' alt='///' width={80} height={20} className='ut'/>
            <input type="text" id="text" name="text" required placeholder="Search" className="lis" />
            <Image src='/images/Vector.png' alt='///' width={20} height={20} className='ui'/>
            <Image src='/images/Handbag (1).png' alt='///' width={30} height={20} className='ux'/>
            <h1 className="op"> Food<span className="po">tuck</span></h1>
        </div>
      

          





          


        </div>
    )
}

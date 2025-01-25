
import Image from "next/image"


export default function Footer(){
    return(

<>
      <footer>

      <h1 className="kh1"><span>St</span>ill You Need Our Support ? </h1>
      <p className="ph1">Don't wait make a smart & logical Quote here, Its Pretty easy,</p>
       
       <input type="text" id="text" name="text" required placeholder=" Enter Your Email" className="in1" />
       <button className="jkl1">Subscribe Now</button>

      

        <div className="footers">

           <Image src={'/images/Footer.png'} alt="//" width={1923} height={740} className="vvci"/>
    </div>
      </footer>





</>

    )
}
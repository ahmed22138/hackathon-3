import Header from "@/components/header";
import Image from "next/image";
import { MdAccountBox } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { RiLock2Line } from "react-icons/ri";


export default function Signup(){
    return(
        <div>
<Header/>

         <div className="hi15">
                <Image src={'/images/dc.png'} alt='//' width={1920} height={410} />
                <h1>Sign  In  page</h1>
                <h2>Home  &gt; <span>sign In</span></h2>
                </div>

             
                
               <div>
               <div className="litsn">
                <h1>Sign In</h1>
                 
             


                <RiLock2Line className="m1s"/>
                < MdOutlineEmail className="lmb"/>
                <MdAccountBox className="lbw"/>
               < input type="text" id="text" name="text" required placeholder="Name"/>
                <input type="text" id="text" name="text" required placeholder="Email" className="lmc"   />
                <input type="text" id="text" name="text" required placeholder="Password"  className="lnc"  />
                <br/>
                <input type="checkbox" className="j2"/>
                <p>Remember me?</p>
                <div>
                {/* <button>Sign in</button> */}
                <p className="ksa">Forget me?</p>

                
               </div>
            
               </div>
               
               </div>
               
              


                 <Image src={'/images/or.png'} alt=".." width={300} height={152} className="llw"/>

                 <Image src={'/images/Component 75.png'} alt="//" width={1923} height={740} className="tci12"/>
            </div>
    )
}
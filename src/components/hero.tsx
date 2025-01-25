
import Image from "next/image"
import next from "next"
import Footer from "./footer"
import Navbar from "./nav"
import Link from "next/link"
import { dataset } from "@/sanity/env"



export default function Hero(){
    return(
        <div>

  <Navbar/>

            <div className="left">
            <Image src={'/images/9999.png'} alt="//" width={472} height={136} className="tiy"/>
            <Image src={'/images/3434.png'} alt="//" width={25} height={492} className="tit"/>
            <Image src={'/images/777.png'} alt="//" width={200} height={40} className="yus"/>
            <Image src={'/images/112.png'} alt="//" width={420} height={50} className="uip"/>
            <button className="rrr">See Menu</button>

             <br/>

              
            <div className="div1">

                <Image src={'/images/io.png'} alt="//" width={91} height={40} />

                <h1 className="h1"><span className="ki"> We </span> Create the Best Foody product</h1>

                <p className="P-1">Lorem ipsum dolor sit amet consectetur adipisicing.
                 Deserunt nobis quos quidem. <br/>
                 incidunt quaerat maiores quo repudiandae, reiciendis ullam
                 explicabo.<br/> corrupti, perferendis, sapiente quas sunt harum. Lorem ipsum<br/>
                 dolor sit, amet consectetur adipisicing elit.<br/>
                  Cupiditate sed aspernatur.<br/></p>
                     
                     <br/>
                    <br/>

                 <h2 className="h2"> ✔  Lacus nisi, et ac dapibus sit eu velit in consequat.</h2>
                      <br/>
                 <h2 className="h2"> ✔  Quisque diam pellentesque bibendum non dui.</h2>
                     <br/>
                 <h2 className="h2"> ✔  Lorem ipsum dolor sit amet, consectetur elit.</h2>
                     <br/>

                     <button className="butt-1">Read Menu</button>
            </div>

          
            </div>
            
            <div className="right">
            <Image  src={'/images/Image.png'} alt='./.' width={860} height={679} className="tys"/>

             <div className="imh">
              <Image src={'/images/111 (1).png'} alt="//" width={660} height={330} className="lsi"/>
                     <Image src={'/images/111 (3).png'} alt="//" width={322} height={194} className="vv"/>
                     <Image src={'/images/111 (2).png'} alt="//" width={322} height={194} className="cc"/>
             </div>
            </div>

       

              

              <div className="h111">

               
               <Image src={'/images/Food Category (1).png'} alt="//" width={177} height={40} className="ii"/>
                
                <h1 className="l12"><span>Ch</span>oose Food Iteam</h1>

              
                
               <div className="hhh">
                <div className="jisi">
                <Image src={'/images/1.png'} alt="//" width={305} height={328} />
                </div>
               </div>

               <div className="hhh11">
                <div className="jisi1">
                <Image src={'/images/56 (9).png'} alt="//" width={305} height={328} />
                </div>
               </div>


               <div className="hhh22">
                <div className="jis3">
                <Image src={'/images/56 (8).png'} alt="//" width={305} height={328} />
                </div>
               </div>

               <div className="hhh33">
                <div className="jisi2">
                <Image src={'/images/56 (7).png'} alt="//" width={305} height={328} />
                </div>
               </div>



              </div>


             <div className="yyf">

                <Image src={'/images/56 (6).png'} alt="//" width={362} height={356} className="lol"/>
                
                
                <Image src={'/images/56 (5).png'} alt="//" width={281} height={231} className="lo3"/>

                
                <Image src={'/images/56 (4).png'} alt="//" width={244} height={306} className="lo5"/>

                
                <Image src={'/images/56 (3).png'} alt="//" width={221} height={226} className="lo4"/>
                
                
                <Image src={'/images/56 (2).png'} alt="//" width={161} height={168} className="lo22"/>

                
                <Image src={'/images/22.png'} alt="//" width={161} height={168} className="lo34"/>

                
                <Image src={'/images/56 (10).png'} alt="//" width={175} height={40} className="lo33"/>
                   <div className="tttt">
                <h1 className="h23"><span>Ex</span>ta ordinary taste And Experienced</h1>

                <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda <br/>
                 ab, eveniet incidunt  recusandae harum! Repellendus eligendi, alias enim <br/>
                 earum corrupti. Placeat sunt dignissimos minima id necessitatibus.<br/>
                 earum corrupti. Placeat sunt dignissimos minima <br/>
                 corrupti. Placeat sunt dignissimos.</p>

                 <Image src={'/images/56 (11).png'} alt="//" width={374} height={135} className="f121"/>
                 <Image src={'/images/h.png'} alt="//" width={56} height={56} className="t122"/>
                 <Image src={'/images/c.png'} alt="//" width={56} height={56} className="l123"/>
                 <Image src={'/images/w.png'} alt="//" width={56} height={56} className="p124"/>
                 <Image src={'/images/56 (1).png'} alt="//" width={374} height={93} className="p134"/>


                 <Image src={'/images/Clients (1).png'} alt="//" width={1930} height={469} className="y114"/>

                 <Image src={'/images/Our Menu (1).png'} alt="//" width={1300} height={665} className="t114"/>

      
</div>
             </div>


           
             <div className="name1">

               <Image src={'/images/Chefs.png'} alt="//" width={56} height={40} className="k122"/>

               <h1 className="h9"><span>Me</span>et Our Chef</h1>
             
              <div className="div-2">
              <Image src={'/images/Chef Card 1 (3).png'} alt="/" width={312} height={391} />
              </div>


              <div className="div-3">
              <Image src={'/images/Chef Card 1 (4).png'} alt="/" width={312} height={391} />
              </div>


              <div className="div-4">
              <Image src={'/images/Chef Card 1 (5).png'} alt="/" width={312} height={391} />
              </div>

              <div className="div-5">
              <Image src={'/images/Chef Card 1 (6).png'} alt="/" width={312} height={391} />
              </div>
              <div className="uu">
           <Link href={'/chefs'} ><button className="ki1232">See More</button> </Link>
               </div>

             </div>

               
            
                  <div className="tide">
               <Image src={'/images/uiuo.png'} alt="//" width={1200} height={770} className="ki10"/>

               <Image src={'/images/jik.png'} alt="//" width={1930} height={560} className="lite"/>
                 </div>



            <div className="push-1">

            <Image src={'/images/Blog Post.png'} alt="//" width={124} height={40} />

            <h1><span>La</span>test News & Blog</h1>

           
           <div className="ktms">
            
           <Image src={'/images/Blog Card 1.png'} alt="//" width={424} height={500} />

           </div>

           <div className="kims">
            
            <Image src={'/images/Blog Card 3.png'} alt="//" width={424} height={500} />
 
            </div>

              <div className="kms">
            
           <Image src={'/images/Blog Card 2.png'} alt="//" width={424} height={500} />

           </div>
 



            </div>



<Footer/>

</div>




    
    )
}

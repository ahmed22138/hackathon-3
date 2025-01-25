import Image from "next/image"
import Header from "@/components/header"



export default function Page(){
    return(

        <div>
<Header/>

<div className="hi13">
       <Image src={'/images/dc.png'} alt='//' width={1920} height={410} />
       <h1>FAQ Page</h1>
       <h2>Home  &gt; <span>faq</span></h2>
       <br/>
       <h3>Questions Looks Here</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam, numquam at, quam.</p>
        
        <div className="Miv">
        <Image src={'/images/Card 4.png'} alt="//" width={548} height={170}  />
        <br/>
        <Image src={'/images/Card 5.png'} alt="//" width={548} height={170}  />
        <br/>
        <Image src={'/images/Card 8.png'} alt="//" width={548} height={170}  />
        </div>
        <div className="M1v">
        <Image src={'/images/Card 7.png'} alt="//" width={548} height={170}  />
        <br />
        <Image src={'/images/Card i.png'} alt="//" width={548} height={170}  />
        <br />
        <Image src={'/images/Card 8.png'} alt="//" width={548} height={170}  />
        </div>
        </div>
        


         <Image src={'/images/Component 75.png'} alt="//" width={1923} height={740} className="tci1"/>


        </div>
    )
}
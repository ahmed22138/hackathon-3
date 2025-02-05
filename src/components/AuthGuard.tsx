import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

import { useEffect, useState } from "react"







const AuthGuard = ({children} : {children : React.ReactNode}) => {
    const [isloading, setIsloading] = useState(true)
    const {isSignedIn} = useUser()
    const router = useRouter()

    useEffect(()=>{
        if(isSignedIn === false){
            router.replace("signup")
        }else{
            setIsloading(false)
        }
    }, [isSignedIn, router])
    
    if (isloading) return <p>Loading...</p>

    return <>{children}</>
   
}

export default AuthGuard
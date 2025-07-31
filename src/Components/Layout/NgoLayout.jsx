import { Outlet, useNavigate } from "react-router-dom";
 import NgoHeader from "./NgoHeader";
import NgoFooter from "./NgoFooter";
import { useEffect } from "react";
import { toast } from "react-toastify";
export default function NgoLayout(){
    //  let {pathname}=useLocation()
    //     useEffect(()=>{
    //         window.scrollTo(0,0)
    //     },[pathname])
let isLogin=sessionStorage.getItem("isLogin")
    let userType=sessionStorage.getItem("userType")
    let nav=useNavigate()
    useEffect(()=>{
        if(!isLogin || userType!=2){
            toast.error("Please login")
            nav("/login")
        }
    },[ ])
    return(
        
        <>
        <NgoHeader/>
        <Outlet/> {/* child page load */}
        <NgoFooter/>
        </>
    )
}
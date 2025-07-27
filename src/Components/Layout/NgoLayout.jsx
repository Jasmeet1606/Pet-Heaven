import { Outlet, useLocation } from "react-router-dom";
 import NgoHeader from "./NgoHeader";
import NgoFooter from "./NgoFooter";
import { useEffect } from "react";

export default function NgoLayout(){
     let {pathname}=useLocation()
        useEffect(()=>{
            window.scrollTo(0,0)
        },[pathname])

    return(
        
        <>
        <NgoHeader/>
        <Outlet/> {/* child page load */}
        <NgoFooter/>
        </>
    )
}
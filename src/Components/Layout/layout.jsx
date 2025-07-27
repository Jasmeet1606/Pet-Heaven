import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { useEffect } from "react";
import Header from "./Header";


export default function Layout(){
      let {pathname}=useLocation()
        useEffect(()=>{
            window.scrollTo(0,0)
        },[pathname])

    return(
        <>
        <Header/>
        <Outlet/> {/** child pages  */}
        <Footer/>
        </>
    )
}
import { Outlet, useLocation } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminFooter from "./AdminFooter";
import { useEffect } from "react";

export default function AdminLayout(){
     let {pathname}=useLocation()
        useEffect(()=>{
            window.scrollTo(0,0)
        },[pathname])
    return(
        
        <>
        
        <AdminNavbar/>
        <Outlet/> 
        <AdminFooter/>
        </>
    )
}
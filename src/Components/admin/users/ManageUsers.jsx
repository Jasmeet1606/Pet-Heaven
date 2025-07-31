
// // import { collection, doc, onSnapshot, query, updateDoc } from "firebase/firestore"
// // import { useEffect, useState } from "react"
// // import { FadeLoader } from "react-spinners"
// // import { db } from "../../../Firebase"
// // import Switch from "react-switch"
// // import Swal from "sweetalert2"
// // export default function ManageUsers(){
// //     const [load, setLoad]=useState(false)
// //     const [users, setUsers]=useState([])
// //     useEffect(()=>{
// //         fetchData()
// //     },[])

// //     const fetchData=()=>{
// //         let q = query(collection(db, "users"))
// //         onSnapshot(q,(userCol)=>{
// //             setUsers(userCol.docs.map((el)=>{
// //                 return {id:el.id, ...el.data()};
// //             }))
// //         })
// //     }
// //      const changeStatus= (userId, status)=>{
           
// //             Swal.fire({
// //             title: "Are you sure?",
// //             text: "You won't be able to revert this!",
// //             icon: "warning",
// //             showCancelButton: true,
// //             confirmButtonColor: "#3085d6",
// //             cancelButtonColor: "#d33",
// //             confirmButtonText: `Yes, ${status?"block":"un-block"}`
// //             }).then(async (result) => {
// //             if (result.isConfirmed) {
// //                 let data={
// //                     status:!status
// //                 }
// //                 await updateDoc(doc(db,"users",userId), data)
// //                 .then(()=>{
// //                     Swal.fire({
// //                     title: `${status?"Blocked":"Un-blocked"}`,
// //                     icon: "success"
// //                     });
    
// //                 }).catch((error)=>{
// //                     toast.error(error.message)
// //                 })
               
// //             }
// //             });
                    
// //         }
// //     return(
// //         <>
// //         <section
// //                 className="hero-wrap hero-wrap-2"
// //                 style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
// //                 data-stellar-background-ratio="0.5"
// //             >
// //                 <div className="overlay" />
// //                 <div className="container">
// //                 <div className="row no-gutters slider-text align-items-end">
// //                     <div className="col-md-9 ftco-animate pb-5">
// //                     <p className="breadcrumbs mb-2">
// //                         <span className="mr-2">
// //                         <a href="index.html">
// //                             Home <i className="ion-ios-arrow-forward" />
// //                         </a>
// //                         </span>{" "}
// //                         <span>
// //                         Breed <i className="ion-ios-arrow-forward" />
// //                         </span>
// //                     </p>
// //                     <h1 className="mb-0 bread">Breed</h1>
// //                     </div>
// //                 </div>
// //                 </div>
// //             </section>
// //             <div className="container my-5">
// //             {
// //             load?
// //             <FadeLoader color="#00BD56" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
           
// //               :
// //               <div className="row justify-content-center no-gutters">
// //                 <div className="col-md" style={{boxShadow:"0px 0px 15px gray"}}>
// //                   <div className="contact-wrap table-responsive w-100 p-md-5 p-4">
// //                     <h3 className="mb-4">Manage Users</h3>
// //                     <table className="table table-bordered table-hover table-striped">
// //                         <thead className="table-dark">
// //                             <tr>
// //                                 <th>Sno</th>
// //                                 <th>Full Name</th>
// //                                 <th>Email</th>
// //                                 <th>Contact</th>
// //                                 <th>Status</th>
// //                                 <th>Actions</th>
// //                             </tr>
// //                         </thead>
// //                         <tbody>
// //                             {users?.map((el, index)=>{
// //                                 return(
// //                                     <tr>
// //                                         <td>{index+1}</td>
// //                                         <td>{el?.name}</td>
// //                                         <td>{el?.email}</td>
// //                                         <td>{el?.contact}</td>
// //                                         {/* <td>{el?.status?.toString()}</td> */}
// //                                         <td>
// //                                             {el?.status?"Active":"In-active"}
// //                                         </td>
// //                                         <td>
// //                                             <Switch checked={el?.status} onChange={()=>{
// //                                                 changeStatus(el?.id, el?.status)
// //                                             }}/>
// //                                         </td>
// //                                     </tr>
// //                                 )
// //                             })}
// //                         </tbody>
// //                     </table>
// //                   </div>
// //                 </div>
              
// //               </div>
// //             }
// //             </div>
// //         </>
// //     )
// // }



// import { collection, doc, onSnapshot, query, updateDoc } from "firebase/firestore"
// import { useEffect, useState } from "react"
// import { FadeLoader } from "react-spinners"
// import Switch from "react-switch"
// import Swal from "sweetalert2"
// import ResponsivePagination from 'react-responsive-pagination';
// import 'react-responsive-pagination/themes/classic-light-dark.css';
// import { db } from "../../../Firebase"
// export default function ManageUsers(){
//     const [load, setLoad]=useState(false)
//     const [users, setUsers]=useState([])
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const limit=5
//     // useEffect(fn, [dependency])
//     useEffect(()=>{
//         fetchData()
//     },[])

//     const fetchData=()=>{
//         //getDoc, onsnapshot, getdocs
//         let q = query(collection(db, "users"))
//         onSnapshot(q,(userCol)=>{
//             setUsers(userCol.docs.map((el)=>{
//                 // console.log(el.data(), el.id);
//                 return {id:el.id, ...el.data()};
//             }))
//             setTotalPages(Math.ceil(userCol.docs.length/limit));
            
//         })
//     }
//      const changeStatus= (userId, status)=>{
           
//             Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: `Yes, ${status?"block":"un-block"}`
//             }).then(async (result) => {
//             if (result.isConfirmed) {
//                 let data={
//                     status:!status
//                 }
//                 await updateDoc(doc(db,"users",userId), data)
//                 .then(()=>{
//                     Swal.fire({
//                     title: `${status?"Blocked":"Un-blocked"}`,
//                     // text: "Your file has been deleted.",
//                     icon: "success"
//                     });
    
//                 }).catch((error)=>{
//                     toast.error(error.message)
//                 })
               
//             }
//             });
                    
//         }
//     return(
//         <>
//         <section
//                 className="hero-wrap hero-wrap-2"
//                 style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
//                 data-stellar-background-ratio="0.5"
//             >
//                 <div className="overlay" />
//                 <div className="container">
//                 <div className="row no-gutters slider-text align-items-end">
//                     <div className="col-md-9 ftco-animate pb-5">
//                     <p className="breadcrumbs mb-2">
//                         <span className="mr-2">
//                         <a href="index.html">
//                             Home <i className="ion-ios-arrow-forward" />
//                         </a>
//                         </span>{" "}
//                         <span>
//                         Breed <i className="ion-ios-arrow-forward" />
//                         </span>
//                     </p>
//                     <h1 className="mb-0 bread">Breed</h1>
//                     </div>
//                 </div>
//                 </div>
//             </section>
//             <div className="container my-5">
//             {
//             load?
//             <FadeLoader color="#00BD56" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
           
//               :
//               <div className="row justify-content-center no-gutters">
//                 <div className="col-md" style={{boxShadow:"0px 0px 15px gray"}}>
//                   <div className="contact-wrap table-responsive w-100 p-md-5 p-4">
//                     <h3 className="mb-4">Manage Users</h3>
//                     <table className="table table-bordered table-hover table-striped">
//                         <thead className="table-dark">
//                             <tr>
//                                 <th>Sno</th>
//                                 <th>Full Name</th>
//                                 <th>Email</th>
//                                 <th>Contact</th>
//                                 <th>Status</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {users?.slice((currentPage-1)*limit, ((currentPage-1)*limit)+limit)?.map((el, index)=>{
//                                 return(
//                                     <tr>
//                                         <td>{((currentPage-1)*limit)+index+1}</td>
//                                         <td>{el?.name}</td>
//                                         <td>{el?.email}</td>
//                                         <td>{el?.contact}</td>
//                                         {/* <td>{el?.status?.toString()}</td> */}
//                                         <td>
//                                             {el?.status?"Active":"In-active"}
//                                         </td>
//                                         <td>
//                                             <Switch checked={el?.status} onChange={()=>{
//                                                 changeStatus(el?.id, el?.status)
//                                             }}/>
//                                         </td>
//                                     </tr>
//                                 )
//                             })}
//                         </tbody>
//                         <tfoot>
//                             <tr>
//                                 <td colSpan={6}>
//                                      <ResponsivePagination
//                                         current={currentPage}
//                                         total={totalPages}
//                                         onPageChange={setCurrentPage}
//                                         />
//                                 </td>
//                             </tr>
//                         </tfoot>
//                     </table>
//                   </div>
//                 </div>
              
//               </div>
//             }
//             </div>
//         </>
//     )
// }
import { addDoc, collection, deleteDoc, doc, onSnapshot, Timestamp, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { CircleLoader, PacmanLoader } from "react-spinners"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import Switch from "react-switch"

export default function ManageUsers(){
    const [load, setLoad]=useState(false)
    const [users,setUsers]=useState([])
       

    useEffect(()=>{
            fetchData()
        },[])
    
    const fetchData=()=>{
       onSnapshot(collection(db,"users"),(usersData)=>{
       
         setUsers(
            usersData.docs.map((el)=>{
            // console.log(el.id,el.data());
            return{id:el.id,...el.data()}


            

            
        })
        .filter(user=>user.userType===3)
         )
       
         setLoad(false)
       })
        
    }

     const changeStatus= (userId,status)=>{

        Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: `Yes, ${status?"block":"un-block"}`
                                }).then(async (result) => {
                                if (result.isConfirmed) {
                                    let data={
                                    status:!status
                                    }
               
                                    await updateDoc(doc(db,"users",userId),data)
                                    .then(()=>{
                                        Swal.fire({
                                        title:  `${status?"Blocked":"Un-blocked"}`,
                                        // text: "Your file has been deleted.",
                                        icon: "success"
                                        });
                        
                                    }).catch((error)=>{
                                        toast.error(error.message)
                                    })
                                   
                                }
                                });


                
                    // console.log(userId);
                    // await deleteDoc(doc(db,"users",userId)).then(()=>{
                    // toast.success("Item is deleted")
            
                    // }).catch((error)=>{
                    //     toast.error(error.message)
                    // })
                    
                }


                const deleteUser= async(userId)=>{
                
                        Swal.fire({
                                        title: "Are you sure?",
                                        text: "You won't be able to revert this!",
                                        icon: "warning",
                                        showCancelButton: true,
                                        confirmButtonColor: "#3085d6",
                                        cancelButtonColor: "#d33",
                                        confirmButtonText: "Yes, delete it!"
                                        }).then(async (result) => {
                                        if (result.isConfirmed) {
                                            await deleteDoc(doc(db,"users",userId))
                                            .then(()=>{
                                                Swal.fire({
                                                title: "Deleted!",
                                                text: "Your file has been deleted.",
                                                icon: "success"
                                                });
                                
                                            }).catch((error)=>{
                                                toast.error(error.message)
                                            })
                                           
                                        }
                                        });
                                    }
       
  
    return(
        <>
        <section
                className="hero-wrap hero-wrap-2"
                style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
                data-stellar-background-ratio="0.5"
            >
                <div className="overlay" />
                <div className="container">
                <div className="row no-gutters slider-text align-items-end">
                    <div className="col-md-9 ftco-animate pb-5">
                    <p className="breadcrumbs mb-2">
                        <span className="mr-2">
                        <a href="index.html">
                            Home <i className="ion-ios-arrow-forward" />
                        </a>
                        </span>{" "}
                        <span>
                        users <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread"> Users</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container-fluid my-5">

                {load?
            <CircleLoader color="#00BD56" size={40} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
            :
           

            <div className="row justify-content-center no-gutters">
              <div className="col-md-10" style={{boxShadow:"0px 0px 15px gray"}}>
                <div className=" table-responsive-md contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Manage Users</h3>
                  <table className="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Actions</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {users?.map((el, index)=>{
                                        return(
                            
                                        <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{el?.name}</td>
                                        <td>{el?.email}</td>
                                        <td>{el?.contact}</td>
                                        <td>{el?.address}</td>
                                        <td>
                                            {el?.status?"Active":"In-active"}
                                        </td>
                                         <td>
                                             <Link to={"/admin/users/edit/"+el.id} className="btn btn-outline-success mx-2">Edit</Link>
                                            <button className="btn btn-danger" onClick={()=>{
                                            deleteUser(el.id)
                                         }}>Delete </button></td>
                                         <td>
                                            <Switch checked={el?.status} onChange={()=>{
                                            changeStatus(el?.id, el?.status)
                                            }}/>
                                        </td>

                                        </tr>
                                     
                                           )
                                     })}

                                    </tbody>
                    
                    </table>

                 
                </div>
              </div>
             
            </div>
        }  
            </div>

        </>
    )
}
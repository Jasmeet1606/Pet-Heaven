// import { addDoc, collection, deleteDoc, doc, onSnapshot, Timestamp } from "firebase/firestore"
// import { useEffect, useState } from "react"
// import { db } from "../../../Firebase"
// import { toast } from "react-toastify"
// import axios from "axios"
// import Swal from "sweetalert2"
// import { CircleLoader, PacmanLoader } from "react-spinners"
// import { Link } from "react-router-dom"

// export default function ManageAdoptionRequest(){
//     const [load, setLoad]=useState(true)
//     const [requests,setRequests]=useState([])
       
//     const fetchData=()=>{
//        onSnapshot(collection(db,"adoptionRequest"),(usersData)=>{
       
//          setRequests(
//             usersData.docs.map((el)=>{
//             // console.log(el.id,el.data());
//             return{id:el.id,...el.data()}


            

            
//         })
        
//          )
//          setLoad(false)


        
//        })
        
//     }


//     useEffect(()=>{
//         fetchData()
//         // console.log(AllBreeds);
        
//     },[])

//     const DeleteRequests= async(adoptionRequestId)=>{
//         Swal.fire({
//                                 title: "Are you sure?",
//                                 text: "You won't be able to revert this!",
//                                 icon: "warning",
//                                 showCancelButton: true,
//                                 confirmButtonColor: "#3085d6",
//                                 cancelButtonColor: "#d33",
//                                 confirmButtonText: "Yes, delete it!"
//                                 }).then(async (result) => {
//                                 if (result.isConfirmed) {
//                                     await deleteDoc(doc(db,"adoptionRequest",adoptionRequestId))
//                                     .then(()=>{
//                                         Swal.fire({
//                                         title: "Deleted!",
//                                         text: "Your file has been deleted.",
//                                         icon: "success"
//                                         });
                        
//                                     }).catch((error)=>{
//                                         toast.error(error.message)
//                                     })
                                   
//                                 }
//                                 });
                
//             // console.log(adoptionRequestId);
//             // await deleteDoc(doc(db,"breeds",adoptionRequestId)).then(()=>{
//             // toast.success("Item is deleted")
    
//             // }).catch((error)=>{
//             //     toast.error(error.message)
//             // })
            
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
//                         Requests <i className="ion-ios-arrow-forward" />
//                         </span>
//                     </p>
//                     <h1 className="mb-0 bread">Requests</h1>
//                     </div>
//                 </div>
//                 </div>
//             </section>
//             <div className="container-fluid my-5">

//                 {load?
//             <CircleLoader color="#00BD56" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
//             :

//             <div className="row justify-content-center no-gutters">

//                 <div className="col-md-12" style={{boxShadow:"0px 0px 15px gray"}}>
//                 <div className=" table-responsive-md contact-wrap w-30 p-md-5 p-4">
//                   <h3 className="mb-4"> Manage Adoption Requests</h3>
//                   <table className="table table-striped">
//                                     <thead>
//                                         <tr>
//                                         <th scope="col">S.No</th>
//                                         <th scope="col">Name</th>
//                                         <th scope="col">Contact</th>
                                        
                            
//                                         <th scope="col">Image</th>
//                                         <th scope="col">ReasonToAdopt</th>
//                                         <th scope="col">Actions</th>

//                                         </tr>
//                                     </thead>
//                   {
//                     requests.map((el,index)=>{
//                         return  <tbody>
//                                         <tr>
//                                         <th scope="row">{index+1}</th>
//                                         <td>{el.name}</td>
//                                         <td>{el.contact}</td>
                                    
//                                         {/* <td><img className="img-fluid" src={el.bankStatements} alt="" /></td> */}
//                                         <td><img className="img-fluid" src={el.image} alt="" style={{height:"50px", width:"50px"}}/></td>
//                                         <td>{el.reasonToAdopt}</td>
//                                         <td>
//                                          <Link to={"/Ngo/adoptionRequest/edit/"+el.id} className="btn btn-outline-success mx-2">Edit</Link>

//                                             <button className="btn btn-danger" onClick={()=>{
//                                             DeleteRequests(el.id)
//                                          }}>Delete </button></td>

                                         
//                                         </tr>
                                       
//                                     </tbody>
//                     })
//                   }
//                     </table>

                 
//                 </div>
//               </div>
             
//                </div>
//             }
//             </div>

//         </>
//     )
// }

import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, query, Timestamp, updateDoc, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import { FadeLoader } from "react-spinners"
import { db } from "../../../Firebase"

export default function ManageAdoptionRequest(){
    const [load, setLoad]=useState(true)
    const [allAdoption,setAllAdoption]=useState([])

    const fetchData=()=>{
        const q=query(collection(db,"adoptionRequest")
        ,where("ngoId","==",sessionStorage.getItem("userId"))
    ) 
        onSnapshot(q,async (adoptionDoc)=>{
        
               let adoptionData= adoptionDoc.docs.map((el)=>{
                // console.log(el.id,el.data());
                return{id:el.id,...el.data()}
            })
            let updateData=[]
            for(let i=0;i<adoptionData.length;i++){
                let userId=adoptionData[i].userId 
                let userDoc=await getDoc(doc(db,"users", userId))
                let userData=userDoc.data()
                let ngoId=adoptionData[i].ngoId 
                let ngoDoc=await getDoc(doc(db,"users", ngoId))
                let ngoData=ngoDoc.data()
                let petId=adoptionData[i].petId 
                let petDoc=await getDoc(doc(db,"Pets", petId))
                let petData=petDoc.data()
                updateData.push({...adoptionData[i],pet:petData, ngo:ngoData, user:userData});
                
            }
            setAllAdoption(updateData)
            setLoad(false)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    const changeStatus= (id, status, petId)=>{
       
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
        }).then(async (result) => {
        if (result.isConfirmed) {
            let data={
                status
            }
            await updateDoc(doc(db,"adoptionRequest",id), data)
            .then(async ()=>{
                if(status=="Accepted"){
                        let data={
                            status:false
                        }
            await updateDoc(doc(db,"Pets",petId), data)
                }
                Swal.fire({
                title: "Status updated!",
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
                        ADoption <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">ADoption</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container my-5">
            {load?
            <FadeLoader color="#00BD56" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
            :
            <div className="row justify-content-center no-gutters">
              <div className="col-md-12" style={{boxShadow:"0px 0px 15px gray"}}>
                <div className="d-flex justify-content-end p-2">
                    <Link to={"/ngo/pet/add"} className="btn btn-outline-primary">Add New +</Link>
                </div>
                <div className="contact-wrap w-100 p-md-5 p-2">
                  <h3 className="mb-4">Manage pet</h3>
                  <table className="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">User Details</th>
                                        <th scope="col">Pet Details</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Salary</th>
                                        <th scope="col">Proof</th>
                                        <th scope="col">Reason to Adopt</th>
                                        <th scope="col">Status</th>
                                        <th scope="col" width="300px">Actions</th>

                                        </tr>
                                    </thead>
                  {
                    allAdoption.map((el,index)=>{
                        return <tbody>
                                        <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{el?.user?.name}
                                            <br/>
                                            {el?.user?.email}
                                            <br/>
                                            {el?.user?.contact}
                                        </td>
                                        <td>
                                            <img src={el?.pet?.image} style={{height:"50px",width:"50px"}}/>
                                            <br/>
                                            {el?.pet?.petName}
                                            <br/>
                                            {el?.pet?.age}
                                        </td>
                                        <td>{el.address}</td>
                                        <td>&#8377;{el.salary}</td>
                                         <td>
                                            <Link to={el.image} target="_blank">Address Proof</Link>
                                         </td>
                                         <td>{el?.reasonToAdopt}</td>
                                         <td>{el?.status}</td>
                                         <td>
                                            {el?.status=="Pending"?
                                            <button className="btn btn-danger" onClick={()=>{
                                            changeStatus(el.id,"Verification in progress")
                                         }}>Verify </button>
                                         :
                                         el?.status=="Verification in progress"?
                                         <>
                                              <button className="btn btn-outline-success" onClick={()=>{
                                            changeStatus(el.id,"Accepted", el.petId)
                                         }}>Accept </button>     <button className="btn btn-danger" onClick={()=>{
                                            changeStatus(el.id,"Declined")
                                         }}>Decline </button>
                                         </>
                                         :
                                         "NA"}
                                         </td>

                                        </tr>
                                       
                                    </tbody>

                        
                    })
                  }
                                </table>
                         


                 
                </div>
              </div>
             
            </div>
            }
            </div>

        </>
    )
}



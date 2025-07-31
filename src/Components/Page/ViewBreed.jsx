import { addDoc, collection, onSnapshot, Timestamp } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../Firebase" 
import { toast } from "react-toastify"
import axios from "axios"

export default function ViewBreeds(){

    const [AllBreeds,setAllBreeds]=useState([])

    const fetchData=()=>{
       onSnapshot(collection(db,"breed"),(breedData)=>{
       
         setAllBreeds(
            breedData.docs.map((el)=>{
            // console.log(el.id,el.data());
            return{id:el.id,...el.data()}

            

            
        })
         )
       
        
       })
        
    }

    useEffect(()=>{
        fetchData()
        // console.log(AllBreeds);
        
    },[])
  
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
                        Breed <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">Breed</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container my-5">

                {/* contact form  */}
            <div className="row justify-content-center no-gutters">
              <div className="col-md-7" style={{boxShadow:"0px 0px 15px gray"}}>
                <div className=" table-responsive-md contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Breeds</h3>
                  <table className="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Breed</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Des</th>
                                        <th scope="col">Image</th>
                                        </tr>
                                    </thead>
                  {
                    AllBreeds.map((el,index)=>{
                        return  <tbody>
                                        <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{el.breedName}</td>
                                        <td>{el.type}</td>
                                        <td>{el.description}</td>
                                         <td><img className="img-fluid" src={el.image} alt="" style={{height:"50px", width:"50px"}} /></td>
                                        </tr>
                                       
                                    </tbody>
                                    })
                  }
                    </table>

                 
                </div>
              </div>
             
            </div>
            </div>

        </>
    )
}
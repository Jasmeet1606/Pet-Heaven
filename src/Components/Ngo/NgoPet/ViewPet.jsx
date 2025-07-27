// import { collection, onSnapshot } from "firebase/firestore"
// import { useEffect, useState } from "react"
// import { db } from "../../../Firebase"

// export default function ViewPet(){

//     const [AllPets,setAllPets]=useState([])

//     const fetchData=()=>{
//        onSnapshot(collection(db,"Pets"),(petData)=>{
       
//          setAllPets(
//             petData.docs.map((el)=>{
//             // console.log(el.id,el.data());
//             return{id:el.id,...el.data()}
            
//         })
//          )
       
        
//        })   
//     }
//     useEffect(()=>{
//         fetchData()
//         // console.log(AllBreeds);
        
//     },[])
  
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
//                         Pets <i className="ion-ios-arrow-forward" />
//                         </span>
//                     </p>
//                     <h1 className="mb-0 bread">Pet</h1>
//                     </div>
//                 </div>
//                 </div>
//             </section>
//             <div className="container my-5">

//                 {/* contact form  */}
//             <div className="row justify-content-center no-gutters">
//               <div className="col-md-7" style={{boxShadow:"0px 0px 15px gray"}}>
//                 <div className="contact-wrap w-100 p-md-5 p-4">
//                   <h3 className="mb-4">View Pets</h3>
//                   <table className="table table-striped">
//                                     <thead>
//                                         <tr>
//                                         <th scope="col">#</th>
//                                         <th scope="col">Breed</th>
//                                         <th scope="col">Type</th>
//                                         <th scope="col">Des</th>
//                                         <th scope="col">Image</th>
//                                         </tr>
//                                     </thead>
//                   {
//                     AllPets.map((el,index)=>{
//                         return <tbody>
//                                         <tr>
//                                         <th scope="row">{index+1}</th>
//                                         <td>{el.breedName}</td>
//                                         <td>{el.type}</td>
//                                         <td>{el.description}</td>
//                                          <td><img className="img-fluid" src={el.image} alt="" /></td>
//                                         </tr>
                                       
//                                     </tbody>

                        
//                     })
//                   }
//                                 </table>
              
//                 </div>
//               </div>
             
//             </div>
//             </div>

//         </>
//     )
// }

import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../Firebase";

export default function ViewPet() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "Pets"), (snapshot) => {
      const petData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Snapshot data:", petData);
      setPets(petData);
    });

    return () => unsub();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">View Pets</h2>
      <div className="row">
        {pets.length === 0 ? (
          <p>No pets found</p>
        ) : (
          pets.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card mb-4">
                <img src={item.image} className="card-img-top" alt={item.petName} />
                <div className="card-body">
                  <h5 className="card-title">{item.petName}</h5>
                  <p className="card-text">{item.description}</p>
                  <p>Type: {item.type}</p>
                  <p>Status: {item.status ? "Available" : "Adopted"}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// import { addDoc, collection, onSnapshot, Timestamp } from "firebase/firestore"
// import { useEffect, useState } from "react"
// import { db } from "../../Firebase"
// import { toast } from "react-toastify"
// import axios from "axios"

// export default function ViewNGO(){

//     const [AllNgo,setAllNgo]=useState([])
       
//     const fetchData=()=>{
//        onSnapshot(collection(db,"users"),(usersData)=>{
       
//          setAllNgo(
//             usersData.docs.map((el)=>{
//             // console.log(el.id,el.data());
//             return{id:el.id,...el.data()}


            

            
//         })
//         .filter(user=>user.userType===2)
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
//                         Ngo <i className="ion-ios-arrow-forward" />
//                         </span>
//                     </p>
//                     <h1 className="mb-0 bread">NGO</h1>
//                     </div>
//                 </div>
//                 </div>
//             </section>
//             <div className="container my-5">

//                 {/* contact form  */}
//             <div className="row justify-content-center no-gutters">
//               <div className="col-md-7" style={{boxShadow:"0px 0px 15px gray"}}>
//                 <div className=" table-responsive-md contact-wrap w-100 p-md-5 p-4">
//                   <h3 className="mb-4">NGO's</h3>
//                   <table className="table table-striped">
//                                     <thead>
//                                         <tr>
//                                         <th scope="col">S.No</th>
//                                         <th scope="col">Name</th>
//                                         <th scope="col">Email</th>
//                                         <th scope="col">Contact</th>
//                                         <th scope="col">Address</th>
//                                         </tr>
//                                     </thead>
//                   {
//                     AllNgo.map((el,index)=>{
//                         return  <tbody>
//                                         <tr>
//                                         <th scope="row">{index+1}</th>
//                                         <td>{el.name}</td>
//                                         <td>{el.email}</td>
//                                         <td>{el.contact}</td>
//                                         <td>{el.address}</td>
//                                         </tr>
                                       
//                                     </tbody>
//                     })
//                   }
//                     </table>

                 
//                 </div>
//               </div>
             
//             </div>
//             </div>

//         </>
//     )
// }



// import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { db } from "../../Firebase";
// import { FadeLoader } from "react-spinners";

// export default function ViewNGO() {
//     const [ngoList, setNgoList] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchNGODetails = () => {
//         const q = query(
//             collection(db, "adoptionRequest"),
//             where("userId", "==", sessionStorage.getItem("userId"))
            
//         );
//         console.log("User ID:", sessionStorage.getItem("userId"));


//         onSnapshot(q, async (snapshot) => {
//             let data = [];
//             for (let docSnap of snapshot.docs) {
//                 const adoption = docSnap.data();

//                 const ngoDoc = await getDoc(doc(db, "users", adoption.ngoId));
//                 const petDoc = await getDoc(doc(db, "Pets", adoption.petId));

//                 data.push({
//                     id: docSnap.id,
//                     ngo: ngoDoc.data(),
//                     pet: petDoc.data(),
//                     status: adoption.status,
//                 });
//             }

//             setNgoList(data);
//             setLoading(false);
//         });
//     };

//     useEffect(() => {
//         fetchNGODetails();
//     }, []);

//     return (
//         <>
//             <section
//                 className="hero-wrap hero-wrap-2"
//                 style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
//                 data-stellar-background-ratio="0.5"
//             >
//                 <div className="overlay" />
//                 <div className="container">
//                     <div className="row no-gutters slider-text align-items-end">
//                         <div className="col-md-9 ftco-animate pb-5">
//                             <p className="breadcrumbs mb-2">
//                                 <span className="mr-2"><a href="/">Home <i className="ion-ios-arrow-forward" /></a></span>
//                                 <span>NGO Details <i className="ion-ios-arrow-forward" /></span>
//                             </p>
//                             <h1 className="mb-0 bread">NGO Info</h1>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <div className="container my-5">
//                 {loading ? (
//                     <FadeLoader color="#00BD56" cssOverride={{ display: "block", margin: "0 auto" }} />
//                 ) : (
//                     <div className="row justify-content-center no-gutters">
//                         <div className="col-md-12" style={{ boxShadow: "0 0 15px gray" }}>
//                             <div className="contact-wrap w-100 p-md-5 p-2">
//                                 <h3 className="mb-4">NGO Details for Your Requests</h3>
//                                 <table className="table table-striped">
//                                     <thead>
//                                         <tr>
//                                             <th>#</th>
//                                             <th>NGO Info</th>
//                                             <th>Pet</th>
//                                             <th>Status</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {ngoList.map((item, index) => (
//                                             <tr key={item.id}>
//                                                 <td>{index + 1}</td>
//                                                 <td>
//                                                     <strong>{item.ngo?.name}</strong><br />
//                                                     {item.ngo?.email}<br />
//                                                     {item.ngo?.contact}<br />
//                                                     {item.ngo?.address}
//                                                 </td>
//                                                 <td>
//                                                     <img src={item.pet?.image} alt="pet" style={{ width: 50, height: 50 }} /><br />
//                                                     {item.pet?.petName} ({item.pet?.age})
//                                                 </td>
//                                                 <td>{item.status}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// }
import { useEffect, useState } from "react"
import { collection, query, onSnapshot, where, getDoc, doc } from "firebase/firestore"
import { db } from "../../Firebase"


export default function ViewNGO() {
  const [pets, setPets] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    const q = query(
      collection(db, "adoptionRequest"),
      where("userId", "==", sessionStorage.getItem("userId"))
    )

    onSnapshot(q, async (adoptionDoc) => {
      let adoptionData = adoptionDoc.docs.map((el) => {
        return { id: el.id, ...el.data() }
      })

      let updateData = []
      for (let i = 0; i < adoptionData.length; i++) {
        let petId = adoptionData[i].petId
        let ngoId = adoptionData[i].ngoId

        let petDoc = await getDoc(doc(db, "Pets", petId))
        let ngoDoc = await getDoc(doc(db, "users", ngoId))

        updateData.push({
          ...adoptionData[i],
          pet: petDoc.data(),
          ngo: ngoDoc.data(),
        })
      }

      setPets(updateData)
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) return <h4 className="text-center">Loading...</h4>
  if (pets.length === 0) return <h4 className="text-center">No NGO Found</h4>

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Your Selected NGOs</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Pet Image</th>
              <th>Pet Name</th>
              <th>NGO Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
              <tr key={pet.id}>
                <td>
                  <img
                    src={pet?.pet?.image}
                    alt={pet?.pet?.petName}
                    style={{ width: "100px", height: "80px", objectFit: "cover" }}
                  />
                </td>
                <td>{pet?.pet?.petName}</td>
                <td>{pet?.ngo?.name}</td>
                <td>{pet?.ngo?.email}</td>
                <td>{pet?.ngo?.contact}</td>
                <td>{pet?.ngo?.address}</td>
                <td>{pet?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

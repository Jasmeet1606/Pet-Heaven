// // // import { useEffect, useState } from "react";
// // // import { db } from "../../../Firebase";
// // // import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";

// // // export default function AdminAdoptions() {
// // //   const [adoptions, setAdoptions] = useState([]);

// // //   useEffect(() => {
// // //     const unsub = onSnapshot(collection(db, "adoptions"), (snap) => {
// // //       const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
// // //       setAdoptions(data);
// // //     });
// // //     return () => unsub();
// // //   }, []);

// // //   const handleStatusChange = async (id, status) => {
// // //     const docRef = doc(db, "adoptions", id);
// // //     await updateDoc(docRef, { status });
// // //   };

// // //   return (
// // //     <>
// // //       <section
// // //                 className="hero-wrap hero-wrap-2"
// // //                 style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
// // //                 data-stellar-background-ratio="0.5"
// // //             >
// // //                 <div className="overlay" />
// // //                 <div className="container">
// // //                 <div className="row no-gutters slider-text align-items-end">
// // //                     <div className="col-md-9 ftco-animate pb-5">
// // //                     <p className="breadcrumbs mb-2">
// // //                         <span className="mr-2">
// // //                         <a href="index.html">
// // //                             Home <i className="ion-ios-arrow-forward" />
// // //                         </a>
// // //                         </span>{" "}
// // //                         <span>
// // //                        Adoption Request <i className="ion-ios-arrow-forward" />
// // //                         </span>
// // //                     </p>
// // //                     <h1 className="mb-0 bread">Adoption Request</h1>
// // //                     </div>
// // //                 </div>
// // //                 </div>
// // //             </section>

// // //     <div className="container mt-4">
// // //       <h2>All Adoption Requests</h2>
// // //       <table className="table table-bordered mt-3">
// // //         <thead>
// // //           <tr>
// // //             <th>Pet Name</th>
// // //             <th>User Email</th>
// // //             <th>NGO Name</th>
// // //             <th>Status</th>
// // //             <th>Action</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {adoptions.map((adopt) => (
// // //             <tr key={adopt.id}>
// // //               <td>{adopt.petName}</td>
// // //               <td>{adopt.userEmail}</td>
// // //               <td>{adopt.ngoName}</td>
// // //               <td>{adopt.status}</td>
// // //               <td>
// // //                 {adopt.status === "Pending" && (
// // //                   <>
// // //                     <button
// // //                       className="btn btn-success btn-sm me-2"
// // //                       onClick={() => handleStatusChange(adopt.id, "Approved")}
// // //                     >
// // //                       Approve
// // //                     </button>
// // //                     <button
// // //                       className="btn btn-danger btn-sm"
// // //                       onClick={() => handleStatusChange(adopt.id, "Rejected")}
// // //                     >
// // //                       Reject
// // //                     </button>
// // //                   </>
// // //                 )}
// // //                 {adopt.status !== "Pending" && <span>No Action</span>}
// // //               </td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //     </>
// // //   );
// // // }

// // import { useEffect, useState } from "react";
// // import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
// // import { db } from "../../../Firebase";

// // export default function AdminAdoptions() {
// //   const [adoptions, setAdoptions] = useState([]);

// //   useEffect(() => {
// //     const unsub = onSnapshot(collection(db, "adoptions"), (snapshot) => {
// //       const data = snapshot.docs.map((doc) => ({
// //         id: doc.id,
// //         ...doc.data(),
// //       }));
// //       setAdoptions(data);
// //     });
// //     return () => unsub();
// //   }, []);

// //   const handleUpdateStatus = async (id, newStatus) => {
// //     const ref = doc(db, "adoptions", id);
// //     await updateDoc(ref, { status: newStatus });
// //   };

// //   return (
// //     <div className="container p-4">
// //       <h2 className="mb-4">All Adoption Requests</h2>
// //       <table className="table table-bordered">
// //         <thead>
// //           <tr>
// //             <th>Pet Name</th>
// //             <th>User Email</th>
// //             <th>NGO Name</th>
// //             <th>Status</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {adoptions.map((item) => (
// //             <tr key={item.id}>
// //               <td>{item.petName}</td>
// //               <td>{item.userEmail}</td>
// //               <td>{item.ngoName}</td>
// //               <td>{item.status}</td>
// //               <td>
// //                 {item.status === "Pending" ? (
// //                   <>
// //                     <button
// //                       className="btn btn-success btn-sm me-2"
// //                       onClick={() => handleUpdateStatus(item.id, "Approved")}
// //                     >
// //                       Approve
// //                     </button>
// //                     <button
// //                       className="btn btn-danger btn-sm"
// //                       onClick={() => handleUpdateStatus(item.id, "Rejected")}
// //                     >
// //                       Reject
// //                     </button>
// //                   </>
// //                 ) : (
// //                   <span>{item.status}</span>
// //                 )}
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react"

// import { collection, getDocs, updateDoc, doc } from "firebase/firestore"
// import { toast } from "react-toastify"
// import { db } from "../../../Firebase"

// export default function Adoption() {
//   const [requests, setRequests] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, "adoptions"))
//         const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
//         setRequests(data)
//       } catch (err) {
//         toast.error("Error fetching requests")
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchRequests()
//   }, [])

//   const handleApprove = async (id) => {
//     try {
//       await updateDoc(doc(db, "adoptions", id), { status: "approved" })
//       toast.success("Request approved")
//       setRequests(prev => prev.map(r => r.id === id ? { ...r, status: "approved" } : r))
//     } catch (err) {
//       toast.error("Failed to approve")
//     }
//   }

//   if (loading) return <h4 className="text-center">Loading...</h4>
//   if (requests.length === 0) return <h4 className="text-center">No Requests Found</h4>

//   return (
//     <div className="container mt-4">
//       <h3 className="mb-4">Adoption Requests</h3>
//       <div className="row">
//         {requests.map((req) => (
//           <div className="col-md-4 mb-4" key={req.id}>
//             <div className="card h-100 shadow">
//               <img src={req.image} className="card-img-top" alt={req.petName} style={{ height: 250, objectFit: "cover" }} />
//               <div className="card-body">
//                 <h5>{req.petName}</h5>
//                 <p><strong>Breed:</strong> {req.breed}</p>
//                 <p><strong>Type:</strong> {req.type}</p>
//                 <p><strong>Status:</strong> {req.status}</p>
//                 {req.status === "pending" && (
//                   <button onClick={() => handleApprove(req.id)} className="btn btn-success w-100">Approve</button>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

import { useEffect, useState } from "react"
import { collection, getDocs, updateDoc, doc } from "firebase/firestore"
import { toast } from "react-toastify"
import { db } from "../../../Firebase"

export default function Adoption() {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const snapshot = await getDocs(collection(db, "adoptions"))
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setRequests(data)
      } catch (err) {
        toast.error("Error fetching requests")
      } finally {
        setLoading(false)
      }
    }
    fetchRequests()
  }, [])

  const handleApprove = async (id) => {
    try {
      await updateDoc(doc(db, "adoptions", id), { status: "approved" })
      toast.success("Request approved")
      setRequests(prev => prev.map(r => r.id === id ? { ...r, status: "approved" } : r))
    } catch (err) {
      toast.error("Failed to approve")
    }
  }

  const handleReject = async (id) => {
  try {
    await updateDoc(doc(db, "adoptions", id), { status: "rejected" })
    toast.warning("Request rejected")
    setRequests(prev => prev.filter(r => r.id !== id)) // remove the rejected card
  } catch (err) {
    toast.error("Failed to reject")
  }
}


  if (loading) return <h4 className="text-center">Loading...</h4>
  if (requests.length === 0) return <h4 className="text-center">No Requests Found</h4>

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Adoption Requests</h3>
      <div className="row">
        {requests.map((req) => (
          <div className="col-md-4 mb-4" key={req.id}>
            <div className="card h-100 shadow">
              <img src={req.image} className="card-img-top" alt={req.petName} style={{ height: 250, objectFit: "cover" }} />
              <div className="card-body">
                <h5>{req.petName}</h5>
                <p><strong>Breed:</strong> {req.breed}</p>
                <p><strong>Type:</strong> {req.type}</p>
                <p><strong>Status:</strong> {req.status}</p>
                {req.status === "pending" && (
                  <div className="d-grid gap-2">
                    <button onClick={() => handleApprove(req.id)} className="btn btn-success mb-2">Approve</button>

                    <button onClick={() => handleReject(req.id)} className="btn btn-danger mb-2">Reject</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

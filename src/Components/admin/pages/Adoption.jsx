

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
                <p><strong>Breed:</strong> {req.petName}</p>
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

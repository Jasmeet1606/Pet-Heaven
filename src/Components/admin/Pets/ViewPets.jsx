
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../Firebase";

export default function ViewPets() {
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

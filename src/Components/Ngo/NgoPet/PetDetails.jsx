import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../Firebase";
import { toast } from "react-toastify";
import axios from "axios";
import { PacmanLoader } from "react-spinners";

export default function PetDetails() {
  const [petName, setPetName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState({});
  const [imageName, setImageName] = useState("");
  const [load, setLoad] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoad(true);

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "images"); // Replace with your upload preset

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dtog9vbm2/image/upload", // Your Cloudinary cloud name
        formData
      );
      saveData(response.data.secure_url);
    } catch (error) {
      toast.error("Error uploading image: " + error.message);
      setLoad(false);
    }
  };

  const changeImage = (e) => {
    setImageName(e.target.value);
    setImage(e.target.files[0]);
  };

  const saveData = async (imageUrl) => {
    try {
      const data = {
        petName,
        breed,
        age,
        gender,
        type,
        description,
        image: imageUrl,
        status: true,
        createdAt: Timestamp.now(),
      };

      await addDoc(collection(db, "pets"), data);
      toast.success("Pet details added successfully!");

      // Clear form
      setPetName("");
      setBreed("");
      setAge("");
      setGender("");
      setType("");
      setDescription("");
      setImage({});
      setImageName("");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoad(false);
    }
  };

  return (
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
                  <a href="/ngo">
                    Home <i className="ion-ios-arrow-forward" />
                  </a>
                </span>{" "}
                <span>
                  Add Pet <i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread">Add Pet Details</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5">
        {load ? (
          <PacmanLoader
            color="#00BD56"
            size={30}
            cssOverride={{ display: "block", margin: "0 auto" }}
            loading={load}
          />
        ) : (
          <div className="row justify-content-center no-gutters">
            <div
              className="col-md-8"
              style={{ boxShadow: "0px 0px 15px gray", borderRadius: "10px" }}
            >
              <div className="contact-wrap w-100 p-md-5 p-4">
                <h3 className="mb-4">Add Pet Information</h3>
                <form
                  onSubmit={handleForm}
                  className="contactForm"
                  encType="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <label className="label">Pet Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Pet Name"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="col-md-12 mb-3">
                      <label className="label">Breed</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        required
                      />
                    </div>

                    <div className="col-md-12 mb-3">
                      <label className="label">Age (in years)</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        min="0"
                        required
                      />
                    </div>

                    <div className="col-md-12 mb-3">
                      <label className="label">Gender</label>
                      <select
                        className="form-control"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                      >
                        <option disabled value="">
                          Select Gender
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>

                    <div className="col-md-12 mb-3">
                      <label className="label">Type</label>
                      <select
                        className="form-control"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                      >
                        <option disabled value="">
                          Select Type
                        </option>
                        <option>Dog</option>
                        <option>Cat</option>
                      </select>
                    </div>

                    <div className="col-md-12 mb-3">
                      <label className="label">Description</label>
                      <textarea
                        className="form-control"
                        placeholder="Enter Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="3"
                        required
                      ></textarea>
                    </div>

                    <div className="col-md-12 mb-3">
                      <label className="label">Upload Image</label>
                      <input
                        type="file"
                        className="form-control"
                        value={imageName}
                        onChange={changeImage}
                        accept="image/*"
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <button className="btn btn-primary" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

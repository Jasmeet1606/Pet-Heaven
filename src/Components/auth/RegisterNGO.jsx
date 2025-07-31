// import { createUserWithEmailAndPassword } from "firebase/auth"
// import { useState } from "react"
// import { auth, db } from "../../Firebase"
// import { toast } from "react-toastify"
// import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore"
// import { useNavigate } from "react-router-dom"

// export default function NgoReg() {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [contact, setContact] = useState("")
//   const [license, setLicense] = useState("")
//   const [about, setAbout] = useState("")
//   const [address, setAddress] = useState("")

//   const nav = useNavigate()

//   const handleForm = (e) => {
//     e.preventDefault()
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCred) => {
//         let userId = userCred.user.uid
//         saveData(userId)
//       })
//       .catch((err) => {
//         toast.error(err.message)
//       })
//   }

//   const saveData = async (userId) => {
//     try {
//       let data = {
//         name: name,
//         email: email,
//         contact: contact,
//         license: license,
//         address: address,
//         about: about,
//         userId: userId,
//         userType: 2,
//         status: true,
//         createdAt: Timestamp.now()
//       }
//       await setDoc(doc(db, "users", userId), data)
//       toast.success("Register successfully!!")
//       getUserData(userId)
//     } catch (err) {
//       toast.error(err.message)
//     }
//   }

//   const getUserData = async (userId) => {
//     let userDoc = await getDoc(doc(db, "users", userId))
//     let userData = userDoc.data()
//     sessionStorage.setItem("name", userData?.name)
//     sessionStorage.setItem("email", userData?.email)
//     sessionStorage.setItem("userType", userData?.userType)
//     sessionStorage.setItem("userId", userId)
//     sessionStorage.setItem("isLogin", true)
//     toast.success("Login successfully")
//     if (userData?.userType == 2) {
//       nav("/ngo")
//     } else {
//       nav("/")
//     }
//   }

//   return (
//     <>
//       <section
//         className="hero-wrap hero-wrap-2"
//         style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
//         data-stellar-background-ratio="0.5"
//       >
//         <div className="overlay" />
//         <div className="container">
//           <div className="row no-gutters slider-text align-items-end">
//             <div className="col-md-9 ftco-animate pb-5">
//               <p className="breadcrumbs mb-2">
//                 <span className="mr-2">
//                   <a href="index.html">
//                     Home <i className="ion-ios-arrow-forward" />
//                   </a>
//                 </span>{" "}
//                 <span>
//                   Register as NGO <i className="ion-ios-arrow-forward" />
//                 </span>
//               </p>
//               <h1 className="mb-0 bread">Register</h1>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="container my-5">
//         <div className="row no-gutters">
//           <div className="col-md-7">
//             <div className="contact-wrap w-100 p-md-5 p-4">
//               <h3 className="mb-4">Register</h3>
//               <form
//                 method="POST"
//                 id="contactForm"
//                 name="contactForm"
//                 className="contactForm"
//                 onSubmit={handleForm}
//               >
//                 <div className="row">
//                   <div className="col-md-12">
//                     <div className="form-group">
//                       <label className="label" htmlFor="name">Full Name</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         placeholder="Full Name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="form-group">
//                       <label className="label" htmlFor="email">Email Address</label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="form-group">
//                       <label className="label" htmlFor="password">Password</label>
//                       <input
//                         type="password"
//                         className="form-control"
//                         id="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="form-group">
//                       <label className="label" htmlFor="contact">Contact</label>
//                       <input
//                         type="tel"
//                         className="form-control"
//                         id="contact"
//                         placeholder="Contact"
//                         minLength={10}
//                         maxLength={10}
//                         value={contact}
//                         onChange={(e) => setContact(e.target.value)}
//                       />
//                     </div>
//                   </div>

//                   {/* New Fields */}
//                   <div className="col-md-12">
//                     <div className="form-group">
//                       <label className="label" htmlFor="license">License Number</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="license"
//                         placeholder="License Number"
//                         value={license}
//                         onChange={(e) => setLicense(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="form-group">
//                       <label className="label" htmlFor="address">Address</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="address"
//                         placeholder="Address"
//                         value={address}
//                         onChange={(e) => setAddress(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="form-group">
//                       <label className="label" htmlFor="about">About</label>
//                       <textarea
//                         className="form-control"
//                         id="about"
//                         placeholder="Tell us something about yourself"
//                         rows="3"
//                         value={about}
//                         onChange={(e) => setAbout(e.target.value)}
//                       ></textarea>
//                     </div>
//                   </div>

//                   <div className="col-md-12">
//                     <div className="form-group">
//                       <input
//                         type="submit"
//                         value="Submit"
//                         className="btn btn-primary"
//                       />
//                       <div className="submitting" />
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="col-md-5 d-flex align-items-stretch">
//             <div
//               className="info-wrap w-100 p-5 img"
//               style={{ backgroundImage: "url(/assets/images/img.jpg)" }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth , db } from "../../Firebase";
import { doc , setDoc, Timestamp } from "firebase/firestore";

export default function RegisterNGO(){
    const[ name, setName]=useState("")
    const[ email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[contact,setContact]=useState("")
    const[licanceNo,setLicanceNo]=useState("")
    const[address,setAddress]=useState("")
    const[about,setAbout]=useState("")
    let nav=useNavigate();

    const handleForm=(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCred)=>{
          let userId=userCred.user.uid
          saveData(userId)
        })
        .catch((err)=>{
          toast.error(err.message)
        })
      }
    

      const saveData=async (userId)=>{
          try{
            let data={
              name:name, 
              email:email,
              contact:contact,
              userId:userId,
              userType:2, 
              status:true, 
              licanceNo:licanceNo,
              about:about,
              address:address,
              createdAt:Timestamp.now()
            }
            // console.log(data);
            //  setDoc(doc(db, collectionName, id), data)
            await setDoc(doc(db, "users",userId),data)
            toast.success("Register successfully!!")
             nav("/login");
          }
          catch(err){
            toast.error(err.message)
          }
        }
      

      // let nav=useNavigate();

      // const handleForm=(e)=>{
      //   e.preventDefault();
      //  // console.log("Hello User!!",e);
      //   if(name=="Himanshu"   && email=="admin@gmail.com"   && password=="2025"  && contact=="6283232604"){
      //     toast.success("Register Successfully!!");
      //     nav("/login");
      //   }
      //   else{
      //     toast.error("Invalid credentials");
      //   }
      // };

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
                    <Link to={"/"}>
                      Home <i className="ion-ios-arrow-forward" />
                    </Link>
                  </span>{""}
                  <span>
                    Register as NGO <i className="ion-ios-arrow-forward" />
                  </span>
                </p>
                <h1 className="mb-0 bread"> Register as NGO</h1>
              </div>
            </div>
          </div>
        </section>
       
    
            <div className="container my-5">
            
                    <div className="row no-gutters">
                      <div className="col-md-7">
                        <div className="contact-wrap w-100 p-md-5 p-4">
                          <h3 className="mb-4">Register as NGO</h3>
                          <form
                            method="POST"
                            id="contactForm"
                            name="contactForm"
                            className="contactForm"
                            onSubmit={handleForm}
                          >
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="email">
                                   Full Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Full Name"
                                    value={name}
                                     onChange={(e)=>{
                                    setName(e.target.value)
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="email">
                                    Email Address
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e)=>{
                                    setEmail(e.target.value)
                                    }}                                 
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="subject">
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=>{
                                    setPassword(e.target.value)
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="email">
                                    Contact
                                  </label>
                                  <input
                                    type="tel"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Contact"
                                    value={contact}
                                    // onChange={changeContact}
                                    onChange={(e)=>{
                                    setContact(e.target.value)
                                    }}
                                    minLength={10}
                                    maxLength={10}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="email">
                                   Licance No:
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Licance No"
                                    value={licanceNo}
                                    onChange={(e)=>{
                                    setLicanceNo(e.target.value)
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="email">
                                   About
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="About"
                                    value={name}
                                     onChange={(e)=>{
                                    setAbout(e.target.value)
                                    }}
                                  />
                                </div>
                              </div>
                             
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="email">
                                   Address
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Address"
                                    value={address}
                                     onChange={(e)=>{
                                    setAddress(e.target.value)
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="submit"
                                    defaultValue="Submit"
                                    className="btn btn-primary"
                                  />
                                  <div className="submitting" />
                                </div>
                              </div>
                            </div>
                          </form>
                          {/* <div>Already have an account? <Link to={"/login"}>Login Here</Link></div> */}

                        </div>
                      </div>
                      <div className="col-md-5 d-flex align-items-stretch">
                        <div
                          className="info-wrap w-100 p-5 img"
                          style={{ backgroundImage: "url(/assets/images/img.jpg)" }}
                        ></div>
                      </div>
                    </div>

            </div>

        </>
    )
}
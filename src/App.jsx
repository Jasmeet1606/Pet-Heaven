// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import About from "./components/pages/About"
// import Blog from "./Components/pages/Blog"
// import Contact from "./components/pages/Contact"
// import Home from "./Components/pages/Home"
// import Error from "./components/pages/Error"
// import Login from "./Components/auth/login"
// import Register from "./Components/Auth/Register"
// import Gallery from "./Components/pages/Gallery"
// import Services from "./Components/pages/Services"
// import { ToastContainer } from "react-toastify"
// import NgoReg from "./Components/auth/NgoReg"
// import Layout from "./Components/layout/layout"
// import AdminLayout from "./Components/Layout/AdminLayout"
// import AddBreed from "./Components/admin/breed/AddBreed"
// import NgoLayout from "./Components/Layout/NgoLayout"
// import AddPet from "./Components/Ngo/NgoPet/AddPet"
// import ManageBreed from "./Components/admin/breed/Managebreed"
// import ManagePets from "./Components/Ngo/NgoPet/ManagePets"
// import UpdateBreed from "./Components/admin/breed/UpdateBreed"
// import ManageUsers from "./Components/admin/users/ManageUsers"
// import AddNgo from "./Components/admin/Ngo/AddNgo"
// import Dashboard from "./Components/admin/pages/Dashboard"
// import Dogs from "./Components/Ngo/NgoPet/Dogs"
// import Cats from "./Components/Ngo/NgoPet/Cats"
// import PetDetails from "./Components/Ngo/NgoPet/PetDetails"
// import ManagePet from "./Components/admin/Pets/ManagePet"
// import AdminAdoptions from "./Components/admin/pages/Adoption"
// import WatchPets from "./Components/Pages/WatchPets"
// // import ViewPets from "./Components/admin/Pets/ViewPets"
// import AddPets from "./Components/admin/Pets/AddPets"

// import ManageNgo from "./Components/admin/Ngo/ManageNgo"
// import ViewPet from "./Components/Ngo/NgoPet/ViewPet"
// import PetListing from "./Components/Ngo/NgoPet/PetListing"
// import Updateusers from "./Components/admin/users/UpdateUsers"
// import Updatepet from "./Components/admin/Pets/UpdatePets"
// import ReqForm from "./Components/Pages/ReqForm"
// import ManageAdoption from "./Components/Ngo/ManageAdoption"
// import ViewAdoption from "./Components/Pages/ViewAdoption"
// import ViewPets from "./Components/Pages/ViewPets"
// import ViewBreeds from "./Components/Pages/ViewBreeds"
// import ViewNGO from "./Components/Pages/ViewNgo"
// import DashboardNgo from "./Components/Ngo/Pages/Dashboard"

// function App() {

//   return (

//     <>
//       <BrowserRouter>
//         <Routes>

//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="about" element={<About />} />
//             <Route path="blog" element={<Blog />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="login" element={<Login />} />
//             <Route path="register" element={<Register />} />
//             <Route path="ngoReg" element={<NgoReg />} />
//             <Route path="gallery" element={<Gallery />} />
//             <Route path="watchPets" element={<WatchPets />} />
//             <Route path="services" element={<Services />} />
//             <Route path="ReqForm/:petId/:ngoId" element={<ReqForm />} />
//             <Route path="/myadoption" element={<ViewAdoption />} />
//               <Route path="ViewPets" element={< ViewPets/>} />
//               <Route path="ViewBreeds" element={< ViewBreeds/>} />
//               <Route path="ViewNgo" element={< ViewNGO/>} />
//           </Route>

//           {/* admin routes */}
//           <Route path="/admin" element={<AdminLayout />}>
//             <Route index element={<Dashboard />} />
//             <Route path="breed/add" element={<AddBreed />} />
//             {/* <Route path="pets/pets" element={<ViewPet />} /> */}
//             <Route path="breed/manage" element={<ManageBreed />} />
//             <Route path="breed/edit/:id" element={<UpdateBreed />} />
//             <Route path="/admin/user/manage" element={<ManageUsers />} />
//             <Route path="/admin/pets/manage" element={<ManagePet />} />
//             <Route path="/admin/pages/adoption" element={<AdminAdoptions />} />
//             <Route path="/admin/ngo/add" element={<AddNgo />} />
//             <Route path="/admin/ngo/manage" element={<ManageNgo />} />
//             <Route path="/admin/pets/add" element={<AddPets />} />

//             <Route path="users/edit/:id" element={<Updateusers />} />
//             <Route path="Pets/edit/:id" element={<Updatepet />} />
//           </Route>


//           {/* ngo routes */}
//           <Route path="/ngo" element={<NgoLayout />}>
//            <Route index element={<DashboardNgo />} />
//             <Route path="pet/add" element={<AddPet />} />
//             <Route path="pet/manage" element={<ManagePets />} />
//             <Route path="pet/cats" element={<Cats />} />
//             <Route path="pet/dogs" element={<Dogs />} />
//             <Route path="pet/view" element={<ViewPet />} />
//             <Route path="pet/listing" element={<PetListing />} />
//             <Route path="pet/details" element={<PetDetails />} />
//             <Route path="adoption/manage" element={<ManageAdoption />} />
//           </Route>

//           <Route path="/*" element={<Error />} />

//         </Routes>
//       </BrowserRouter>
//       <ToastContainer />
//     </>
//   )
// }

// export default App
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./Components/Page/About"
import Blog  from"./Components/Page/Blog"
import Contact from"./Components/Page/Contact"
import Home from"./Components/Page/Home"
import Error from "./Components/Page/Error"
import Layout from "./Components/Layouts/Layout"
import Login from "./Components/Auth/Login"
import Register from "./Components/Auth/Register"
import RegisterNGO from "./Components/Auth/RegisterNGO"
import Services from "./Components/Page/Services"
import { ToastContainer } from "react-toastify"
import AdminLayout from "./Components/Layouts/AdminLayout"
import AddBreed from "./Components/Admin/Breeds/AddBreed"
import NGOLayout from "./Components/Layouts/NGOLayout"
import PetsListing from "./Components/NGO/Pets/PetsListing"
import AddNgo from "./Components/admin/Ngo/AddNGO"
import AdoptionRequest from "./Components/Page/AdoptionRequest"
import ManageBreed from "./Components/Admin/Breeds/ManageBreed"
import ManageNGO from "./Components/admin/Ngo/ManageNGO"
import ManageUsers from "./Components/Admin/Users/ManageUsers"
import ViewAdoptionRequest from "./Components/Admin/AdoptionRequest/ViewAdoptionRequest"
import ManagePetListing from "./Components/Admin/PetListing/ManagePetListing"
import ManagePetsListing from "./Components/NGO/Pets/ManagePetsListing"

import ViewBreeds from "./Components/Page/ViewBreed"
import ViewNGO from "./Components/Page/ViewNGO"
import ViewPets from "./Components/Page/ViewPets"
import ManageAdoptionRequest from "./Components/NGO/AdoptionRequests/ManageAdoptionRequest"
import UpdateBreed from "./Components/Admin/Breeds/UpdateBreed"
import UpdateNgo from "./Components/admin/Ngo/UpdateNGO"
import UpdatePetsListing from "./Components/Admin/PetListing/UpdatePetListing"
import UpdateUser from "./Components/Admin/Users/UpdateUsers"
import UpdatePetsListings from "./Components/NGO/Pets/UpdatePetListings"
import UpdateAdoptionRequest from "./Components/NGO/AdoptionRequests/UpdateAdoptionRequest"
import Dashboard from "./Components/Admin/Pages/Dashboard"
import DashboardNgo from "./Components/NGO/Pages/Dashboard"
import Gallery from "./Components/Page/Gallery"
import ViewAdoptionRequests from "./Components/NGO/AdoptionRequests/ViewAdoptionRequests"
// import About from "./Componentss/Page/About"
function App() {
  return (
    //
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="gallery" element={<Gallery/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="adoption" element={<AdoptionRequest/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="registerNGO" element={<RegisterNGO/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="viewBreed" element={<ViewBreeds/>}/>
            <Route path="viewNGO" element={<ViewNGO/>}/>
            <Route path="viewPets" element={<ViewPets/>}/>

          </Route>

          {/* admin routes */}
          <Route path="/admin" element={<AdminLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="breed/add" element={<AddBreed/>}/>
            <Route path="ngo/add" element={<AddNgo/>}/>
            <Route path="breed/manage" element={<ManageBreed />}/>
            <Route path="breed/edit/:id" element={<UpdateBreed />}/>
            <Route path="ngo/manage" element={<ManageNGO />}/>
            <Route path="ngo/edit/:id" element={<UpdateNgo />}/>
            <Route path="users/manage" element={<ManageUsers />}/>
            <Route path="user/edit/:id" element={<UpdateUser />}/>
            <Route path="adoptionRequest/view" element={<ViewAdoptionRequest />}/>
            <Route path="petListing/manage" element={<ManagePetListing />}/>
            <Route path="petListing/edit/:id" element={<UpdatePetsListing />}/>


             
          </Route>

          {/* NGO routes */}
           <Route path="/NGO" element={<NGOLayout/>}>
            <Route index element={<DashboardNgo/>}/>
            <Route path="pet/add" element={<PetsListing/>}/>
            <Route path="pets/manage" element={<ManagePetsListing/>}/>
            <Route path="petListings/edit/:id" element={<UpdatePetsListings />}/>
            <Route path="adoptionRequests/view" element={<ViewAdoptionRequests/>}/>
            <Route path="adoptionRequest/Manage" element={<ManageAdoptionRequest/>}/>
            <Route path="adoptionRequest/edit/:id" element={<UpdateAdoptionRequest/>}/>

            {/* <Route path="registerNGO" element={<RegisterNGO/>}/> */}
          </Route>

          

          <Route path="/*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  )
}

export default App

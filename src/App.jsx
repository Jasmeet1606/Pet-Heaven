
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/Page/About"
import Blog  from"./components/Page/Blog"
import Contact from"./components/Page/Contact"
import Home from"./components/Page/Home"
import Error from "./components/Page/Error"
import Layout from "./components/Layouts/Layout"
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import RegisterNGO from "./components/Auth/RegisterNGO"
import Services from "./components/Page/Services"
import { ToastContainer } from "react-toastify"
import AdminLayout from "./components/Layouts/AdminLayout"
import AddBreed from "./components/Admin/Breeds/AddBreed"
import NGOLayout from "./components/Layouts/NGOLayout"
import AddNgo from "./components/admin/Ngo/AddNGO"
import ManageBreed from "./components/Admin/Breeds/ManageBreed"
import ManageNGO from "./components/admin/Ngo/ManageNGO"
import ManageUsers from "./components/Admin/Users/ManageUsers"
import ViewAdoptionRequest from "./components/Admin/AdoptionRequest/ViewAdoptionRequest"
import ManagePetListing from "./components/Admin/PetListing/ManagePetListing"
import ManagePetsListing from "./components/NGO/Pets/ManagePetsListing"
import ViewBreeds from "./components/Page/ViewBreed"
import ViewNGO from "./components/Page/ViewNGO"
import ViewPets from "./components/Page/ViewPets"
// import ManageAdoptionRequest from "./components/NGO/AdoptionRequests/ManageAdoptionRequest"
import UpdateBreed from "./components/Admin/Breeds/UpdateBreed"
import UpdateNgo from "./components/admin/Ngo/UpdateNGO"
import UpdatePetsListing from "./components/Admin/PetListing/UpdatePetListing"
import UpdateUser from "./components/Admin/Users/UpdateUsers"
import UpdatePetsListings from "./components/NGO/Pets/UpdatePetListings"

import Dashboard from "./components/Admin/Pages/Dashboard"
import DashboardNgo from "./components/NGO/Pages/Dashboard"
import Gallery from "./components/Page/Gallery"
import ViewAdoptionRequests from "./components/NGO/AdoptionRequests/ViewAdoptionRequests"

import ViewAdoption from "./components/Page/ViewAdoption"
import AdoptionRequest from "./Components/Page/AdoptionRequest"
import UpdateAdoptionRequest from "./components/ngo/AdoptionRequests/UpdateAdoptionRequest"
import ManageAdoptionRequest from "./Components/NGO/AdoptionRequests/ManageAdoptionRequest"
import PetsListing from "./Components/Ngo/Pets/PetsListing"


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
            <Route path="adoption/:petId/:ngoId" element={<AdoptionRequest/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="registerNGO" element={<RegisterNGO/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="viewBreed" element={<ViewBreeds/>}/>
            <Route path="viewNGO" element={<ViewNGO/>}/>
            <Route path="viewPets" element={<ViewPets/>}/>
              <Route path="viewAdoption" element={<ViewAdoption/>}/>

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


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
// import AdoptionRequest from "./Components/Page/AdoptionRequest"
import ViewAdoption from "./Components/Page/ViewAdoption"
import AdoptionRequest from "./Components/Page/AdoptionRequest"

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

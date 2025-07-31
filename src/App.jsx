import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/pages/About"
import Blog from "./Components/pages/Blog"
import Contact from "./components/pages/Contact"
import Home from "./Components/pages/Home"
import Error from "./components/pages/Error"
import Login from "./Components/auth/login"
import Register from "./Components/Auth/Register"
import Gallery from "./Components/pages/Gallery"
import Services from "./Components/pages/Services"
import { ToastContainer } from "react-toastify"
import NgoReg from "./Components/auth/NgoReg"
import Layout from "./Components/layout/layout"
import AdminLayout from "./Components/Layout/AdminLayout"
import AddBreed from "./Components/admin/breed/AddBreed"
import NgoLayout from "./Components/Layout/NgoLayout"
import AddPet from "./Components/Ngo/NgoPet/AddPet"
import ManageBreed from "./Components/admin/breed/Managebreed"
import ManagePets from "./Components/Ngo/NgoPet/ManagePets"
import UpdateBreed from "./Components/admin/breed/UpdateBreed"
import ManageUsers from "./Components/admin/users/ManageUsers"
import AddNgo from "./Components/admin/Ngo/AddNgo"
import Dashboard from "./Components/admin/pages/Dashboard"
import Dogs from "./Components/Ngo/NgoPet/Dogs"
import Cats from "./Components/Ngo/NgoPet/Cats"
import PetDetails from "./Components/Ngo/NgoPet/PetDetails"
import ManagePet from "./Components/admin/Pets/ManagePet"
import AdminAdoptions from "./Components/admin/pages/Adoption"
import WatchPets from "./Components/Pages/WatchPets"
// import ViewPets from "./Components/admin/Pets/ViewPets"
import AddPets from "./Components/admin/Pets/AddPets"

import ManageNgo from "./Components/admin/Ngo/ManageNgo"
import ViewPet from "./Components/Ngo/NgoPet/ViewPet"
import PetListing from "./Components/Ngo/NgoPet/PetListing"
import Updateusers from "./Components/admin/users/UpdateUsers"
import Updatepet from "./Components/admin/Pets/UpdatePets"
import ReqForm from "./Components/Pages/ReqForm"
import ManageAdoption from "./Components/Ngo/ManageAdoption"
import ViewAdoption from "./Components/Pages/ViewAdoption"
import ViewPets from "./Components/Pages/ViewPets"
import ViewBreeds from "./Components/Pages/ViewBreeds"
import ViewNGO from "./Components/Pages/ViewNgo"
import DashboardNgo from "./Components/Ngo/Pages/Dashboard"

function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="ngoReg" element={<NgoReg />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="watchPets" element={<WatchPets />} />
            <Route path="services" element={<Services />} />
            <Route path="ReqForm/:petId/:ngoId" element={<ReqForm />} />
            <Route path="/myadoption" element={<ViewAdoption />} />
              <Route path="ViewPets" element={< ViewPets/>} />
              <Route path="ViewBreeds" element={< ViewBreeds/>} />
              <Route path="ViewNgo" element={< ViewNGO/>} />
          </Route>

          {/* admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="breed/add" element={<AddBreed />} />
            {/* <Route path="pets/pets" element={<ViewPet />} /> */}
            <Route path="breed/manage" element={<ManageBreed />} />
            <Route path="breed/edit/:id" element={<UpdateBreed />} />
            <Route path="/admin/user/manage" element={<ManageUsers />} />
            <Route path="/admin/pets/manage" element={<ManagePet />} />
            <Route path="/admin/pages/adoption" element={<AdminAdoptions />} />
            <Route path="/admin/ngo/add" element={<AddNgo />} />
            <Route path="/admin/ngo/manage" element={<ManageNgo />} />
            <Route path="/admin/pets/add" element={<AddPets />} />

            <Route path="users/edit/:id" element={<Updateusers />} />
            <Route path="Pets/edit/:id" element={<Updatepet />} />
          </Route>


          {/* ngo routes */}
          <Route path="/ngo" element={<NgoLayout />}>
           <Route index element={<DashboardNgo />} />
            <Route path="pet/add" element={<AddPet />} />
            <Route path="pet/manage" element={<ManagePets />} />
            <Route path="pet/cats" element={<Cats />} />
            <Route path="pet/dogs" element={<Dogs />} />
            <Route path="pet/view" element={<ViewPet />} />
            <Route path="pet/listing" element={<PetListing />} />
            <Route path="pet/details" element={<PetDetails />} />
            <Route path="adoption/manage" element={<ManageAdoption />} />
          </Route>

          <Route path="/*" element={<Error />} />

        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App

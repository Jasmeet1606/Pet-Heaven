
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Swal from "sweetalert2"
export default function AdminNavbar(){
    let isLogin=sessionStorage.getItem("isLogin")
    const nav=useNavigate()
    ///sweetalert2
    const logout=()=>{

        Swal.fire({
        title: "Are you sure you want to logout?",
        // text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout!"
        }).then((result) => {
        if (result.isConfirmed) {
            sessionStorage.clear()
            nav("/login")
            Swal.fire({
            title: "Logout!",
            text: "Logout successfully.",
            icon: "success"
            });
        }
        });
    }
    return(
        <>
        <div className="wrap">
            <div className="container">
             <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                <p className="mb-0 phone pl-md-2">
                    <a href="#" className="mr-2">
                    <span className="fa fa-phone mr-1" /> +91 9876543202
                    </a>
                    <a href="mailto:jasmeetk.saini16@gmail.com" target="_blank">
                    <span className="fa fa-paper-plane mr-1" /> jasmeetk.saini16@gmail.com
                    </a>
                </p>
                </div>
                <div className="col-md-6 d-flex justify-content-md-end">
                <div className="social-media">
                    <p className="mb-0 d-flex">
                    <a
                        href="mailto:jasmeetk.saini16@gmail.com"
                        className="d-flex align-items-center justify-content-center"
                    >
                        <span className="fa fa-envelope">
                        <i className="sr-only">Email</i>
                        </span>
                    </a>
                    <a
                        href="https://github.com/Jasmeet1606"
                        className="d-flex align-items-center justify-content-center"
                    >
                        <span className="bi bi-github">
                        <i className="sr-only">Github</i>
                        </span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jasmeet-kaur-30bb56303/" target="_blank"
                        className="d-flex align-items-center justify-content-center"
                    >
                        <span className="bi bi-linkedin">
                        <i className="sr-only">Linkedin</i>
                        </span>
                    </a>
                 
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        <nav
            className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
            id="ftco-navbar"
        >
            <div className="container">
            <a className="navbar-brand" href="index.html">
                <span className="flaticon-pawprint-1 mr-2" />
                Pet Heaven
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#ftco-nav"
                aria-controls="ftco-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="fa fa-bars" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/admin" className="nav-link">
                    Home
                    </Link>
                </li>
             
               
               <li class="dropdown nav-item">
                    <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Breed
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <Link class="dropdown-item" to={"/admin/breed/add"}>Add</Link>
                        <Link class="dropdown-item" to={"/admin/breed/manage"}>Manage</Link>
                    </div>
                </li>
              
               <li class="dropdown nav-item">
                    <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pets
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                         <Link class="dropdown-item" to={"/admin/pets/add"}>Add</Link>
                        <Link class="dropdown-item" to={"/admin/pets/manage"}>Manage</Link>
                         <Link class="dropdown-item" to={"/admin/pets/pets"}>View</Link>
                    </div>
                </li>

                  <li class="dropdown nav-item">
                    <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        NGO
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <Link class="dropdown-item" to={"/admin/ngo/add"}>Add</Link>
                        <Link class="dropdown-item" to={"/admin/ngo/manage"}>Manage</Link>
                    </div>
                </li>

                <li class="dropdown nav-item">
                    <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pages
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">   
                        <Link class="dropdown-item" to={"/admin/user/manage"}>Manage users </Link>
                         <Link class="dropdown-item" to={"/admin/users/ManagePayment"}>Manage Payment</Link>
                          <Link class="dropdown-item" to={"/admin/pages/adoption"}>Adoption</Link>
                    </div>
                </li>

              
                {
                    isLogin?
                    <li className="nav-item">
                        <Link to={"#"} onClick={logout} className="nav-link">
                        Logout
                        </Link>
                    </li>
                    :
                    <li className="nav-item">
                        <Link to={"/login"} className="nav-link">
                        Login
                        </Link>
                    </li>
                }
                </ul>
            </div>
            </div>
        </nav>
        {/* END nav */}
        </>
    )
}
import { Link, useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Swal from "sweetalert2"
export default function Header() {
    const { pathname } = useLocation()
    let isLogin = sessionStorage.getItem("isLogin")
    let name = sessionStorage.getItem("name")
    const nav = useNavigate()
    ///sweetalert2
    const logout = () => {

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
    return (
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
                                            <i className="sr-only">email</i>
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

                {/* <div className="container">
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
                            <li className={`nav-item ${pathname == "/" && "active"}`}>
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className={`nav-item ${pathname == "/about" && "active"}`}>
                                <Link to={"/about"} className="nav-link">
                                    About
                                </Link>
                            </li>

                            <li className={`nav-item ${pathname == "/gallery" && "active"}`}>
                                <Link to={"/gallery"} className="nav-link">
                                    Gallery
                                </Link>
                            </li>
                            <li className={`nav-item ${pathname == "/blog" && "active"}`}>
                                <Link to={"/blog"} className="nav-link">
                                    Blog
                                </Link>
                            </li>
                            <li className={`nav-item ${pathname == "/contact" && "active"}`}>
                                <Link to={"/contact"} className="nav-link">
                                    Contact
                                </Link>
                                 </li>

                               <li className={`nav-item ${pathname == "/watchPets" && "active"}`}>
                                <Link to={"/watchPets"} className="nav-link">
                                    Adopt Pet
                                </Link>
                            </li> 
                             <li className={`nav-item ${pathname == "/ReqForm" && "active"}`}>
                                <Link to={"/ReqForm"} className="nav-link">
                                     Adoption form
                                </Link>
                            </li> 
                                

                                {
                                    isLogin ?
                                        <li className={`nav-item ${pathname == "/login" && "active"}`}>
                                            <Link to={"#"} onClick={logout} className="nav-link">
                                                Logout {name}
                                            </Link>
                                        </li>
                                        :
                                        <li className={`nav-item ${pathname == "/login" && "active"}`}>
                                            <Link to={"/login"} className="nav-link">
                                                Login
                                            </Link>
                                        </li>

                                }
                             
                           

                        </ul>
                    </div>
                </div> */}
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
          <li className="nav-item ">
                      <Link to="/" className="nav-link">
                        HOME
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/about"} className="nav-link">
                        ABOUT
                      </Link>
                    </li>

                   
                    {/* <li className="nav-item">
                      <Link to={"/services"} className="nav-link">
                        Services
                      </Link>
                    </li> */}

                     {/* <li className="nav-item">
                      <Link to={"/adoption"} className="nav-link">
                        ADOPTION REQUESTS
                      </Link>
                    </li> */}

                      
                   
                    <li className="nav-item">
                      <Link to={"/viewBreed"} className="nav-link">
                        BREEDS
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to={"/viewNGO"} className="nav-link">
                        NGO
                      </Link>
                    </li>

                    {/* <li className="nav-item">
                      <Link to={"/contact"} className="nav-link">
                        Contact
                      </Link>
                    </li> */}

                    <li className="nav-item">
                      <Link to={"/viewPets"} className="nav-link">
                        PETS
                      </Link>
                    </li>

                    {
                      isLogin?
                      <>
                      <li className="dropdown nav-item">
                                            <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                           Adoptions
                                        </a>
                    
                                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                           
                                            <Link to="/viewAdoption" className="dropdown-item">View</Link>
                                         </div>
                                        </li>
                      <li className="nav-item">
                        <Link to={"#"} onClick={logout} className="nav-link">
                          LOGOUT {name}
                        </Link>
                      </li>
                      </>
                      :
                      <li className="nav-item">
                        <Link to={"/login"} className="nav-link">
                          LOGIN
                        </Link>
                      </li>
                    }
                                  

                  <li className="nav-item dropdown">
                   <nav style={{ width:"100%"}}>
                    <div
                        style={{
                          display:"flex",
                          justifyContent:"center",
                          alignItems:"center",
                          height:"17px ",
                          width: "100%",
                          marginTop:"10px"
                        }}
                    />
                      <button
                        className="nav-link dropdown-toggle btn btn-primary text-dark" 
                          
                        id="navbarDropdown" 
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false"
                    
                      >
                        REGISTER
                      </button>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/Register" className="dropdown-item">REGISTER AS USER</Link>
                        <Link to="/RegisterNGO" className="dropdown-item">REGISTER AS NGO</Link>
                     </div>
                     </nav>
                    </li>

                      


     </ul>
      </div>
    </div>
            </nav>
            {/* END nav */}
        </>
    )
}
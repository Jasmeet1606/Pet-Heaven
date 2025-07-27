// import { Link } from "react-router-dom"
// export default function AdminFooter() {
//   return (

//     <>
//       <footer className="footer">
       
       
//           <div className="row ">
//             <div className="col-md-12 text-center">
//               <p className="copyright">
//                 Copyright © All rights reserved | Created with{" "}
//                 <i className="fa fa-heart" aria-hidden="true" /> by{" "}
//                 <a href="mailto:jasmeetk.saini16@gmail.com" target="_blank">
//                   Jasmeet Kaur
//                 </a>
//               </p>
//             </div>
//           </div>
       
//       </footer>
//     </>
//   )
// }
import { Link } from "react-router-dom";

export default function AdminFooter() {
  return (
    <footer className="admin-footer bg-dark text-white py-3 mt-auto shadow-sm">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <p className="mb-1">
              © 2025 | Admin Dashboard — Created with{" "}
              <i className="fa fa-heart " aria-hidden="true" /> by{" "}
              <a
                href="mailto:jasmeetk.saini16@gmail.com"
                target="_blank"
                
                className=""
              >
                Jasmeet Kaur
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


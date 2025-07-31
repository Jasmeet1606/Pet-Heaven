import { Link } from "react-router-dom";

export default function Error(){
    return(
        <>
            <div className="text-center">
                <img src="/assets/images/images.jpg" className="d-block mx-auto " style={{width:"500px"}}/>
                <h1>404</h1>
                <h1>Page Not found!!!</h1>
                <Link to="/">Back to HOME!!</Link>
            </div>
        </>
    )
}
import { FcGoogle } from "react-icons/fc";
import { SiMicrosoft } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Sponsors = () => {
    return (
        <div className="container-sponsor">
             <div className="container-title">
                <h1>Our sponsors</h1>
            </div>
            <div className="content-img">
               <FcGoogle className="sponsor-icon"/>
               <SiNike className="sponsor-icon"/>
               <FaReact className="sponsor-icon"/>
               <SiMicrosoft className="sponsor-icon"/>
            </div>
        </div>
    )
}
export default Sponsors;
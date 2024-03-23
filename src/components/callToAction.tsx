import { IoArrowForwardOutline } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";
import { TiVendorAndroid } from "react-icons/ti";

const CalltoAction = () => {
    return (
        <div className="container-call-to-action">
            <h1>Try Whitepace today</h1>
            <p>Get started for free.
                Add your whole team as your needs grow.</p>
            
            <button className="bt-try"><a href="#">Try Taskey Free <IoArrowForwardOutline/></a></button>

            <div className="it-company-icon">
                <FaApple className="icon"/>
                <TiVendorMicrosoft className="icon"/>
                <TiVendorAndroid className="icon"/>
            </div>
            <p>On a big team? Contact sales</p>

        </div>
    )
}
export default CalltoAction;
import { CiCircleCheck } from "react-icons/ci";
import "../style/App.css";
const Plans = () => {
    return (
        <div className="container-price-table">
            <div className="container-title">
                <h1>Choose Your Plan</h1>
            </div>
            <div className="container-description">
                <p>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
            </div>
            <div className="column1">
                <h3>Free</h3>
                <h1>$0</h1>
                <p>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <button><a href="#">Let's Go</a></button>
            </div>
            <div className="column2">
                <h3>Organization</h3>
                <h1>$11.99</h1>
                <p>Keep home and family on track</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <button><a href="#">Let's Go</a></button>

            </div>
            <div className="column3">
                <h3>Personal</h3>
                <h1>$49.99</h1>
                <p>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <p><span><CiCircleCheck/></span>Capture ideas and find them quickly</p>
                <button><a href="#">Let's Go</a></button>

            </div>
        </div>
    )
}
export default Plans;
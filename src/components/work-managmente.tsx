
import { IoArrowForwardOutline } from "react-icons/io5";

const WorkManagmente = () => {
    return (
        <div className="container-content-work">
            <div className="content-1">
                <h1>Project Management</h1>
                <p>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                <button><a href="#">Get Started</a></button>
            </div>
            <div className="container-img-1">
                <img src='' alt="img" />
            </div>
            <div className="container-img-2">
                <img src='' alt="img" />
            </div>
            <div className="content-2">
                <h1>Work together</h1>
                <p>With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
                <button><a href="#">Try it now <IoArrowForwardOutline/></a></button>
            </div>

        </div>
    )
}
export default WorkManagmente;

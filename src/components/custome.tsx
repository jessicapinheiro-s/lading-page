import { IoArrowForwardOutline } from "react-icons/io5";
const Custume = () => {
    return (
        <div className="container-custom">
             <div className="container-img">
                <img src='' alt="img" />
            </div>
            <div className="content">
                <h1>Customise it to your needs</h1>
                <p>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                <button><a href="#">Let's Go <IoArrowForwardOutline/></a></button>

            </div>
        </div>
    )
}
export default Custume;
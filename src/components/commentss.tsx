import { FcBusinesswoman } from "react-icons/fc";

const Comments = () => {
    return (
        <div className="container-coments">
            <div className="text-container">
                <h1>What Our Clients Says</h1>
            </div>

            <div className="container-img-1">
                <p>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
                <hr />
                <div className="info-user">
                    <FcBusinesswoman className="icon-user"/>
                    <h3>Oberon Shaw, MCH</h3>
                    <p>Head of Talent Acquisition, North America</p>
                </div>

            </div>
            <div className="container-img-2">
                <p>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
                <hr />
                <div className="info-user">
                    <FcBusinesswoman className="icon-user" />
                    <h3>Oberon Shaw, MCH</h3>
                    <p>Head of Talent Acquisition, North America</p>
                </div>
            </div>
            <div className="container-img-3">
                <p>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
                <hr />
                <div className="info-user">
                    <FcBusinesswoman className="icon-user"/>
                    <h3>Oberon Shaw, MCH</h3>
                    <p>Head of Talent Acquisition, North America</p>
                </div>
            </div>


        </div>
    )
}
export default Comments;

import MinhaImagem from '../imgs/2002.i515.001_modern_students_flat_icons-13-removebg-preview.png';

const ContainerImg = () => {
    return (
        <div className="container-content">
            <div className="content">
                <h1>Get More Done with whitepace</h1>
                <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                <button><a href="#">Try Whitespace Free</a></button>

            </div>
            <div className="container-img">
                <img src={MinhaImagem} alt="img" />
            </div>
        </div>
    )
}
export default ContainerImg;
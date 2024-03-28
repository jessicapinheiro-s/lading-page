import React from 'react';
import { IoArrowForwardOutline } from "react-icons/io5";


interface PropsComponent {
    titulo?: string;
    texto?:string;
    imgCaminho?:string;
    textoBotao?:string;
    classeBotao?:string;
    classeDivContent?:string;
    classeDivImg?:string;
    classeContainer?:string;
    inverter?: string;
}

const ComponenteBase: React.FC<{PropsComponent: PropsComponent}> = ({PropsComponent }) => {
    return (
        <div className={`${PropsComponent.classeContainer} ${PropsComponent.inverter === 'Sim' ?  'inverter'  : '' }`}>
            <div className={PropsComponent.classeDivContent}>
                <h1>{PropsComponent.titulo}</h1>
                <p >{PropsComponent.texto}</p>
                <button className={PropsComponent.classeBotao}><a href="#">{PropsComponent.textoBotao}<IoArrowForwardOutline/></a></button>
            </div>
            <div className={PropsComponent.classeDivImg}>
                <img src={PropsComponent.imgCaminho} alt="img" />
            </div>
        </div>
    )
}
export default ComponenteBase;



import React from 'react';
import ComponenteBase from '../components/componente-base';
import Plans from '../components/plans';
import MessageBanner from '../components/message-banner';
import Sponsors from '../components/sponsors';
import Comments from '../components/commentss';
interface PropsComponent {
    titulo: string;
    texto?: string;
    imgCaminho?: string;
    textoBotao?: string;
    classeBotao?: string;
    classeDivContent?: string;
    classeDivImg?: string;
    classeContainer?: string;
    inverter?: string;
}

export default function LadingPage() {
    const arrayInfoContent: PropsComponent[] = [
        {
            titulo: "Get More Done with whitepace",
            texto: "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks",
            textoBotao: "Try Whitespace Free",
            classeDivContent: "content",
            classeDivImg: "container-img",
            classeContainer: "container-content",
            inverter: 'Não'
        },
        {
            titulo: "Project Management",
            texto: "Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.",
            textoBotao: "Get Started",
            classeDivContent: "content-1",
            classeDivImg: "container-img-1",
            classeContainer: "container-content-work",
            inverter: 'Não'
        },
        {
            titulo: "Work together",
            texto: "With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.",
            textoBotao: "Try it now",
            classeDivContent: "content-2",
            classeDivImg: "container-img-2",
            classeContainer: "container-content-work",
            inverter: 'Sim'
        },
        {
            titulo: "Use as Extension",
            texto: "Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.",
            textoBotao: "Let’s Go",
            classeDivContent: "content-1",
            classeDivImg: "container-img-1",
            classeContainer: "container-asextension",
            inverter: 'Não'
        },
        {
            titulo: "Customise it to your needs",
            texto: "Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.",
            textoBotao: "Let’s Go",
            classeDivContent: "content",
            classeDivImg: "container-img",
            classeContainer: "container-custom",
            inverter: 'Sim'
        },
        {titulo: 'price'},
        {titulo: 'banner-message'},
        {titulo: 'sponsosr'},
        {titulo: 'comments'},
        {
            titulo: "Work with Your Favorite Apps Using whitepace",
            texto: "Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.",
            textoBotao: "Read more",
            classeDivContent: "content",
            classeDivImg: "container-img",
            classeContainer: "container-custom",
            inverter: 'Sim'
        }
        
        
    ]
arrayInfoContent.map(f => console.log(f.titulo));
    return (
        <div>
            {
                arrayInfoContent.map(f => {
                    if(f.titulo === 'price'){
                        return <Plans/>
                    }else if(f.titulo === 'banner-message'){
                        return <MessageBanner/>
                    }else if (f.titulo === 'sponsosr') {
                        return <Sponsors/>
                    } else if(f.titulo === 'comments'){
                        return <Comments/>
                    }else{
                        return <ComponenteBase PropsComponent={f} key={f.titulo} />
                    }
                })
            }
        </div>
    )

}


import React from 'react';
import Service from "./Service";
import branding from "./../../assets/images/services/branding.png";
import marketing from "./../../assets/images/services/marketing.png";
import development from "./../../assets/images/services/development.png";
import './ServicesStyle.css'

const Services = (props) => {
    const serviceList =[
        {
            title: "Branding",
            desc: " website or app is the same as your digital company built\n" +
                "from graphics and software.\n" +
                "\n" +
                "In focal X agency, we provide:\n" +
                "Case Study.\n" +
                "UX research.\n" +
                "Ui/Ux design.\n" +
                "Hosting Services.\n" +
                "App Development.\n" +
                "Web development.\n" +
                "Research & Prototyping.\n" +
                "consumer behavior study.\n" +
                "Conversion Rate Optimization",
            img: branding,
            cName:"left"
        },
        {
            title: "Marketing",
            desc: " Talk to your customers and tell them you and your company's\n" +
                "story through us the way you want.\n" +
                "Let us plan the content that will bring your audience closer to you.\n" +
                "\n" +
                "In our marketing agency, we provide:\n" +
                "E-mail marketing.\n" +
                "Affiliate marketing.\n" +
                "Influencer marketing.\n" +
                "Market research and Analysis.\n" +
                "App store optimization ( ASO ).\n" +
                "Search engine Marketing ( SEM ).\n" +
                "Search engine optimization ( SEO ).\n" +
                "Social media marketing & campaigns. ",
            img: marketing,
            cName:"right"
        },
        {
            title: "Web/App Development",
            desc: " We believe that a successful business requires successful partners\n" +
                "and successful partnerships, Based on our belief in work and\n" +
                "sustainable development goal No. 17,\n" +
                "\n" +
                "whether you:\n" +
                "Huge company.\n" +
                "Start-up company.\n" +
                "Creative design agency.\n" +
                "Digital marketing agency.\n" +
                "You have small or large company.\n" +
                "\n" +
                "We are here to empower you,\n" +
                "you are welcome to join\n" +
                "our Partner Program. ",
            img: development,
            cName:"left"
        }
    ];


    return (
        <div className='services'>
            <div className="details">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
            <div className="content">
                <Service servicesList={serviceList}/>
            </div>
        </div>
    );
};

export default Services;

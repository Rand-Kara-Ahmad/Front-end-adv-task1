import './HeroStyle.css'
const Hero = (props) => {
    return (
        <div className='hero'>
            <h1>{props.firstTitle}</h1>
            <h2>{props.secTitle}</h2>
            <p>{props.desc}</p>
            <button>{props.button}</button>
        </div>
    );
};

export default Hero;

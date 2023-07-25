import './GetStartedStyle.css'
const GetStarted = (props) => {
    return (
        <div className="get-started">
            <div className="box">
                <p>{props.p}<br></br><span>{props.span}</span></p>
                <button>{props.button}</button>
            </div>
        </div>
    );
};

export default GetStarted;

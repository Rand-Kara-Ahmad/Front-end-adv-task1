import './ServiceStyle.css';

const Service = (props) => {
    return (
        <div className='service-section'>
            {props.servicesList.map((item) => {
                return (
                    <div className={"service "+ item.cName}>
                        <div className="deails">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                        <div className="image">
                            <img src={item.img} alt={item.title + " service image"}/>
                        </div>
                    </div>)
            })}
        </div>
    );
};

export default Service;

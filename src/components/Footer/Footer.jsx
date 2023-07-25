import './FooterStyle.css';

const Footer = (data) => {
    return (
        <footer className="footer">
            <div>
                <img className='logo' src={data.logo} alt=""/>
                <label className='brand'>{data.BrandName}</label>
            </div>
            <ul className="items">
                {data.items.map((item) => {
                    return <li className="item">{item}</li>
                })}
            </ul>
            <ul className="social">
                {data.socialIcon.map((logo) => {
                    return <li className="social"><img src={logo} alt=""/></li>
                })}
            </ul>
            <span>© copyright 2021 tagTech starter, powered with ❤ by <a href="">Rand Kara Ahmad</a></span>
        </footer>
    );
};

export default Footer;

import './NavBarStyle.css';
import {itms} from './items'

const NavBar = (props) => {
    return (
        <nav>
            <div >
                <img className='logo' src={props.logo} alt=""/>
                <label className='brand'>{props.BrandName}</label>
            </div>
            <div className='items'>
                {itms.map((item) => {
                        return (
                            <a href={item.href}>{item.title}</a>
                        )
                    }
                )}
            </div>
        </nav>
    );
}

export default NavBar;
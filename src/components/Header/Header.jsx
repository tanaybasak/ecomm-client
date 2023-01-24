import { useEffect, useState, useContext } from "react";
import { TbSearch } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgShoppingCart } from 'react-icons/cg';
import  Cart  from '../Cart/Cart';
import Search from './Search/Search';
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/Context";
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    // const [showCart, setShowCart] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const { cartCount, showCart, setShowCart } = useContext(Context);

    const navigate =  useNavigate();
    
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    return <>
        <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
            <div className="header-content">
                <ul className="left">
                    <li onClick={() => navigate('/')}>Home</li>
                    <li >About</li>
                    <li>Categories</li>
                </ul>
                <div className="center"  onClick={() => navigate('/')}>Expo</div>
                <div className="right">
                    <TbSearch  onClick={() => setSearchModal(true)}/>
                    <AiOutlineHeart />
                    <span className="cart-icon" onClick={() => setShowCart(true)}>
                        <CgShoppingCart />
                       {!!cartCount &&  <span>{cartCount}</span>}
                    </span>
                </div>
            </div>
        </header>
       {showCart &&  <Cart setShowCart={setShowCart}/> }
       {searchModal && <Search setSearchModal={setSearchModal} />}
    </>;
};

export default Header;

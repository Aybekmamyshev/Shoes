import React from 'react';
import  { GiBeachBag} from "react-icons/gi";
 import "./header.scss"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
const Header = () => {
     const {count} = useSelector((store) => store.cart)
    return (
        <header className={'header'}>
            <div className="container">
              <h1 className="header__logo">
                  Online Shop
              </h1>
                <div className="header__wrapper">
                    <Link to={'/cart'} className="header__icon">
                        <GiBeachBag size={30} color={'#fff'}/>
                    </Link>
                     <div className="header__count">
                        {count  }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
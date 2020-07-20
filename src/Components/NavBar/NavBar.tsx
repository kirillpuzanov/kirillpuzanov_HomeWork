import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import style from './NavBar.module.css';


export function NavBar() {
    let [active, setActive] = useState(false)
    const pressBtn = () => {
        setActive(!active);
    }
    return (
        <div className={style.NavBar_wrapper}>
            <div className={active ? style.Btn_burger_active : style.Btn_burger}
                 onClick={pressBtn}>
                <span></span>
            </div>
            <nav className={active ? style.NavBar_active : style.NavBar}>
                <div>
                    <NavLink to='/PreJunior' activeClassName={style.activeLink}>
                        PreJunior
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/Junior' activeClassName={style.activeLink}>
                        Junior
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/OldJunior' activeClassName={style.activeLink}>
                        OldJunior
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}
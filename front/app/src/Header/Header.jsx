import React from "react";
import classes from "./Header.module.css";
import defaultAva from '../images/defaultUser.png';

const Header = () => {
    return(
        <div className={classes.headerContainer}>
            <div className={classes.logo}>
                logo
            </div>
            <div className={classes.dataName}>
                <img src={defaultAva} alt="default"/>
                <div>
                    <div>Имя Фамилия</div>
                    <div>Клиент</div>
                </div>
            </div>
        </div>
    )
}

export default Header
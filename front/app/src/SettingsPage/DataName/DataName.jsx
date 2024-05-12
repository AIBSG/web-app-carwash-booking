import React from "react";
import defaultAva from  "../../images/defaultAvaInSettings.png";
import classes from "./DataName.module.css";

const DataName = () => {
    return (
        <div className={classes.dataNameContainer}>
            <div>
                <img className={classes.avaImg} src={defaultAva} alt=""/>
            </div>
            <div className={classes.dataName}>
                <div >
                    <div>Имя Фамилия</div>
                    <div>Клиент</div>
                </div>
                <div>
                    <button>Подробнее ></button>
                </div>
            </div>
        </div>
    )
}

export default DataName;
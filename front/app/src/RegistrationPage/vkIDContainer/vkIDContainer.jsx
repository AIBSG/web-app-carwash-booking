import React from "react";
import classes from "./vkIDContainer.module.css"
import VK from "../../images/VK.png";
import ID from "../../images/ID.png";
import line from "../../images/line.png";

const VkIDContainer = () => {
    return(
        <div>
            <div className={classes.orContainer}>
                <img src={line} alt="line"/>
                <div className={classes.orText}>ИЛИ</div>
                <img src={line} alt="line"/>
            </div>
            <div className={classes.vkIDContainer}>
                <button className={classes.vkIDContainerItem}>
                    <div className={classes.vkIDContainerItemText}>Продолжить с</div>
                    <div className={classes.vkIDImages}>
                        <img className={classes.vkIDImagesItems} src={VK} alt="VK"/>
                        <img className={classes.vkIDImagesItems} src={ID} alt="ID"/>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default VkIDContainer;
import React, {useState} from "react";
import classes from "./ModalLoginPage.module.css";
import VkIDContainer from "../vkIDContainer/vkIDContainer";

const ModalLoginPage = (toggle, setToggle, updateToggle) => {



    return (
        <div className={toggle === 1 ? classes.showSecondModalPage : classes.secondModalPage }>
            <div className={classes.modalContainer}>
                <div className={classes.modalContent}>
                    <div className={classes.loginTitleText}>Вход</div>
                    <div>
                        <div className={classes.loginItems}>
                            <div className={classes.prePlaceholderText}>Почта</div>
                            <input className={classes.placeholderContainer} type="text"
                                   placeholder={'Введите вашу почту'}/>
                        </div>
                        <div className={classes.loginItems}>
                            <div className={classes.writePasswordContainer}>
                                <div>
                                    <div className={classes.prePlaceholderText}>
                                        Пароль
                                    </div>
                                    <input className={classes.placeholderContainer} type="text"
                                           placeholder={'Введите пароль'}/>
                                </div>
                                <button className={classes.forgotPassword}>Забыли пароль?</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.loginButtonContainer}>
                        <button className={classes.loginButton}>Войти</button>
                        <div className={classes.toRegistrationContainer}>
                            Нет аккаунта?
                            <button
                                className={classes.toRegistration}
                                onClick={() => updateToggle(1)}
                            >
                                Зарегистрироваться
                            </button>
                        </div>
                    </div>
                    <VkIDContainer/>
                </div>
            </div>
        </div>
    )
}

export default ModalLoginPage;
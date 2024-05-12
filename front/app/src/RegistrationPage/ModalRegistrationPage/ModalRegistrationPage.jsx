import React, {useState} from "react";
import classes from "./ModalRegistrationPage.module.css"
import VkIDContainer from "../vkIDContainer/vkIDContainer";


const ModalRegistrationPage = (toggle, updateToggle) => {


    return (
        <div>
            <div className={classes.modalContainer}>
                <div className={classes.modalContent}>
                    <div className={classes.loginTitleText}>Регистрация</div>
                    <div>
                        <div className={classes.nameDataContainer}>
                            <div className={classes.loginItems}>
                                <div className={classes.prePlaceholderText}>Имя</div>
                                <input className={classes.placeholderContainerNameData} type="text"
                                       placeholder={'Введите ваше имя'}/>
                            </div>
                            <div className={classes.loginItems}>
                                <div className={classes.prePlaceholderText}>Фамилия</div>
                                <input className={classes.placeholderContainerNameData} type="text"
                                       placeholder={'Введите вашу фамилию'}/>
                            </div>
                        </div>
                        <div className={classes.loginItems}>
                            <div className={classes.prePlaceholderText}>Почта</div>
                            <input className={classes.placeholderContainer} type="text"
                                   placeholder={'Введите вашу почту'}/>
                        </div>
                        <div className={classes.loginItems}>
                            <div className={classes.prePlaceholderText}>Телефон</div>
                            <input className={classes.placeholderContainer} type="text"
                                   placeholder={'--- --- -- --'}/>
                        </div>
                        <div className={classes.loginItems}>
                            <div className={classes.prePlaceholderText}>Пароль</div>
                            <input className={classes.placeholderContainer} type="text"
                                   placeholder={'Придумайте пароль'}/>
                        </div>
                        <div className={classes.loginItems}>
                            <div className={classes.prePlaceholderText}>Подтвердите пароль</div>
                            <input className={classes.placeholderContainer} type="text"
                                   placeholder={'Введите пароль ещё раз'}/>
                        </div>
                    </div>
                    <div className={classes.loginButtonContainer}>
                        <button className={classes.loginButton}>Зарегистрироваться</button>
                        <div className={classes.toRegistrationContainer}>
                            Есть аккаунт?
                            <button
                                className={classes.toRegistration}
                                onClick={() => updateToggle(1)}
                            >
                                Войти
                            </button>
                        </div>
                    </div>
                    <VkIDContainer/>
                </div>
            </div>
        </div>
    )
}

export default ModalRegistrationPage;
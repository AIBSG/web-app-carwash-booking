import React, {useState} from "react";
import classes from "./RegistrationPage.module.css"
import line from "../images/line.png"
import VK from "../images/VK.png"
import ID from "../images/ID.png"
import vkIDContainer from "./vkIDContainer/vkIDContainer";
import VkIDContainer from "./vkIDContainer/vkIDContainer";
import ModalRegistrationPage from "./ModalRegistrationPage/ModalRegistrationPage";






const RegistrationPage = () => {

    const [toggle, setToggle] = useState(1)
    function updateToggle(id) {
        setToggle(id)
    }

    return (
        <div>
            <div className={toggle === 1 ? classes.showFirstModalPage : classes.firstModalPage}>
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
                                    onClick={() => updateToggle(2)}
                                >
                                    Зарегистрироваться
                                </button>
                            </div>
                        </div>
                        <VkIDContainer/>
                    </div>
                </div>
            </div>
            <div className={toggle === 2 ? classes.showSecondModalPage : classes.secondModalPage}>
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
        </div>
    )
}

export default RegistrationPage;
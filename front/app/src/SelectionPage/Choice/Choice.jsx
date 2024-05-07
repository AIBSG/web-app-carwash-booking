import {useState} from "react";
import React, {Component} from "react";
import classes from "./Choise.module.css";

import Calendar from "react-calendar";
import '../../Calendar.css'

import TimesSelector from "./TimesSelector/TimesSelector";
import {YMaps, Map} from "@pbe/react-yandex-maps";



const Choice = () => {
    const [calendarValue, onChangeCalendar] = useState(new Date())
    const [toggle, setToggle] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }

    return (
        <div className={classes.pageContainer}>
            <div className={classes.pageContent}>
                <div className={classes.mainSelector}>
                    <div className={classes.selectorContainer}>
                        <div className={classes.tabs}>
                            <ul className={classes.tabsItem}>
                                <li className={toggle===2 ? classes.tabsItemTitle : classes.tabsItemTitleActive}>Услуги</li>
                                <li className={toggle===1 ? classes.tabsItemTitle : classes.tabsItemTitleActive}>Дата и время</li>
                            </ul>
                        </div>
                        <div className={toggle === 1 ? classes.showContent : classes.content}>
                            <div className={classes.tabsContentContainer}>
                                <div className={classes.tabsContentItem}>
                                    <button className={classes.tabsContentButton}>
                                        <div className={classes.tabsContentItemText}>
                                            <h3>Название услуги 1</h3>
                                            <p>
                                                Описание услуги
                                            </p>
                                        </div>
                                        <div className={classes.textTime}>30 минут</div>
                                    </button>
                                    <button className={classes.tabsContentButton}>
                                        <div className={classes.tabsContentItemText}>
                                            <h3>Название услуги 2</h3>
                                            <p>
                                                Описание услуги
                                            </p>
                                        </div>
                                        <div className={classes.textTime}>30 минут</div>
                                    </button>
                                    <button className={classes.tabsContentButton}>
                                        <div className={classes.tabsContentItemText}>
                                            <h3>Название услуги 3</h3>
                                            <p>
                                                Описание услуги
                                            </p>
                                        </div>
                                        <div className={classes.textTime}>30 минут</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={toggle === 2 ? classes.showContent : classes.content}>
                            <div className={classes.dataAndTime}>
                                <div className={classes.calendarContainer}>
                                <Calendar onChange={onChangeCalendar} value={calendarValue}
                                          className={classes.calendar}/>
                                </div>
                                <div>
                                    <p>Подъеду в</p>
                                    <div>
                                        <TimesSelector/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className={toggle === 1 ? classes.showContentButtonNext : classes.contentButton} onClick={() => updateToggle(2)}>Далее</button>
                        <button className={toggle === 2 ? classes.showContentButtonPrev : classes.contentButton} onClick={() => updateToggle(1)}>Назад</button>
                    </div>
                </div>
                <div>
                    <YMaps>
                        <div>
                            <Map className={classes.mapContainer} defaultState={{center: [56.85, 60.57], zoom: 10}}/>
                        </div>
                    </YMaps>
                </div>
            </div>
        </div>
    )
}

export default Choice;


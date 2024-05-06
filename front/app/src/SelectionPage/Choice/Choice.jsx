import {useState} from "react";
import React, {Component} from "react";
import classes from "./Choise.module.css";
import {Col, Container, Nav, Row, TabContainer, TabContent, TabPane} from "react-bootstrap";
import {getCLS} from "web-vitals";
import {Tabs, TabList, TabPanel, Tab} from 'react-tabs';
import Calendar from "react-calendar";
import '../../Calendar.css'

import TimesSelector from "./TimesSelector/TimesSelector";
import {YMaps, Map} from "@pbe/react-yandex-maps";
import Header from "../../Header/Header";
import tab from "bootstrap/js/src/tab";


const Choice = () => {
    const [calendarValue, onChangeCalendar] = useState(new Date())
    const [toggle, setToggle] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }



    return (
        <div>
            <div className={classes.pageContent}>
                <div className={classes.mainSelector}>
                    <div className={classes.selectorContainer}>
                        <div className={classes.tabs}>
                            <ul className={classes.tabsItem}>
                                <li className={classes.tabsItemTitle}>Услуги</li>
                                <li className={classes.tabsItemTitle}>Дата и время</li>
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
                                <Calendar onChange={onChangeCalendar} value={calendarValue}
                                          className={classes.calendar}/>
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
                        <button onClick={() => updateToggle(2)}>Далее
                        </button>
                        <button onClick={() => updateToggle(1)}>Назад
                        </button>
                    </div>
                </div>
                <div>
                    <YMaps>
                        <div>
                            <Map defaultState={{center: [55.75, 37.57], zoom: 9}}/>
                        </div>
                    </YMaps>
                </div>
            </div>
        </div>
    )
}

export default Choice;


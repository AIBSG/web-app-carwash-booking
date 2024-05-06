import React from "react";
import classes from "./SelectionPage.module.css"
import Choice from "./Choice/Choice";
import Header from "../Header/Header";

const SelectionPage = () => {
    return (
        <div>
            <Header/>
            <Choice/>
        </div>
    )
}

export default SelectionPage
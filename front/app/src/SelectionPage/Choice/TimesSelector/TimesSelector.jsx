import React from "react";
import choice from "../Choice";
import classes from "./TimesSelector.module.css";

export default class TimesSelector extends React.Component{
    static defaultProps = {
        hours: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
        minutes: [
            '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21',
            '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32',
            '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43',
            '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54',
            '55', '56', '57', '59'
        ]
    }
    render() {
        const {hours, minutes} = this.props;

        return (
            <div>
                <select className={classes.selectorContent} name="" id="">
                    {hours.map((name, index) =>
                        <option key={name} value={index}>{name}</option>
                    )}
                </select>
                <select className={classes.selectorContent} name="" id="">
                    {minutes.map((name, index) =>
                        <option key={name} value={index}>{name}</option>
                    )}
                </select>
            </div>
        )
    }

}
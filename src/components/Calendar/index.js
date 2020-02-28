import React, {Component} from "react";
import moment             from "moment";
import Navigation         from "../Navigation";
import style              from './Calendar.module.scss';

import {MODE_CALENDAR} from '../../constants/index.js'
import Month           from "../Month";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: moment(),
            mode: MODE_CALENDAR.MONTH


        }

    }

    changeModeCalendar = (mode) => {
        this.setState({
            mode: mode
        })
    };

    render() {
        return <div className={style.calendar}>
            <Navigation changeModeCalendar={this.changeModeCalendar}/>
            <Month date={moment()}/>


        </div>
    }

}

export default Calendar

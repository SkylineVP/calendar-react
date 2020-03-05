import React, {Component} from "react";
import moment             from "moment";
import Navigation         from "../Navigation";
import style              from './Calendar.module.scss';

import {MODE_CALENDAR,ACTION} from '../../constants/index.js'
import CalendarBody           from "../CalendarBody";
import {ACTION_BUTTON} from "../../constants/index";


class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDate:moment(),
            selectedDate:null,
            mode: MODE_CALENDAR.MONTH
        }
    }

    changeModeCalendar = (mode) => {
        this.setState({
            mode: mode
        })
    };
    changeActiveDate=async (action)=>{
        const newDate=this.state.activeDate;
        if (action===ACTION_BUTTON.PREV){
          newDate.subtract(1,ACTION[this.state.mode]);
        }else {
            newDate.add(1,ACTION[this.state.mode]);
        }
        console.log(newDate.format('D'))
     await this.setState({
          activeDate:moment(newDate)
      })
    };

    render() {
        return <div className={style.calendar}>
            <Navigation changeModeCalendar={this.changeModeCalendar} changheActiveDate={this.changeActiveDate} mode={this.state.mode} date={this.state.activeDate}/>
            <CalendarBody date={this.state.activeDate} selectedDate={this.state.selectedDate} mode={this.state.mode}/>
        </div>
    }
}

export default Calendar

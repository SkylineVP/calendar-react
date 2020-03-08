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
            activeDate: moment(),
            selectedDate: null,
            mode: MODE_CALENDAR.MONTH,
            events: new Map()
        }
    }

    changeModeCalendar = (mode) => {
        this.setState({
            mode: mode,
        })
    };
    changeActiveDate=(action)=>{
        const newDate = this.state.activeDate;
        if (action === ACTION_BUTTON.PREV) {
            newDate.subtract(1, ACTION[this.state.mode]);
        }
        else {
            newDate.add(1, ACTION[this.state.mode]);
        }
        this.setState({
            activeDate: moment(newDate)
        })
    };
    changeSelectedDate = ( date ) => {
        const selectedDay = moment(date);
        this.setState({
            selectedDate: moment(selectedDay)
        })
    };

    componentDidMount() {
        fetch(process.env.PUBLIC_URL + '/event.json')
            .then(response => response.json())
            .then(events => {
                const eventsMap = new Map();
                events.forEach(event => {
                    eventsMap.set(event.date, event.events)
                });
                this.setState({
                    events: eventsMap
                })
            });

    }

    render() {
        return <div className={style.calendar}>
            <Navigation changeModeCalendar={this.changeModeCalendar}
                        changheActiveDate={this.changeActiveDate}
                        mode={this.state.mode}
                        date={this.state.activeDate}/>
            <CalendarBody date={this.state.activeDate}
                          selectedDate={this.state.selectedDate}
                          mode={this.state.mode}
                          changeSelectedDate={this.changeSelectedDate}
                          events={this.state.events}/>
        </div>
    }
}

export default Calendar

import React from "react";
import Week from '../Week'
import moment from "moment";
import {MODE_CALENDAR} from "../../constants";


function CalendarBody(props) {
    const  getWeeks=(date)=> {
        let weeks = [];
        if (props.mode==MODE_CALENDAR.WEEK){

            return <Week   monday={moment(date).startOf('week')} firstDay={moment(date)}/>
        }
        const firstDateOfMonth = moment(date).date(1);
        let monday = getMonday(firstDateOfMonth);
        do {
            weeks.push(<Week  monday={moment(monday)} firstDay={moment(firstDateOfMonth)} />);
            monday.add(7,"d");
        } while (monday.format('M')==firstDateOfMonth.format('M'));

        return weeks;
    };

    let weeks = [];
    weeks = getWeeks(props.date);

    return (<>{weeks}</>)


}

export default CalendarBody;


function getMonday(date) {

    const monday = moment(date);
    const weekDayNumber = monday.day();
    console.log(weekDayNumber);
    monday.subtract((weekDayNumber ? weekDayNumber-1 : 6), "d");// 1 :  1 2 3 4 5 6 0
    return monday;
}
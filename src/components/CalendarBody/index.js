import React             from "react";
import Week              from '../Week'
import moment            from "moment";
import { MODE_CALENDAR } from "../../constants";


function CalendarBody( props ) {
    const {mode, date, selectedDate, changeSelectedDate, events} = props;
    let weeks = [];
    const firstDateOfMonth = moment(date).date(1);

    if (mode === MODE_CALENDAR.WEEK) {
        return <Week monday={moment(date).startOf('week')}
                     firstDateOfMonth={moment(date)}
                     mode={mode}
                     selectedDate={selectedDate}
                     changeSelectedDate={changeSelectedDate}
                     events={events}/>
    }
    let monday = getMonday(firstDateOfMonth);
    do {
        weeks.push(<Week monday={moment(monday)}
                         firstDateOfMonth={moment(firstDateOfMonth)}
                         mode={mode}
                         selectedDate={selectedDate}
                         changeSelectedDate={changeSelectedDate}
                         events={events}/>);
        monday.add(7, "d");
    } while (monday.format('M') === firstDateOfMonth.format('M'));

    return (<>{weeks}</>)


}

export default CalendarBody;


function getMonday( date ) {

    const monday = moment(date);
    const weekDayNumber = monday.day();
    monday.subtract((weekDayNumber ? weekDayNumber - 1 : 6), "d");// 1 :  1 2 3 4 5 6 0
    return monday;
}
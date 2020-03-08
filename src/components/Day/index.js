import React             from "react";
import moment            from "moment";
import { MODE_CALENDAR } from "../../constants";
import classNames        from 'classnames'
import style             from './Day.module.scss'

function EventItem( props ) {
    return <div className={classNames(style.event,
        {[style.activeEvent]: props.item.isIn && moment(props.date, 'DD-MM-YYYY').isAfter(moment())})}/>
}

function Day( props ) {
    let {date, events, mode, month, selectedDate, changeSelectedDate} = props;
    selectedDate = moment(selectedDate);
    const day = moment(date);
    const dayView = mode === MODE_CALENDAR.MONTH
                    ? day.format("M") === month && day.format("D")
                    : day.format("D");
    let dayEvents;
    if (events && day.format("M") === month) {
        dayEvents = events.map(( item, index ) => index < 3 ? <EventItem item={item} day={day} date={day}/> : null);
    }

    return (
        <div className={classNames(style.day, {
            [style.selectedDate]: selectedDate.isSame(day),
            [style.currentDay]: day.isSame(moment(), 'day')
        })}
             onClick={day.format("M") === month && day.format("D")
                      ? () => changeSelectedDate(day)
                      : null}>
        <span>
            {dayView}
        </span>
            <div className={style.eventList}> {dayEvents}</div>

        </div>
    )
}

export default Day
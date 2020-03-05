import React, {Component} from "react";
import PropTypes          from 'prop-types';
import moment             from "moment";
import {MODE_CALENDAR} from "../../constants";

function EventItem(props) {

    return <div></div>

}

function Day(props) {
    const {date, event} = props;
    const day=moment(date);
    const div = (
        <div style={{padding:"10px", flex:1,textAlign:"center"}}>
            <div>
                {
                    props.mode===MODE_CALENDAR.MONTH
                        ?day.format("M")==props.month&&day.format("D")
                        :day.format("D")
                }
            </div>
           {/* {event.map(item => <EventItem item={item}/>)}*/}
        </div>
    );
    return div;
}


export default Day
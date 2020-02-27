import React, {Component} from "react";
import PropTypes          from 'prop-types';
import moment             from "moment";

function EventItem(props) {

    return <div></div>

}

function Date(props) {
    const {date, event} = props;
    const day = moment(date);
    return (
        <div className={'sasd'}>
            <div>
                {day.date()}
            </div>
            {event.map(item => <EventItem item={item}/>)}

        </div>
    )
}

Date.propTypes = {
    date: PropTypes.string.isRequired,
    event: PropTypes.object
};

export default Date
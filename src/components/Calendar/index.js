import React, {Component} from "react";
import moment             from "moment";
import Navigation         from "../Navigation";
import style              from './Calendar.module.scss'

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: moment()

        }

    }

    render() {
        return <div className={style.calendar}>
            <Navigation/>


        </div>
    }

}

export default Calendar

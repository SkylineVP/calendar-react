import React, {Component} from "react";
import style              from './Navigation.module.scss'
import NavButton          from "../NavButton";
import ModeSelector       from "../ModeSelector";
import {ACTION_BUTTON, MODE_CALENDAR} from "../../constants";
import classNames from "classnames"
import moment from "moment";
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    openMenu = () => {
        this.setState({isOpen: !this.state.isOpen})
    };

    render() {
        const dropDownMenu =
            <div className={style.dropDownMenu}>
                <NavButton className={style.modeButton} onClick={this.props.changeModeCalendar}
                           mode={MODE_CALENDAR.WEEK}>This week</NavButton>
                <NavButton className={style.modeButton} onClick={this.props.changeModeCalendar}
                           mode={MODE_CALENDAR.MONTH}>This month</NavButton>
            </div>;

        return (
            <div className={style.navigation}>
                <div className={style.mainNav}>

                    <NavButton className={style.prevNext}
                               style={{textAlign: "left"}} onClick={this.props.changheActiveDate} action={ACTION_BUTTON.PREV}>{moment(this.props.date).subtract(1,'M').format('MMM')}</NavButton>

                    <ModeSelector className={style.modeSelector}
                                  onClick={this.openMenu} isOpen={this.state.isOpen}>{moment(this.props.date).format('MMMM')}</ModeSelector>

                    <NavButton className={style.prevNext}
                               style={{textAlign: "right"}} onClick={this.props.changheActiveDate} action={ACTION_BUTTON.NEXT}>{moment(this.props.date).add(1,'M').format('MMM')}</NavButton>
                </div>

                {this.state.isOpen && dropDownMenu}


            </div>
        )
    }


}

export default Navigation
import React, {Component} from "react";
import style              from './Navigation.module.scss'
import NavButton          from "../NavButton";
import ModeSelector       from "../ModeSelector";
import {MODE_CALENDAR}    from "../../constants";

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
                           value={MODE_CALENDAR.WEEK}>This week</NavButton>
                <NavButton className={style.modeButton} onClick={this.props.changeModeCalendar}
                           value={MODE_CALENDAR.MONTH}>This month</NavButton>
            </div>;

        return (
            <div className={style.navigation}>
                <div className={style.mainNav}>

                    <NavButton className={style.prevNext}
                               style={{textAlign: "left"}}>Prev</NavButton>

                    <ModeSelector className={style.modeSelector}
                                  onClick={this.openMenu} isOpen={this.state.isOpen}>JUNE</ModeSelector>

                    <NavButton className={style.prevNext}
                               style={{textAlign: "right"}}>Next</NavButton>
                </div>

                {this.state.isOpen && dropDownMenu}


            </div>
        )
    }


}

export default Navigation
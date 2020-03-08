import React, { Component }             from "react";
import style                            from './Navigation.module.scss'
import NavButton                        from "../NavButton";
import ModeSelector                     from "../ModeSelector";
import { ACTION_BUTTON, MODE_CALENDAR } from "../../constants";
import moment                           from "moment";

class Navigation extends Component {
    constructor( props ) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    openMenu = () => {
        this.setState({isOpen: !this.state.isOpen})
    };
    onModeButtonHandler = ( mode ) => {
        this.props.changeModeCalendar(mode);
        this.setState({isOpen: !this.state.isOpen})
    };

    render() {
        const dropDownMenu =
            <div className={style.dropDownMenu}>
                <NavButton className={style.modeButton} onClick={this.onModeButtonHandler}
                           mode={MODE_CALENDAR.WEEK}>This week</NavButton>
                <NavButton className={style.modeButton} onClick={this.onModeButtonHandler}
                           mode={MODE_CALENDAR.MONTH}>This month</NavButton>
            </div>;
        let prevButtonText, nextButtonText, modeSelectorText;
        if (this.props.mode === MODE_CALENDAR.WEEK) {
            prevButtonText = ACTION_BUTTON.PREV;
            nextButtonText = ACTION_BUTTON.NEXT;
            modeSelectorText = `${moment(this.props.date).format('MMMM')}  ${moment(this.props.date).startOf('week')
                                                                                                    .format('D')}-${moment(this.props.date)
                .endOf('week')
                .format("D")}`;

        }
        else {
            prevButtonText = moment(this.props.date).subtract(1, 'M').format('MMM');
            nextButtonText = moment(this.props.date).add(1, 'M').format('MMM');
            modeSelectorText = moment(this.props.date).format('MMMM');
        }

        return (<>
                <div className={style.navigation}>
                    <div className={style.mainNav}>

                        <NavButton className={style.prevNext}
                                   style={{textAlign: "left"}} onClick={this.props.changheActiveDate}
                                   action={ACTION_BUTTON.PREV}>{prevButtonText}</NavButton>
                        <ModeSelector style={this.props.mode === MODE_CALENDAR.MONTH
                                             ? {textTransform: 'uppercase'}
                                             : null}
                                      className={style.modeSelector}
                                      onClick={this.openMenu}
                                      isOpen={this.state.isOpen}>{modeSelectorText}</ModeSelector>
                        <NavButton className={style.prevNext}
                                   style={{textAlign: "right"}} onClick={this.props.changheActiveDate}
                                   action={ACTION_BUTTON.NEXT}>{nextButtonText}</NavButton>
                    </div>
                    {this.state.isOpen && dropDownMenu}
                </div>
                <div className={style.dayRow}>
                    <span>M</span>
                    <span>T</span>
                    <span>W</span>
                    <span>T</span>
                    <span>F</span>
                    <span>S</span>
                    <span>S</span>
                </div>
            </>
        )
    }


}

export default Navigation
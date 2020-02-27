import React, {Component} from "react";
import style              from './Navigation.module.scss'
import NavButton          from "../NavButton";
import ModeSelctor        from "../ModeSelector";

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
                <NavButton className={style.modeButton}>Mode1</NavButton>
                <NavButton className={style.modeButton}>Mode2</NavButton>
            </div>;
        return (
            <div className={style.navigation}>
                <div className={style.mainNav}>
                    <NavButton className={style.prevNext}
                               style={{textAlign: "left"}}>Prev</NavButton>
                    <ModeSelctor className={style.modeSelector} onClick={this.openMenu}/>
                    <NavButton className={style.prevNext}
                               style={{textAlign: "right"}}>Next</NavButton>
                </div>

                {this.state.isOpen && dropDownMenu}


            </div>
        )
    }


}

export default Navigation
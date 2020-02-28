import React           from "react";
import PropTypes       from 'prop-types'
import {MODE_CALENDAR} from "../../constants";

function NavButton(props) {
    return <div className={props.className} style={props.style} onClick={() => {
        props.onClick(props.value)
    }}>{props.children}</div>
}

NavButton.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    value: PropTypes.string

};
export default NavButton;
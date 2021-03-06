import React           from "react";
import PropTypes       from 'prop-types'

function NavButton(props) {
    return <div className={props.className} style={props.style} onClick={() => {
        props.onClick(props.action||props.mode)
    }}>{props.children}</div>
}

NavButton.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    mode: PropTypes.string

};
export default NavButton;
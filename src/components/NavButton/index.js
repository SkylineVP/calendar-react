import React     from "react";
import PropTypes from 'prop-types'

function NavButton(props) {
    return <div className={props.className} style={props.style}>{props.children}</div>
}

NavButton.propTypes = {
    className: PropTypes.string
};
export default NavButton;
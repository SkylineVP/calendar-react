import React                     from "react";
import Icon                      from '@mdi/react';
import {mdiAppleKeyboardControl} from '@mdi/js';

function ModeSelctor(props) {
    let {isOpen, onClick} = props;
    return (
        <div className={props.className} onClick={onClick}>
            <p>Now Month</p>
            <Icon path={mdiAppleKeyboardControl}
                  color="#E6EAEE"
                  size={0.65}
                  rotate={!isOpen && 180}/>
        </div>
    )

}

export default ModeSelctor
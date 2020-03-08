import React                     from "react";
import Icon                      from '@mdi/react';
import {mdiAppleKeyboardControl} from '@mdi/js';
function ModeSelector(props) {

    let {isOpen, onClick, style, refl, className} = props;
    return (
        <div
            ref={refl}
            style={style}
            className={className}
            onClick={onClick}>
            <p>{props.children}</p>
            <Icon path={mdiAppleKeyboardControl}
                  color="#E6EAEE"
                  size={0.65}
                  rotate={isOpen ? 0 : 180}/>
        </div>
    )

}

export default ModeSelector
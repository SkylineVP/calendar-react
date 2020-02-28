import React from "react";
import Week  from '../Week'
import Date  from "../Date";

function Month(props) {
    const days = [];
    console.log(props.date.date(1));
    for (let i = 0; i < 31; i++) {
        //days.push(<Date date={props.date.add(i,'d')} key={i}/>)}
    }
    return (<>1</>)


}

export default Month;
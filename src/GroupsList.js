import React from "react";
import Group from "./my_group";

export default function GroupsList(props) {
    let groups = props.data;
    return (
        <>
            {
               groups.map(group => <Group {...group} key={group.title}></Group>)
            }
        </>
    )
}
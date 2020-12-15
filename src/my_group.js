import React from "react";

export default function Group(props) {
  return (
    <div>
      <img class="forGroups" src={props.picture}></img>
      <h1>Название: {props.title}</h1>
      <h3>Солист: {props.main}</h3>
      <p>Организована в {props.since} году</p>
      <hr></hr>
    </div>
  )
}
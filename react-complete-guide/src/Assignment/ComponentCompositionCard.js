import React from "react";

export default function Card(props) {
  const classes = "card";

  return (
    <div className={classes}>{props.children}</div>
  );
}
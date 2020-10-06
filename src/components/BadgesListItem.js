import React from "react";

import "./styles/BadgesListItem.css";
import Gravatar from "./Gravatar";

export default function BadgesListItem(props) {
  return (
    <div className="BadgesList__item">
      <div className="BadgesList__item--img">
        <Gravatar email={props.badge.email} />
      </div>
      <div className="BadgesList__item--data">
        <h3 className="BadgesList__item--name">
          {props.badge.firstName} {props.badge.lastName}
        </h3>
        <span className="BadgesList__item--twitter">
          {" "}
          @{props.badge.twitter}{" "}
        </span>
        <p className="BadgesList__item--job">{props.badge.jobTitle}</p>
      </div>
    </div>
  );
}

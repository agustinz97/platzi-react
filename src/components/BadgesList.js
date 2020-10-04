import React from "react";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesList__item">
              <div className="BadgesList__item--img">
                <img src={badge.avatarUrl} alt="" />
              </div>
              <div className="BadgesList__item--data">
                <h3 className="BadgesList__item--name">
                  {badge.firstName} {badge.lastName}
                </h3>
                <span className="BadgesList__item--twitter">
                  {" "}
                  @{badge.twitter}{" "}
                </span>
                <p className="BadgesList__item--job">{badge.jobTitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;

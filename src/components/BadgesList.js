import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import BadgesListItem from "./BadgesListItem";
import { useState } from "react";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      const lowered = query.toLowerCase();
      const firstName = badge.firstName.toLowerCase();
      const lastName = badge.lastName.toLowerCase();

      return firstName.includes(lowered) || lastName.includes(lowered);
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label htmlFor="">Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.length > 0 ? (
          filteredBadges.map((badge) => {
            return (
              <li key={badge.id}>
                <Link
                  to={`/badges/${badge.id}`}
                  className="text-reset text-decoration-none"
                >
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })
        ) : (
          <div>
            <h3>No badges were found</h3>
            <Link to="/badges/new" className="btn btn-primary">
              Create new badge
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
}

export default BadgesList;

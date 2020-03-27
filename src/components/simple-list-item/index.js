import React from "react";
import "./_styles.scss";
import "../social-links-list";
import SocialSection from "../social-links-list";

function SimpleListItem(props) {
  return (
    <li className="card">
      <div className="profile">
        <img
          src={props.item.avatar}
          alt={props.item.firstName + props.item.firstName}
          className="profile"
        />
        <div className="profile-top">
          <div className="full-name">
            <span>{props.item.firstName}</span>
            <span>{props.item.lastName}</span>
            {props.item.isAdmin && <span className="admin">admin</span>}
          </div>
          <div className="job-title">
            <span>{props.item.title}</span>
          </div>
        </div>
      </div>

      {/* SOCIAL INFO */}
      <SocialSection sns={props.item.contact} key={props.item.key} />

      <div className="since">
        <span>member since </span>
        {new Intl.DateTimeFormat("de-DE").format(
          new Date(props.item.memberSince)
        )}
      </div>
    </li>
  );
}

export default SimpleListItem;

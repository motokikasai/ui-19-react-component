import React from "react";
import "./_styles.scss";

function SimpleListItem(props) {
  return (
    <li>
      <div className="profile">
        <img
          src={props.item.avatar}
          alt={props.item.firstName + props.item.firstName}
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
      <ul className="social">
        <div className="contact-info">
          <span className="link-phone">
            <a href="google.com" target="_blank">
              {props.item.contact.phone}
            </a>
          </span>
          <span className="link-email">
            <a href="google.com" target="_blank">
              {props.item.contact.email}
            </a>
          </span>
          <span className="link-url">
            <a href="google.com" target="_blank">
              {props.item.contact.url}
            </a>
          </span>
        </div>
      </ul>
      <div className="since">
        <span>member since </span>
        {new Intl.DateTimeFormat("de-DE").format(
          parseInt(props.item.memberSince)
        )}
      </div>
    </li>
  );
}

export default SimpleListItem;

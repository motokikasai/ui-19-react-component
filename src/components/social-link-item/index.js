import React from "react";

function SocialLinkItem(props) {
  return (
    <li className="social-item link-phone">
      <a href="google.com" target="_blank">
        <span>
          <img
            src={props.contactInfo.icon}
            alt={props.contactInfo.icon}
            className="icon"
          />
        </span>
        {props.contactInfo.datum}
      </a>
    </li>
  );
}

export default SocialLinkItem;

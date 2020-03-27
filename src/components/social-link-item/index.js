import React from "react";

function SocialLinkItem(props) {
  return (
    <section className="social-item link-phone">
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
    </section>
  );
}

export default SocialLinkItem;

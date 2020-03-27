import React from "react";
import SocialLinkItem from "../social-link-item";

function SocialSection(props) {
  return (
    <div className="social">
      <div className="contact-info">
        {Object.values(props.sns).map((datum, key) => {
          return <SocialLinkItem key={key} datum={datum} />;
        })}

        {/* <section className="social-item link-phone">
          <a href="google.com" target="_blank">
            <span>
              <img src={phone} alt="" className="icon" />
            </span>
            {props.sns.contact.phone}
          </a>
        </section>
        <section className="social-item link-email">
          <a href="google.com" target="_blank">
            <span>
              <img src={email} alt="" className="icon" />
            </span>
            {props.sns.contact.email}
          </a>
        </section>
        <section className="social-item link-url">
          <a href="google.com" target="_blank">
            <span>
              <img src={url} alt="" className="icon" />
            </span>
            {props.sns.contact.url}
          </a>
        </section> */}
      </div>
    </div>
  );
}

export default SocialSection;

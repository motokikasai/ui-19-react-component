import React from "react";

import phone from "../../assets/phone.svg";
import email from "../../assets/mail.svg";
import url from "../../assets/url.svg";

function SocialSection(props) {
  return (
    <div className="social">
      <div className="contact-info">
        <section className="social-item link-phone">
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
        </section>
      </div>
    </div>
  );
}

export default SocialSection;

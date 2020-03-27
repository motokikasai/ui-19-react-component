import React from "react";
import SocialLinkItem from "../social-link-item";

import phone from "../../assets/phone.svg";
import email from "../../assets/mail.svg";
import url from "../../assets/url.svg";

function SocialSection(props) {
  // Create a new OBJECT with icons 'woven into' the original contact object
  const contactWithIcon = {
    phone: {
      datum: props.sns.phone,
      icon: phone
    },
    email: {
      datum: props.sns.email,
      icon: email
    },
    url: {
      datum: props.sns.url,
      icon: url
    }
  };

  return (
    <div className="social">
      <ul className="contact-info">
        {Object.values(contactWithIcon).map((contactInfo, key) => {
          return <SocialLinkItem key={key} contactInfo={contactInfo} />;
        })}
      </ul>
    </div>
  );
}

export default SocialSection;

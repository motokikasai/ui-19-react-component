import React from "react";
import SocialLinkItem from "../social-link-item";

// import phone from "../../assets/phone.svg";
// import email from "../../assets/mail.svg";
// import url from "../../assets/url.svg";

function SocialSection(props) {
  // const icons = [phone, email, url];

  return (
    <div className="social">
      <div className="contact-info">
        {Object.values(props.sns).map((datum, key) => {
          return <SocialLinkItem key={key} datum={datum} />;
        })}
      </div>
    </div>
  );
}

export default SocialSection;

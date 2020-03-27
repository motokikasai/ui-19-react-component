import React from "react";

import phone from "../../assets/phone.svg";
// import email from "../../assets/mail.svg";
// import url from "../../assets/url.svg";

function SocialLinkItem(props) {
  return (
    <section className="social-item link-phone">
      <a href="google.com" target="_blank">
        <span>
          <img src={phone} alt="" className="icon" />
        </span>
        {props.datum}
      </a>
    </section>
  );
}

export default SocialLinkItem;

import React from "react";
// import logo from "./assets/logo.svg";
import "./styles/App.scss";
import data from "./data.json";
import SimpleList from "./components/simple-list";

function App() {
  return (
    <div className="App">
      <h2>People List</h2>

      {/* REFACTOR INTO COMPONENT */}

      <SimpleList list={data} />
      {/* <ul>
        {data.map(person => {
          return (
            <li key={person.id}>
              <div className="profile">
                <img
                  src={person.avatar}
                  alt={person.firstName + person.firstName}
                />
                <div className="profile-top">
                  <div className="full-name">
                    <span>{person.firstName}</span>
                    <span>{person.lastName}</span>
                    {person.isAdmin && <span className="admin">admin</span>}
                  </div>
                  <div className="job-title">
                    <span>{person.title}</span>
                  </div>
                </div>
              </div>
              <div className="contact-info">
                <span className="link-phone">
                  <a href="google.com" target="_blank">
                    {person.contact.phone}
                  </a>
                </span>
                <span className="link-email">
                  <a href="google.com" target="_blank">
                    {person.contact.email}
                  </a>
                </span>
                <span className="link-url">
                  <a href="google.com" target="_blank">
                    {person.contact.url}
                  </a>
                </span>
              </div>
              <div className="since">
                <span>member since </span>
                {new Intl.DateTimeFormat("de-DE").format(
                  parseInt(person.memberSince)
                )}
              </div>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}

export default App;

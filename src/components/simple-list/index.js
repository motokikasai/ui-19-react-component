import React from "react";
import SimpleListItem from "../simple-list-item";
import "./_styles.scss";

function SimpleList(props) {
  return (
    <ul className="simple-list">
      {props.list.map((item, id) => {
        return (
          // into COMPONENT...

          <SimpleListItem key={id} item={item} />
        );
      })}
    </ul>
  );
}
export default SimpleList;

import React from "react";
import "./styles.scss";
export default function Title({ title, listId, noOfCards }) {
  return (
    <>
      {listId === 'list-1' ? (
        <div className="title-container-red">
          <h2 className="title-name">{title}</h2>
          <h2 className="title-count">{noOfCards}</h2>
        </div>
      ) : listId === 'list-2' ? (
        <div className="title-container-blue">
          <h2 className="title-name">{title}</h2>
          <h2 className="title-count">{noOfCards}</h2>
        </div>
      ) : (
        <div className="title-container-green">
          <h2 className="title-name">{title}</h2>
          <h2 className="title-count">{noOfCards}</h2>
        </div>
      )}
    </>
  );
}

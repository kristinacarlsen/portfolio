import React from "react";
import CardInfo from "../Components/CardInfo";

function Card(props) {
  return (
    <div
      className="d-inline-block k-card"
      onClick={e => props.click(props.item)}
    >
      <img
        className="k-card-img"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />

      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subtitle={props.item.subtitle}
          link={props.item.link}
        />
      )}
    </div>
  );
}

export default Card;

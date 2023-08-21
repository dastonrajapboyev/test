import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      image,
      icon,
      title,
      day,
      icon2,
      person,
      icon3,
      raiting,
      review,
      icon4,
      location,
      price,
    } = this.props.data;
    return (
      <div className="card">
        <img className="img" src={image} alt="image" />
        <h3 className="title">{title}</h3>
        <div className="infoDiv">
          <img src={icon} alt="icon" />
          <p>{day}</p>
          <img src={icon2} alt="icon2" />
          <p>{person}</p>
          <img src={icon3} alt="icon3" />
          <p>{raiting}</p>
          <p>{review}</p>
        </div>
        <div className="infoFooter">
          <div className="infoFooterLeft">
            <img src={icon4} alt="icon4" />
            <p>{location}</p>
          </div>
          <div className="infoFooterRight">
            <p className="price">{price}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;

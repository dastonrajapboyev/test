import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { image, title, id, users, review, location, price} = this.props.data;
    return (
      <div style={{border: "2px solid red"}}>
        <img style={{ width: "200px", height: "160px" }} src={image} alt="image" />
        <h3 style={{}}>{title}</h3>
        
      </div>
    )
  }
}
export default Card;
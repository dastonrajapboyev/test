import React from "react";
import { data } from "../../mock";
import Card from "../card";

class Main extends React.Component {
  render() {
    return (
      <div>
        {data.map((item) => {
            return <Card data={item} />;
          })}
      </div>
    )
  }
}

export default Main
import React from "react";
import { data } from "../../mock";
import Card from "../Cards";
// import { Card } from "..components/Card/Card";

class Main extends React.Component {
  render() {
    return (
      <>
        {data.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
      </>
    )
  }
}

export default Main
import React from "react";
import Main from "./components/main"

class Root extends React.Component {
  render (){
    return (
      <div className="wrapper">
        <Main />
      </div>
    )
  }
}

export default Root
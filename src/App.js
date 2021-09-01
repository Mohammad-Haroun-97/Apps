import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import data from "./data.json";
import SelectedBeats from "./components/SelectedBeast.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  showFun = () => {
    this.setState({
      show: true,
    });
  };
  hideFun = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    return (
      <>
      <SelectedBeats
          showFun={this.showFun}
          hideFun={this.hideFun}
          state={this.state.show}
        />
        <Header />
        
        <Main
          data={data}
           showFun={this.showFun} 
           hideFun={this.hideFun} 
           state={this.state.show}

          // showFun={this.showFun} hideFun={this.hideFun} state={this.state.show}
        />

         

        <Footer />
      </>
    );
  }
}

export default App;

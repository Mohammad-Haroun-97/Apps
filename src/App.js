import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import data from "./data.json";
import SelectedBeats from "./components/SelectedBeast.js";
import Form from "./components/form";

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

  filter = (event) => {
    event.preventDefault(); 
    const arrSpecial = data.filter(
      (item) =>
        event.target.value == item.horns || event.target.value == "All"
    );
    this.setState({
      searchQuery: event.target.value,
      data: arrSpecial,
    });
    
  };

  update= (title,img_url,description,horns) => {
    this.setState({
      title:title,
      img_url:img_url,
      description:description,
      horns:horns
      
    })
  }

  render() {
    return (
      <>
        <SelectedBeats
          showFun={this.showFun}
          hideFun={this.hideFun}
          state={this.state.show}
        />
        <Header />
        <Form filter={this.filter} />

        <Main
          data={data}
          showFun={this.showFun}
          hideFun={this.hideFun}
          state={this.state.show}
          update={this.update}

          // showFun={this.showFun} hideFun={this.hideFun} state={this.state.show}
        />

        <Footer />
      </>
    );
  }
}

export default App;

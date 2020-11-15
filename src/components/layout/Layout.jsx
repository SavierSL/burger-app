import React, { Component } from "react";
import classes from "../layout/Layout.css";
import Toolbar from "../navigation/toolbar/Toolbar";
import SideDrawer from "../navigation/sideDrawer/SideDrawer";
class Layout extends Component {
  state = {
    showDrawer: false,
  };
  SideDrawerCloseHandler = () => {
    this.setState({
      showDrawer: false,
    });
  };
  SideDrawerOpenHandler = () => {
    this.setState({
      showDrawer: true,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar openDrawer={this.SideDrawerOpenHandler} />
        <SideDrawer
          open={this.state.showDrawer}
          closed={this.SideDrawerCloseHandler}
        />
        <main className="content">{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;

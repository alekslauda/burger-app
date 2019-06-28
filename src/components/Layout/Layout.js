import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../UI/Navigation/Toolbar/Toolbar";
import classes from "./Layout.css";
import SideDrawer from "../UI/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerToggleHandler = () => {
    this.setState(preveState => {
      return {
        showSideDrawer: !preveState.showSideDrawer
      }
    });
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Aux>
        <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;

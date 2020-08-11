import React, { Component } from "react";

import Block from "./items/block";
class LeftNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { leftNavActive: false };
    this.handleClick = this.handleClick.bind(this);
    this.wrapperRef = React.createRef();
    this.overLayRef = React.createRef();
  }
  componentDidMount() {
    let leftNavActive = this.props.leftNavActive;
    this.setState({ leftNavActive });
  }
  componentDidUpdate() {
    const wrapper = this.wrapperRef.current;
    const overlay = this.overLayRef.current;
    if (this.props.leftNavActive !== this.state.leftNavActive) {
      let leftNavActive = this.props.leftNavActive;
      this.setState({ leftNavActive });
      wrapper.classList.toggle("is-active");
      overlay.classList.toggle("is-active");
    }
  }
  handleClick() {
    let leftNavActive = this.props.leftNavActive;
    leftNavActive = !leftNavActive;
    this.props.updateAppState({ leftNavActive });
  }

  render() {
    return (
      <nav>
        <div ref={this.wrapperRef} className="nav leftnav bg-dark">
          <div className="col">
            <div className="w-100">
              <Block name="Javascript" icon={["fab", "js"]} />
              <Block name="Python" icon={["fab", "python"]} />
              <Block name="Blender" icon={["fas", "cube"]} />
              <Block name="Linux" icon={["fas", "terminal"]} />
              <Block name="Resume" icon={["fas", "address-book"]} />
              <Block name="Hobbies/More" icon={["fas", "mug-hot"]} />
            </div>
          </div>
        </div>
        <div
          onClick={this.handleClick}
          ref={this.overLayRef}
          className="overlay"
        ></div>
      </nav>
    );
  }
}

export default LeftNavBar;

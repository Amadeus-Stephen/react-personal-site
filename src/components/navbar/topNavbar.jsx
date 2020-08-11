import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TopNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { leftNavActive: false };
    this.toggleLeftNav = this.toggleLeftNav.bind(this);
    this.toggleIcon = React.createRef();
    this.toggleArrow = React.createRef();
  }
  componentDidMount() {
    let leftNavActive = this.props.leftNavActive;
    this.setState({ leftNavActive });
  }
  componentDidUpdate() {
    const toggleicon = this.toggleIcon.current;
    const togglearrow = this.toggleArrow.current;
    if (this.props.leftNavActive !== this.state.leftNavActive) {
      let leftNavActive = this.props.leftNavActive;
      this.setState({ leftNavActive });
      toggleicon.classList.toggle("is-active");
      togglearrow.classList.toggle("is-active");
    }
  }
  toggleLeftNav() {
    let leftNavActive = this.props.leftNavActive;
    leftNavActive = !leftNavActive;
    this.props.updateAppState({ leftNavActive });
  }

  render() {
    return (
      <nav className="nav navbar topnav bg-dark ">
        <div className="container">
          <div className="row" onClick={this.toggleLeftNav}>
            <h1 ref={this.toggleIcon} className="toggle-icon text-info">
              <FontAwesomeIcon icon={["fas", "bars"]} />
            </h1>
            <h1 ref={this.toggleArrow} className="toggle-arrow text-info">
              <FontAwesomeIcon icon={["fas", "arrow-right"]} />
            </h1>
          </div>
          <div className="w-25 row justify-content-between">
            <a href="https://github.com/Amadeus-Stephen">
              <h1 className="text-info">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </h1>
            </a>
            <a href="/">
              <h1 className="text-info">
                <FontAwesomeIcon icon={["fab", "youtube"]} />
              </h1>
            </a>
            <a href="/">
              <h1 className="text-info">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </h1>
            </a>
            <a href="/">
              <h1 className="text-info">
                <FontAwesomeIcon icon={["fab", "snapchat"]} />
              </h1>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNavbar;

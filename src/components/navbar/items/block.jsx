import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Block extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.wrapper = React.createRef();
  }
  handleClick() {
    const wrapper = this.wrapper.current;
    wrapper.classList.toggle("is-active");
  }
  render() {
    return (
      <div className="d-inline col">
        <div className="bg-dark card ">
          <h2 className="mb-0">
            <button
              onClick={this.handleClick}
              className="btn w-100"
              type="button"
              name="linux"
            >
              <div className="row">
                <h5 className="text-info">{this.props.name}</h5>
                <h2 className="text-info">
                  <FontAwesomeIcon icon={this.props.icon} />
                </h2>
              </div>
            </button>
          </h2>
        </div>
        <div ref={this.wrapper} className="cs-card-body">
          Hello
        </div>
      </div>
    );
  }
}

export default Block;

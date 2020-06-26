import React, { PureComponent } from "react";

export default class HideMe extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hiddenText: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
  }
  handleClick() {
    this.setState({
      hiddenText: "hidden",
    });
  }

  handleClickTwo() {
    this.setState({
      hiddenText: "",
    });
  }

  render() {
    return (
      <div>
        <div className={this.state.hiddenText}>Hide me!</div>
        <button onClick={() => this.handleClick()}>Hide</button>
        <button onClick={() => this.handleClickTwo()}>Show</button>
      </div>
    );
  }
}

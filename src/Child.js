import React from "react";
import Reeact from "react";

export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <h1>Hey my name is {this.props.name}!</h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Erica">Erica</option>

          <option value="Omar">Omar</option>

          <option value="Leon">Leon</option>
        </select>
      </div>
    );
  }
}

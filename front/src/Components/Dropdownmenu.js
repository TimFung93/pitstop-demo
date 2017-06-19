import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import React, { Component }                                     from 'react';





export default class Dropdownmenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }




  render() {

    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {this.props.name[0][0].name}
         

        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header> Friends</DropdownItem>
          <DropdownItem disabled> {this.props.name[0][2].name}</DropdownItem>
          <DropdownItem> {this.props.name[0][0].name}</DropdownItem>
          <DropdownItem divider />
          <DropdownItem> {this.props.name[0][0].name}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}


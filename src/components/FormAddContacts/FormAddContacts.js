import { React, Component } from "react";
import "./FormAddContacts.css";

class FormAddContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      phone: "",
    };
  }

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleChangePhone = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  addUserToTable = (event) => {
    event.preventDefault();
    const newUser = {
      name: this.state.name,
      username: this.state.username,
      phone: this.state.phone,
      id: this.props.usersId + 1,
    };
    this.props.addUser(newUser);

    this.setState({
      name: "",
      username: "",
      phone: "",
    });

    this.props.closeForm();
  };

  closeFormAndClearInpup = () => {
    this.setState({
      name: "",
      username: "",
      phone: "",
    });

    this.props.closeForm();
  };

  render() {
    if (this.props.showForm) {
      return (
        <div className="form-wrapper">
          <form className="form" onSubmit={this.addUserToTable}>
            <input
              placeholder="Name..."
              type="text"
              className="form-input__name"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
            <input
              placeholder="Username..."
              type="text"
              className="form-input__username"
              value={this.state.username}
              onChange={this.handleChangeUsername}
            />
            <input
              placeholder="Phone..."
              type="number"
              className="form-input__phone"
              value={this.state.phone}
              onChange={this.handleChangePhone}
            />
            <button type="submit">Save</button>
            <button type="button" onClick={this.closeFormAndClearInpup}>
              Close
            </button>
          </form>
        </div>
      );
    }
  }
}
export default FormAddContacts;

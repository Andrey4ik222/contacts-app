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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
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
    const inputs = [
      { name: "name", placeholder: "Name...", type: "text" },
      { name: "username", placeholder: "Username...", type: "text" },
      { name: "phone", placeholder: "Phone...", type: "number" },
    ];

    if (this.props.showForm) {
      return (
        <div className="form-wrapper">
          <form className="form" onSubmit={this.addUserToTable}>
            {inputs.map((elem) => {
              return (
                <input
                  key={elem.name}
                  name={elem.name}
                  placeholder={elem.placeholder}
                  type={elem.type}
                  className={`form-input__${elem.name}`}
                  value={this.state[elem.name]}
                  onChange={this.handleChange}
                />
              );
            })}
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

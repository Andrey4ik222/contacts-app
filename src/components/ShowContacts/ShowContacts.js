import { React, Component } from "react";
import TableContacts from "../TableContacts/TableContacts";
import FormAddContacts from "../FormAddContacts/FormAddContacts";
import "./ShowContacts.css";

class ShowContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showFormBoolian: false,
      isLoading: true,
    };
    this.updateData = this.updateData.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data,
          isLoading: false,
        });
      });
  }

  deleteUser = (index) => {
    const newUsers = this.state.users.filter((user) => user.id !== index);
    this.setState({
      users: newUsers,
    });
  };

  showForm = () => {
    this.setState({
      showFormBoolian: true,
    });
  };

  closeForm = () => {
    this.setState({
      showFormBoolian: false,
    });
  };

  updateData(newHuman) {
    this.setState({
      users: [...this.state.users, newHuman],
    });
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <div className="app-wrapper">
          <TableContacts
            updateData={this.updateData}
            users={this.state.users}
            deleteUser={this.deleteUser}
          />
          <button className="open-form-button" onClick={this.showForm}>
            Add contact
          </button>
          <FormAddContacts
            showForm={this.state.showFormBoolian}
            closeForm={this.closeForm}
            addUser={this.updateData}
            usersId={this.state.users.length}
          />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default ShowContacts;

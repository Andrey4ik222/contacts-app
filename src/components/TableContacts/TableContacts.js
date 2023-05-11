import { React, Component } from "react";
import "./TableContacts.css";

class TableContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users,
    };
  }

  render() {
    return (
      <div className="table-wrapper">
        <table className="table">
          {this.props.users.map((user) => {
            return (
              <tbody key={user.id}>
                <tr>
                  <td key={`table-name-${user.id}`}>{user.name}</td>
                  <td key={`table-username-${user.id}`}>{user.username}</td>
                  <td key={`table-phone-${user.id}`}>{user.phone}</td>
                  <td>
                    <button
                      className="table-delete-contact__button"
                      onClick={() => this.props.deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

export default TableContacts;

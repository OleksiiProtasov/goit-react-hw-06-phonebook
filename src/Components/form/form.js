// import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./style.module.css";
import { useState } from "react";

export default function Form({ onAddContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length === 0 || number.length === 0) {
      alert("Fields must be filled!");
      return;
    }

    onAddContact({ name, number });

    setName("");
    setNumber("");
  };

  return (
    <form className={styles.TaskEditor} onSubmit={handleSubmit}>
      <label className={styles.TaskEditor_label}>
        Name
        <input
          className={styles.TaskEditor_input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.TaskEditor_label}>
        Number
        <input
          className={styles.TaskEditor_input}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={styles.TaskEditor_button} type="submit">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

// export default class Form extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onAddContact({ ...this.state });

// console.log('FFFFFFF', this.props.onAddContact)

//     this.setState({ name: "", number: "" });
//   };
//   render() {
//     return (
//       <form className={styles.TaskEditor} onSubmit={this.handleSubmit}>
//         <label className={styles.TaskEditor_label}>
//           Name
//           <input
//             className={styles.TaskEditor_input}
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label className={styles.TaskEditor_label}>
//           Number
//           <input
//             className={styles.TaskEditor_input}
//             type="text"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleChange}
//           />
//         </label>
//         <button className={styles.TaskEditor_button} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// Form.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
// };

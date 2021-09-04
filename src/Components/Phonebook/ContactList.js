import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteContact } from "../../Redux/actionsR";
import styles from "./style.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const onRemoveContact = (id) => dispatch(deleteContact(id));

  const getContactList = (state) => {
    const { filter, items } = state.contacts;

    return items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contacts = useSelector(getContactList);

  return (
    <ul className={styles.TaskList}>
      {contacts.map(({ name, id, number }) => (
        <li className={styles.TaskList_item} key={id}>
          {name + " : " + number}
          {
            <button
              className={styles.TaskList_button}
              type="button"
              name="delete"
              onClick={() => onRemoveContact(id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;

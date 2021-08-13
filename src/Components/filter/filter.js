import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

export default function Filter({ value, onChangeFilter }) {
  return (
    <label>
      Find contacts by name
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

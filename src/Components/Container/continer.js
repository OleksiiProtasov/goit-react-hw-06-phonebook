import React from "react";
import PropTypes from "prop-types";
import style from "../Container/style.module.css";

const Container = ({ children }) => (
  <div className={style.Container}>{children}</div>
);

export default Container;

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

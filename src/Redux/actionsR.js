import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";
// import types from './typesR';

export const addContact = createAction("contacts/add", (data) => ({
  payload: {
    ...data,
    id: shortid.generate(),
  },
}));

export const deleteContact = createAction("contacts/delete");

export const filterContact = createAction("contacts/changeFilter");

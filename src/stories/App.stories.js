import React from "react";
import SearchBar from "../searchbar/index";

export default {
  title: "SearchBar",
  component: SearchBar
};
const list = [
  { id: 1, name: "item 1" },
  { id: 2, name: "item 2" },
  { id: 3, name: "list item 3" },
  { id: 4, name: "item 4" },
  { id: 5, name: "item 5" },
  { id: 6, name: "item type 6" }
];
function onItemClick(id, name) {
  console.log(id, name);
}
export const Input = () => (
  <SearchBar
    list={list}
    listId="id"
    listItemName="name"
    onItemClick={onItemClick}
    placeholder="Search List"
  />
);

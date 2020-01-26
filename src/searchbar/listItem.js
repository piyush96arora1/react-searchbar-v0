import React from "react";
const ListItem = ({ name, id, onItemClick }) => {
  return (
    <li onClick={onItemClick ? () => onItemClick(id, name) : () => {}}>
      {name}
    </li>
  );
};
export default ListItem;

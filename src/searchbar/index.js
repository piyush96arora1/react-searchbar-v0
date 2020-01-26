import React from "react";
import Utility from "./utility";
import ListItem from "./listItem";
import SearchBarStyle from "./style.js";
import Loader from "../loader";

class index extends React.Component {
  state = { fldValue: "", showList: true };
  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ showList: true });
  };
  render() {
    const { fldValue, showList } = this.state;
    const {
      list,
      listId,
      listItemName,
      minLength = 2,
      noOptions = "No Options",
      onItemClick,
      placeholder = "Search"
    } = this.props;
    const createdList = Utility.getList(list, listId, listItemName);
    const filteredList = createdList.filter(item =>
      item.name.includes(fldValue)
    );
    return (
      <SearchBarStyle>
        <div className="container">
          <div>
            <input
              type="text"
              name="fldValue"
              value={fldValue}
              placeholder={placeholder}
              onChange={e => this.onChange(e)}
            />
          </div>
          {/* <div className="loader-position">
                <Loader />
              </div> */}
          {filteredList &&
            showList &&
            listId &&
            listItemName &&
            fldValue.length >= minLength && (
              <div className="list-container">
                {filteredList.map(item => (
                  <ListItem
                    key={item.id}
                    name={item.name}
                    id={item.id}
                    onItemClick={(id, name) => {
                      this.setState({ fldValue: name, showList: false });
                      onItemClick(id, name);
                    }}
                  />
                ))}
              </div>
            )}
          {filteredList.length === 0 &&
            showList &&
            fldValue.length >= minLength && <ListItem name={noOptions} />}
        </div>
      </SearchBarStyle>
    );
  }
}

export default index;

import styled from "styled-components";


const SearchBarStyle = styled.div`
  li {
    list-style-type: none;
  }
  p {
    margin: 0;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .loader-position {
    position: absolute;
  }
  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    box-shadow: rgba(0, 0, 0, 0.4) 0 0 10px;
    outline:none;
  }
  .container li {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-bottom: none;
    text-align: center;
    cursor: pointer;
    :hover {
      background-color: rgb(28, 126, 209);
      color: #fff;
    }
  }
  .container li:last-child {
    border-bottom: 1px solid #ccc;
  }
`;
export default SearchBarStyle

import { Divider, Input, Col } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {
  console.log(props);
  const [inputValue, setInputValue] = useState('');

  const handleSearchInput = (e) => {
    setInputValue(e.target.value);
    props.searchProp(e.target.value);
  };

  return (
    <Col>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={inputValue} type="text" onChange={handleSearchInput} />
    </Col>
  );
}

export default Search;

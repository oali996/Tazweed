import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';

const Search = () => {
  const [search, setSearch] = useState('');
  const onChange = textValue => setSearch(textValue);

  return (
    <SearchBar
      placeholder="Search for a seller"
      onChangeText={onChange}
      value={search}
      lightTheme={true}
    />
  );
};

export default Search;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

type propsType = {
  handelContentPanel: Function;
};

const Search: React.FC<propsType> = props => {
  const changeFun = (e: any) => {
    if (e.key === 'Enter') props.handelContentPanel('notClubPage', 'searchResult');
  };

  return (
    <div className="content">
      <div className="inputArea">
        <span style={{ marginLeft: '1rem', marginRight: '1rem' }}>
          <FontAwesomeIcon className="icon" icon={faSearch} size="3x" />
        </span>
        <input
          className="searchInput"
          type="text"
          placeholder="검색어를 입력해주세요! 예)인싸어플 최고~"
          onKeyUp={changeFun}
        ></input>
      </div>
    </div>
  );
};

export default Search;

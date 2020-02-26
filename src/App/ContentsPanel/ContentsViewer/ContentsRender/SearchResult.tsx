import React from 'react';
import CardListAntd from './CardListAntd';

type propsType = {
  handelContentPanel: Function;
};

const SearchResult: React.FC<propsType> = props => {
  return (
    <div className="content">
      <h1>
        "<span>눈누는 눈누해</span>"에 대한 검색 결과입니다.
      </h1>
      <CardListAntd handelClubClick={props.handelContentPanel}></CardListAntd>
    </div>
  );
};

export default SearchResult;

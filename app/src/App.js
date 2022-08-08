import React from 'react'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import List from './components/List/List.jsx'
import Pagination from './components/Pagination/Pagination.jsx'
import { useCompaniesAPI } from './hooks/useCompaniesAPI'

import './App.css';

function App() {
  const {
    isLoading,
    companies,
    page,
    companiesAmount,
    searchValue,
    onNextPageClick,
    onPreviousPageClick,
    onValueUpdate
  } = useCompaniesAPI();

  const onCancelButton = () => {
    onValueUpdate('')
  }

  return (
    <div className="App">
      <SearchBar
        value={searchValue}
        onValueUpdate={onValueUpdate}
        onCancelButton={onCancelButton}
        />
      <List 
        companiesData={companies}
      />
      <Pagination 
        companiesAmount={companiesAmount}
        currentPage={page}
        onNextPageClick={onNextPageClick}
        onPreviousPageClick={onPreviousPageClick}
      />
    </div>
  );
}

export default App;

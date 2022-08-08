export const filterCompaniesData = (arr, searchValue) => {
    return arr.filter((el) => el.companyName.toLowerCase().includes(searchValue.toLowerCase()))
  }
  
export  const getAPICompaniesData = (results) => {
    const mappedData = results?.map((el, idx) => {
      return {
          id: idx,
          companyName: el.name,
          industry: el.industry,
          activeProjects: el.num_active_projects,
      }
  })
    return mappedData;
  }
  
export const sliceList = ( currentPage, companiesPerPage, companiesData ) => {
    const indexOfLastCompany = currentPage * companiesPerPage;
    const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
    const currentCompanies = companiesData.slice(indexOfFirstCompany, indexOfLastCompany);
  
    return currentCompanies;
  }
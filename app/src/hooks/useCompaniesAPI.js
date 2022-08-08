import { useState, useEffect } from 'react'
import axios from 'axios'
import { getAPICompaniesData, filterCompaniesData } from '../utils/utils'

const PROXY_SERVER_URI = 'http://localhost:4444'

export const useCompaniesAPI = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [companiesAmount, setCompaniesAmount] = useState(0)
    const [companies, setCompanies] = useState([])
    const [filteredCompanies, setFilteredCompanies] = useState([])
    const [previous, setPrevious] = useState(false)
    const [next, setNext] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    
    useEffect(() => {
        setIsLoading(true)
        axios({
            url: `${PROXY_SERVER_URI}/companies/?page=${page}`,
            method: 'get'
          })
            .then(result => {
                setIsLoading(false)
                if(!result || !result.data || !Array.isArray(result.data.results)) throw new Error('useCompaniesAPI::Invalid response')

                const nextCompanies = getAPICompaniesData(result.data.results)

                setCompanies(nextCompanies)
                setCompaniesAmount(result.data.count)
                setPrevious(Boolean(result.data.previous))
                setNext(Boolean(result.data.next))

                setSearchValue('')
                setFilteredCompanies([])
            })
            .catch(error => {
                setIsLoading(false)
                console.log('error', error)
            });
    }, [page])

    const onNextPageClick = () => {
        if(!next) return
        setPage(page + 1)
    }
    const onPreviousPageClick = () => {
        if(!previous) return
        setPage(page - 1)
    }
    const onValueUpdate = (value) => {
        setSearchValue(value)

        if(!value) return

        setFilteredCompanies(filterCompaniesData(companies, searchValue))
      }

    return {
        isLoading,
        page,
        companies: searchValue.length ? filteredCompanies : companies,
        companiesAmount,
        searchValue,
        onNextPageClick,
        onPreviousPageClick,
        onValueUpdate
    }
}
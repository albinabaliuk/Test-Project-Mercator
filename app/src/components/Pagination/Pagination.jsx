import './Pagination.styles.scss';

function Pagination( {companiesAmount, currentPage, onNextPageClick, onPreviousPageClick} ) {

    return(
        <div className='pagination-wrapper'>
            <div className='buttons-wrapper'>
                <div 
                    className='previous-page-button'
                    onClick={() => onPreviousPageClick(currentPage)}
                >&#60;</div>
                <div className='page-indicator'>{currentPage}</div>
                <div 
                    className='next-page-button'
                    onClick={() => onNextPageClick(currentPage)}
                >&gt;</div>
            </div>
            <div className='total-companies-amount'>{companiesAmount} Companies found</div>
        </div>
    )
}

export default Pagination;
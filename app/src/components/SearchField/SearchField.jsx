import './SearchField.styles.scss'

function SearchField({ color, searchValue, placeholder, onValueUpdate, onCancelButton, value }) {
    return(
        <div className='component-wrapper'>
            <div 
                className='cancel-button'
                onClick={() => onCancelButton()}>
            </div>
            <input
                className="search-input"
                type="text" 
                value={value}
                placeholder={placeholder}
                onChange={(e) => onValueUpdate(e.target.value)}>
            </input>
        </div>
    )
}

export default SearchField;
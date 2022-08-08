import './SearchBar.styles.scss';
import SearchField from '../SearchField/SearchField';

function SearchBar({ value, onValueUpdate, onCancelButton }) {
    return(
        <div className="seachBarWrapper">
            <SearchField 
                placeholder={"Search Company Names (2 letters minimum)"}
                value={value}
                onValueUpdate={onValueUpdate}
                onCancelButton={onCancelButton}
            />
        </div>
    )
}

export default SearchBar;

import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

    return (
        <div className='search-bar-div'>
            <div className='logo-div'>
                <SearchIcon/>
            </div>
            <input placeholder='Search' className='search-input'></input>
        </div>
    )
}

export default SearchBar;
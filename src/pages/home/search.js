import { useRef } from 'react';
import './search.css';
import Form from 'react-bootstrap/Form';
import { getImagesUsingKeyword } from '../../services/unsplash';

const Search = (props) => {
    const searchInput = useRef(null);
    const { setSearchResult, setSearchValue } = props;

    const handleSearch = async (event) => {
      event.preventDefault();
      const data = await getImagesUsingKeyword(searchInput.current.value);
      setSearchResult(data?.results);
      setSearchValue(searchInput.current.value);
    }
  
    return (
        <div className='search-wrapper'>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 header-search"
              aria-label="Search"
              ref={searchInput}
            />
          </Form>
          <button className='search-btn' onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Search;
import { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
import { getImagesUsingKeyword } from '../../services/unsplash';

const Header = (props) => {
  const searchInput = useRef(null);
  const { setSearchResult, setSearchValue } = props;

  const handleSearch = async (event) => {
    event.preventDefault();
    const data = await getImagesUsingKeyword(searchInput.current.value);
    setSearchResult(data?.results);
    setSearchValue(searchInput.current.value);
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='header-wrapper'>
        <div className='logo'>Image Gallery</div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 header-search"
              aria-label="Search"
              ref={searchInput}
            />
            <button className='header-search-btn' onClick={handleSearch}>Search</button>
          </Form>
            <Nav
            className="me-auto my-2 my-lg-0 links"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='navbar-links'>
            <Nav.Link href="#action1">Explore</Nav.Link>
            <Nav.Link href="#action2">Collection</Nav.Link>
            <Nav.Link href="#action3">Community</Nav.Link>
            </div>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
import React, {useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import "./SearchForm.css";

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchText.current.value);
    navigate("/book");
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type = "text" className='form-control' placeholder='Search here ...' ref = {searchText} />
              <button type = "submit" className='flex flex-c' onClick={handleSubmit}>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
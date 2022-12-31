import React, { useState } from 'react';
import { blogList } from '../data';
import EmptyList from './Common/EmptyList';
import BlogList from './Home/BlogList';
import Header from './Home/Header';
import SearchBar from './Home/SearchBar';

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  const handleSearchSupmit=(event)=>{
    event.preventDefault();
    handleSearchResults()
  };

const handleSearchResults=()=>{
  const allBlogs=blogList;
  const filteredBlogs = allBlogs.filter((blog) =>
  blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
  setBlogs(filteredBlogs);

};

const handleClrearSearch = () =>{
  setBlogs(blogList);
  setSearchKey('');
}

  return (
    <div>
      <Header />
      <SearchBar value={searchKey}
        clearSearch={handleClrearSearch}
        formSupmit={handleSearchSupmit}
        handleSearchKey={(e)=>setSearchKey(e.target.value)} />
      {!blogs.length ? <EmptyList />:<BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
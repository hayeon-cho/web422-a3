import { useState } from "react";
import "./css/Search.css";

function Search({ setSearch }) {
  const [keyword, setKeyword] = useState("");
  const handleChange = e => {
    setKeyword(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSearch(keyword);
    setKeyword("");
  };
  return (
    <form id="search" onSubmit={handleSubmit}>
      <input type="text" value={keyword} placeholder="Please input any keyword for videos" onChange={handleChange} />
    </form>
  );
}
export default Search;

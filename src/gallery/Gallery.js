import { useState, useEffect } from "react";
import axios from "axios";
import "./Gallery.css";

const Gallery = () => {
  const APP_KEY = "40939938-ccf9148e9c4c0dd4e157dd371";
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const URL = `https://pixabay.com/api/?key=${APP_KEY}&image_type=photo`;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(URL);
        setData(res.data.hits);
        console.log("성공", res.data);
      } catch (err) {
        console.log("오류", err);
      }
    };
    getData();
  }, [search]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`${URL}&q=${search}`);
      setData(res.data.hits);
      console.log("성공", res.data);
    } catch (err) {
      console.log("오류", err);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
      </div>
      <ul>
        {data &&
          data.map((item) => (
            <li>
              <h3>#{item.user}</h3>
              <img key={item.id} src={item.webformatURL} alt={item.tags} />
              <p>태그: {item.tags}</p>
              <p>뷰어: {item.views}</p>
              <p>종류: {item.type}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Gallery;

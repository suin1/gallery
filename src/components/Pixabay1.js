import { useEffect, useState } from "react";
import axios from "axios";

const Pixabay1 = () => {
  const APP_KEY = "40939938-ccf9148e9c4c0dd4e157dd371";
  const TEXT = "오리";
  const URL = `https://pixabay.com/api/?key=${APP_KEY}&q=
  ${TEXT}&image_type=photo&lang=ko`;

  const [data, setData] = useState([]);

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
  }, []);

  return (
    <div>
      <h2>Pixabay</h2>
      <div>
        {data &&
          data.map((image) => (
            <img
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
              style={{ width: 150, height: 150 }}
            />
          ))}
      </div>
    </div>
  );
};

export default Pixabay1;

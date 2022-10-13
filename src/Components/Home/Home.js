import React, { useEffect, useState } from "react";
// import { getMediaApi } from "../ApiCall/MediaApiCall";
import axios from "axios";
import Video_container from "./Video_container";
import "./Home.css";

function Home() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`http://localhost:8000/media/all`);
      setData(data.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="home">
        {Data.map((video) => {
          return (
            <>
              <Video_container
                key={video._id}
                id={video._id}
                name={video.name}
                date={video.createdAt}
                img={video.img}
                video={video.videos[0]}
                userName={video.userName}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Home;

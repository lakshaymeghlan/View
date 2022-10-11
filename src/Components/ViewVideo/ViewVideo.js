import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ViewVideo.css";
// import * as SlIcons from "react-icons/Sl";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

function ViewVideo() {
  const [data, setData] = useState();
  const params = useParams();
  useEffect(() => {
    const fetchData = async (id) => {
      const data = await axios.get(
        `http://localhost:8000/media/get/${params.id}`
      );
      setData(data.data);
      console.log(data.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {data ? (
        <>
          <div className="card view_video_contain">
            <iframe
              className="card-img-top home_video_view"
              src={data.videos}
            ></iframe>
          </div>
          <div style={{ color: "#f5f5f5" }}>
            {/* <h1>{data.name}</h1> */}
          </div>
        </>
      ) : (
        ""
      )}
      <div>
        <AiIcons.AiOutlineLike
          className="like_icons"
          style={{ color: "#376f70" }}
          size={50}
        />
        <AiIcons.AiOutlineDislike
          className="like_icons"
          style={{ color: "#376f70" }}
          size={50}
        />
        <RiIcons.RiShareForwardLine
          className="like_icons"
          style={{ color: "#376f70" }}
          size={50}
        />
      </div>
    </>
  );
}

export default ViewVideo;

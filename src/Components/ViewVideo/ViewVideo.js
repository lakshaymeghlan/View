import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
          <div>{data.name}</div>
          <iframe src={data.videos}></iframe>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default ViewVideo;

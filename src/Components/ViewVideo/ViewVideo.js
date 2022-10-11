import React from "react";
import { getSingleApi } from "../ApiCall/MediaApiCall";

function viewVideo() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`http://localhost:8000/media/get/${id}`);
      setData(data.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div></div>
    </>
  );
}

export default viewVideo;

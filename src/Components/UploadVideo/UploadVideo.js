import React, { useState, useEffect } from "react";
import { Typography, Button, Input } from "antd";
import Dropzone from "react-dropzone";
import * as AiIcons from "react-icons/ai";
import "./UploadVideo.css";
import { mediaCreateApi, getMediaApi } from "../ApiCall/MediaApiCall";

const { Title } = Typography;
const { TextArea } = Input;

function UploadVideo() {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Video, setVideo] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.currentTarget.value);
  };

  const handleChangeDecsription = (event) => {
    console.log(event.currentTarget.value);

    setDescription(event.currentTarget.value);
  };

  // useEffect(() => {
  //   const get = getMediaApi();
  //   console.log(get);
  // }, []);

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2} style={{ color: "#f5f5f5" }}>
          {" "}
          Upload Video
        </Title>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* <Dropzone multiple={false} maxSize={800000000}>
            {({ getRootProps, getInputProps }) => (
              <div
                style={{
                  width: "300px",
                  height: "240px",
                  border: "1px solid lightgray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <AiIcons.AiOutlinePlus style={{ fontSize: "4rem" }} />
              </div>
            )}
          </Dropzone> */}
        <input
          type="file"
          name="upload"
          onChange={(e) => {
            console.log(e.target.files[0]);
            setVideo(e.target.files);
          }}
        />
      </div>

      <br />
      <br />
      <label style={{ color: "#f5f5f5", "margin-left": "-0.5rem" }}>
        Title
      </label>
      <Input
        onChange={handleChangeTitle}
        // value={title}
        style={{ "margin-left": "-0.5rem" }}
      />

      <label style={{ color: "#f5f5f5", "margin-left": "-0.5rem" }}>
        Description
      </label>
      <TextArea
        onChange={handleChangeDecsription}
        // value={Description}
        className="mytext_1"
        style={{ "margin-left": "-0.5rem" }}
      />

      <br />
      <br />

      <Button
        className="button_rev_"
        type="primary"
        size="large"
        onClick={() => mediaCreateApi(title, Description, Video)}
      >
        Submit
      </Button>
    </div>
  );
}

export default UploadVideo;

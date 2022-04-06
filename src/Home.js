import React, { useState } from "react";

const videoSource = [
  {
    title: "Vedio One",
    source: "https://www.youtube.com/watch?v=pGQ_c22Chgg",
    comment: "a sample comment",
    showComment: true,
  },
  {
    title: "Vedio two",
    source: "https://www.youtube.com/watch?v=pGQ_c22Chgg",
    comment: "a sample comment",
    showComment: true,
  },
  {
    title: "Vedio three",
    source: "https://www.youtube.com/watch?v=pGQ_c22Chgg",
    comment: "a sample comment",
    showComment: true,
  },
];

const Home = () => {
  const [show, notShow] = useState(true);

  const handleButton = (e) => {
    notShow(!show);
    console.log(e);
  };
  return (
    <>
      <div className="container">
        <h2 className="text-center">Create a sample Video UI</h2>
        <div className="row text-center">
          {videoSource.map((single) => (
            <div className="col-md-4">
              <h3>{single.title}</h3>
              <video class="embed-responsive-item" controls autoplay loop muted>
                <source src={single.source} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button onClick={(e) => handleButton(e)}>hide comment</button>
              {show && <div className="comment">{single.comment}</div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

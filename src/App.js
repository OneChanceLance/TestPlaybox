import { useState } from "react";

function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}

export default function App() {
  return <Greeting name="world" />;
  //return <Video video = ""
}

function TestList() {
  const [name, testArticleAttribute1] = useState("");
}

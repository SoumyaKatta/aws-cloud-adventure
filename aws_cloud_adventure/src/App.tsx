import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Home />
      <video width={500} height={500} controls loop autoPlay muted>
        <source
          src="https://d3t8dlloq2ba6q.cloudfront.net/5124659_People_Person_3840x2160.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

export default App;

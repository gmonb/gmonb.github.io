import image from "../../assets/maurigregory.jpg";
import Header from "../home/header";

function App() {
  return (
    <div>
      <Header />
      <img src={image} />
    </div>
  );
}

export default App;

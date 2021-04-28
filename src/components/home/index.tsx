import image from "../../assets/maurigregory.jpg";
import * as Style from "./style";
import Header from "./header";

function Home() {
  return (
    <div>
      <Header />
      <Style.MainImageContainer>
        <Style.MainImage src={image} alt="mauri-and-gregory" />
      </Style.MainImageContainer>
    </div>
  );
}

export default Home;

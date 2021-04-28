import image from "../../assets/maurigregory.jpg";
import * as Style from "./style";

function MainImage() {
  return (
    <Style.MainImageContainer>
      <Style.MainImage src={image} alt="mauri-and-gregory" />
    </Style.MainImageContainer>
  );
}

export default MainImage;

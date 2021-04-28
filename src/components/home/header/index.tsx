import * as Style from "./style";

const LINKS = ["travel", "food", "fashion", "sports"];

function Header() {
  return (
    <Style.Header>
      <Style.Links>
        {LINKS.map((link) => (
          <div>{link}</div>
        ))}
      </Style.Links>
    </Style.Header>
  );
}

export default Header;

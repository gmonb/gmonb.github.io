import * as Style from "./style";

const LINKS = ["travel", "food", "fashion", "sports"];

function Header() {
  return (
    <Style.Header>
      <Style.Links>
        {LINKS.map((link) => (
          <Style.Link key={link}>{link}</Style.Link>
        ))}
      </Style.Links>
    </Style.Header>
  );
}

export default Header;

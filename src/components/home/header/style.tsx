import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 15px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Link = styled.div`
  margin: 0 10px;

  :hover {
    cursor: pointer;
  }
`;

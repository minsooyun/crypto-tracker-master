import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

function ToggleDark() {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <ToggleDarkBtn onClick={toggleDarkAtom}>
      {isDark ? <BtnText>Dark mode</BtnText> : <BtnText>Light mode</BtnText>}
    </ToggleDarkBtn>
  );
}

const ToggleDarkBtn = styled.button`
  width: 80px;
  height: 80px;
  background-color: #355d90;
  border: none;
  border-radius: 50%;
  padding: 1rem;
  color: #fff;
  position: fixed;
  bottom: 1rem;
  left: 0.5rem;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

const BtnText = styled.span`
  display: block;
  font-size: 1rem;
  color: ${(props) => props.theme.bgColor};
  text-align: center;
`;

export default ToggleDark;

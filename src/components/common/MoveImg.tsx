import { Link } from "react-router-dom";
import { styled } from "styled-components";

interface Props {
  to: string;
  src: string;
  alt?: string;
  blank?: boolean;
  mobileImg?: boolean;
}

const MoveImg: React.FC<Props> = ({ to, src, alt, blank, mobileImg }) => {
  const imgRoot = mobileImg ? "m_images" : "images"
  return (
    blank ? (
      <a href={to} target="_blank" rel="noopener noreferrer">
        <img src={`/${imgRoot}/${src}`} alt={alt} />
      </a>
    ) : (
      <MoveImgWrapper to={`/${to}`}>
        <img src={`/${imgRoot}/${src}`} alt={alt} />
      </MoveImgWrapper>
    )
  );
}

export default MoveImg;

const MoveImgWrapper = styled(Link)`
  width: auto;
  height: 100%;
`;

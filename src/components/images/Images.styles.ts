import styled from "styled-components";

export const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  overflow: hidden;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`;

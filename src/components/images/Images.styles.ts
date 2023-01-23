import styled from "styled-components";

export const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  overflow: hidden;
  justify-content: center;
  //align-items: stretch;
  gap: 20px;
  margin-top: 50px;
  //column-count: 1;

  ${({ theme }) => theme.media.sm} {
    //column-count: 2;
  }
  ${({ theme }) => theme.media.md} {
    //column-count: 3;
  }
  ${({ theme }) => theme.media.lg} {
    //column-count: 4;
  }
`;
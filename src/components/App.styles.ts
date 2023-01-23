import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.size.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.size.threeUnits} 0;
`;

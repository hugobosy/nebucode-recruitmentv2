import styled from "styled-components";

export const HistoryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.size.unit};
  padding: ${({ theme }) => theme.size.unit} 0;
`;

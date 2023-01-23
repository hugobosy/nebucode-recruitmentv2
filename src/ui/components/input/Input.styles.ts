import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.size.twoUnits}
    ${({ theme }) => theme.size.threeUnits};
  border-radius: ${({ theme }) => theme.size.unit};
  border: none;
  transition: all 0.4s ease-in-out;
  &:focus {
    box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.5);
    outline: none;
  }
`;

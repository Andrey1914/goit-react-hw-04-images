import styled from '@emotion/styled';

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: auto;
  padding: ${p => p.theme.space[3]}px;
  cursor: pointer;
  border: ${p => p.theme.borders.none};
  transition: transform 250ms ease-in-out;

  color: ${p => p.theme.colors.text};
  :hover,
  :focus {
    transform: scale(1.08);
  }
`;

export const BlueButton = styled(Btn)`
  gap: 10px;
  width: ${p => p.theme.space[7]}px;
  height: ${p => p.theme.space[5]}px;
  background-color: rgb(101, 227, 255);

  :hover,
  :focus {
    color: ${p => p.theme.colors.textHover};
    transform: scale(1.08);
  }
`;

import styled from "styled-components";

export const SwitchContainer = styled.div`
  position: absolute; /* Абсолютное позиционирование */
  top: 20px; /* Отступ сверху */
  right: 20px; /* Отступ справа */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 27px;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  // &:checked + span {
  //   background-color: ${({ theme }) => theme.text};
  // }

  &:checked + span:before {
    transform: translateX(25px);
  }
`;

export const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.background};
  transition: 0.4s;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 25px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background-color: ${({ theme }) => theme.text};
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Icon = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

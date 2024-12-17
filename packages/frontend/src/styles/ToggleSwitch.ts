import styled from 'styled-components';

export const SwitchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
`;

export const Icon = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: auto;
    }
`;

export const SwitchLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
`;

export const SwitchInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + div {
        background-color: #2196F3;
    }

    &:checked + div::before {
        transform: translateX(26px);
    }
`;

export const SwitchSlider = styled.div`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 24px;

    &::before {
        content: "";
        position: absolute;
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
    }
`;

import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
    background-color: ${({ theme }) => theme.background};

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

export default HeaderContainer;
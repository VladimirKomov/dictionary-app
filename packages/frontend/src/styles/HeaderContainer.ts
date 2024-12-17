import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

export default HeaderContainer;
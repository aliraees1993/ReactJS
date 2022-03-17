import styled from 'styled-components';

const FOOTER = styled.footer`
    padding: 1.2rem calc(2.5rem + 2.5vw);
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--placeholder);
    background: var(--nav);
`;

const Footer = () => {
    return <FOOTER>© 2022 Company Name</FOOTER>;
};

export default Footer;

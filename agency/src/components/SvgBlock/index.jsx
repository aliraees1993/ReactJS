import styled from 'styled-components';

const Rb = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    position: relative;

    @media only Screen and (max-width: 48em) {
        display: none;
    }

    svg {
        width: 100%;
        height: auto;
    }
`;

const SvgBlock = ({ svg }) => {
    return (
        <Rb id="svgBlock">
            <img src={svg} alt="Services" />
        </Rb>
    );
};

export default SvgBlock;

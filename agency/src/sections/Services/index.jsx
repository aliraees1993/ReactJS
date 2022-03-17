import styled from 'styled-components';
import Tube from '../../assets/images/3dtube.png';
import Cone from '../../assets/images/3dtriangle.png';
import Capsule from '../../assets/images/3dcapsule.png';
import designSvg from '../../assets/images/Design.svg';
import developeSvg from '../../assets/images/Develope.svg';
import supportSvg from '../../assets/images/Support.svg';
import TextBlock from '../../components/TextBlock';
import SvgBlock from '../../components/SvgBlock';

const ServiceSection = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    z-index: -1;
    background-color: var(--black);
`;

const Title = styled.h1`
    color: var(--white);
    display: inline-block;
    font-size: 2rem;
    margin-top: 1rem;
    position: relative;
    &::before {
        content: '';
        height: 1px;
        width: 50%;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0.5rem);
        border-bottom: 2px solid var(--purple);
    }
`;

const Line = styled.span`
    border-left: 4px solid var(--background);
    height: 4rem;
    margin-top: 2rem;
    border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
    width: 0;
    height: 0;
    border-left: 1.2rem solid transparent;
    border-right: 1.2rem solid transparent;
    border-top: 2rem solid var(--background);
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10rem 10rem;
    position: relative;

    @media only Screen and (max-width: 64em) {
        margin: 10rem calc(4rem + 5vw);
    }

    @media only Screen and (max-width: 48em) {
        display: block;
        &:last-child {
            margin-bottom: 10rem;
        }
    }

    @media only Screen and (max-width: 40em) {
        margin: 15rem 5rem 0 5rem;
        &:last-child {
            margin-bottom: 10rem;
        }
    }
`;

const OBJ = styled.div`
    position: absolute;
    top: 80%;
    right: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;

    @media only Screen and (max-width: 48em) {
        opacity: 0.5;
    }
`;

const Services = () => {
    return (
        <ServiceSection id="services">
            <Background>
                <Title className="title">What We Do</Title>
                <Line id="line" />
                <Triangle id="triangle" />
            </Background>

            <Content>
                <TextBlock
                    topic="Design"
                    title={<h1>We build award winning Designs</h1>}
                    subText={
                        <h5>We help clients to build great design to attract more customers</h5>
                    }
                />
                <OBJ>
                    <img src={Tube} alt="Tube Object" width="400" height="400" />
                </OBJ>
                <SvgBlock svg={designSvg} />
            </Content>
            <Content>
                <TextBlock
                    topic="Develop"
                    title={<h1>We Develope high quality Web & App</h1>}
                    subText={
                        <h5>
                            We build appropriate solution to develope your website & app with best
                            tools available
                        </h5>
                    }
                />
                <OBJ>
                    <img src={Cone} alt="Cone Object" width="400" height="400" />
                </OBJ>
                <SvgBlock svg={developeSvg} />
            </Content>
            <Content>
                <TextBlock
                    topic="Support"
                    title={<h1>We provide support for your digital presence</h1>}
                    subText={
                        <h5>
                            Once your system is online, we will stay on hand to help you use it and
                            provide technical support and maintenance <br /> your business
                        </h5>
                    }
                />
                <OBJ>
                    <img src={Capsule} alt="Capsule Object" width="400" height="400" />
                </OBJ>
                <SvgBlock svg={supportSvg} />
            </Content>
        </ServiceSection>
    );
};

export default Services;

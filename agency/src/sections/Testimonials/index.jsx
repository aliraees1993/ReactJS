import React, { lazy } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import avatar1 from '../../assets/images/avatar-1.jpg';
import avatar2 from '../../assets/images/avatar-2.jpg';
import avatar3 from '../../assets/images/avatar-3.jpg';
import avatar4 from '../../assets/images/avatar-4.jpg';
const Card = lazy(() => import('../../components/Card/index'));

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5rem 0;
`;

const Title = styled.h1`
    color: var(--black);
    display: inline-block;
    font-size: calc(1rem + 1.5vw);
    margin-top: 1.5rem;
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

const Carousal = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only Screen and (max-width: 40em) {
        width: 90vw;
        .slick-slider .slick-arrow {
            display: none;
        }
    }

    .slick-slider .slick-arrow:before {
        color: var(--black);
        font-size: 1.5rem;

        @media only Screen and (max-width: 40em) {
            display: none;
        }
    }

    .slick-slider .slick-dots button:before {
        color: var(--black);
        font-size: 1.5rem;
    }

    .slick-slide.slick-active {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0;
        padding: 0;
        margin-bottom: 3rem;
    }
`;

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Section>
            <Title>Few good words about us!</Title>
            <Carousal>
                <Slider {...settings}>
                    <Card
                        text="Lorem ipsum dolor sit amet adipiscing bibendum sem orci tempus aliquet gravida, orci amet iaculis aptent blandit quam accumsan donec in facilisis, cursus ante curabitur aliquet."
                        name="Jenny (CodeCall)"
                        image={avatar1}
                    />

                    <Card
                        text="Lorem ipsum dolor sit amet adipiscing bibendum sem orci tempus aliquet gravida, orci amet iaculis aptent blandit quam accumsan donec in facilisis, cursus ante curabitur aliquet."
                        name="Jenny (CodeCall)"
                        image={avatar2}
                    />

                    <Card
                        text="Lorem ipsum dolor sit amet adipiscing bibendum sem orci tempus aliquet gravida, orci amet iaculis aptent blandit quam accumsan donec in facilisis, cursus ante curabitur aliquet."
                        name="Jenny (CodeCall)"
                        image={avatar3}
                    />

                    <Card
                        text="Lorem ipsum dolor sit amet adipiscing bibendum sem orci tempus aliquet gravida, orci amet iaculis aptent blandit quam accumsan donec in facilisis, cursus ante curabitur aliquet."
                        name="Jenny (CodeCall)"
                        image={avatar4}
                    />
                </Slider>
            </Carousal>
        </Section>
    );
};

export default Testimonials;

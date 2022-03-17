import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Home = () => {
    return (
        <Container>
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <Contact />
        </Container>
    );
};

export default Home;

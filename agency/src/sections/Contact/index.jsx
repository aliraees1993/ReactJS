import Facebook from '../../assets/images/facebook-square-brands.svg';
import LinkedId from '../../assets/images/linkedin-brands.svg';
import Twitter from '../../assets/images/twitter-square-brands.svg';
import Instagram from '../../assets/images/instagram-square-brands.svg';
import styled from 'styled-components';

const ContactSection = styled.section`
    width: 100vw;
    padding: calc(2.5rem + 2.5vw) 0;
    background-color: var(--black);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: var(--white);
    display: inline-block;
    font-size: 2rem;
    margin-bottom: 3rem;
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

const Icons = styled.div`
    display: flex;
    margin-bottom: 3rem;

    a {
        &:hover {
            img {
                filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg) brightness(100%)
                    contrast(97%);
            }
        }
        &:not(:last-child) {
            margin-right: 2rem;
        }
        img {
            width: 3rem;
            height: 3rem;
        }
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
        padding: 1rem calc(0.5rem + 1vw);
        margin-bottom: 1rem;
        background-color: var(--nav);
        border: none;
        border-radius: 4px;
        color: var(--placeholder);
        &:active,
        &:focus {
            border: 1px solid var(--purple);
        }
        &::placeholder {
            color: var(--placeholder);
            opacity: 0.6;
        }
        &[name='name'] {
            margin-right: 2rem;
        }
    }

    textarea {
        padding: 1rem calc(0.5rem + 1vw);
        margin-bottom: 1rem;
        background-color: var(--nav);
        border: none;
        border-radius: 4px;
        color: var(--placeholder);
        margin-bottom: 2rem;
        &:focus,
        &:active {
            border: 1px solid var(--purple);
        }
        &::placeholder {
            color: var(--placeholder);
            opacity: 0.6;
        }
    }

    button {
        background-color: var(--white);
        color: var(--black);
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        border-radius: 20px;
        cursor: pointer;
        font-size: calc(0.5rem + 0.5vw);
        font-weight: 700;
        display: flex;
        align-items: center;
        &:hover {
            background: var(--purple);
            color: var(--white);
        }
    }
`;

const Row = styled.div`
    @media only Screen and (max-width: 40em) {
        display: flex;
        flex-direction: column;
        input {
            &[name='name'] {
                margin-right: 0;
            }
        }
    }
`;
const Contact = () => {
    return (
        <ContactSection id="contact">
            <Title>Get in touch</Title>
            <Icons>
                <a href="https://www.facebook.com/">
                    <img src={Facebook} alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/">
                    <img src={LinkedId} alt="LinkedId" />
                </a>
                <a href="https://twitter.com/">
                    <img src={Twitter} alt="Twitter" />
                </a>
                <a href="https://www.instagram.com/">
                    <img src={Instagram} alt="Instagram" />
                </a>
            </Icons>
            <Form>
                <Row>
                    <input name="name" type="text" placeholder="your name" />
                    <input name="email" type="email" placeholder="enter working email id" />
                </Row>
                <textarea name="" id="" cols="30" rows="2" placeholder="your message"></textarea>
                <div style={{ margin: '0 auto' }}>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                        }}>
                        Submit
                    </button>
                </div>
            </Form>
        </ContactSection>
    );
};

export default Contact;

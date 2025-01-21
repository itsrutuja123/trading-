import react from "react";
import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Hero from '../landing_page/home/Hero';

//Test suite to write multiple test cases
//describing the test 
describe('Hero Component', ()=>{
    test('renders hero image',()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText("Hero Image"); // loads the image with the help of alt text image component
        expect(heroImage).toBeInTheDocument(); //expect function to decribe what output we are expecting
        expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');


    });
    test('render signup button', () => {
        render(<Hero />);
        const signupButton = screen.getByText(/signup for free/i); 
        expect(signupButton).toBeInTheDocument(); // Check if the button is rendered
        expect(signupButton).toHaveClass('btn-primary'); // Check for the CSS class
    });
    
});

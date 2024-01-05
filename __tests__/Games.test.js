import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';


//import '@testing-library/jest-dom';
// import '@testing-library/jest-dom/extend-expect';
import Games from '../client/components/Games.jsx';
import MemoryGame from '../client/components/MemoryGame';
import Cards from '../client/components/Cards';
import Card from '../client/components/Card';

describe("Games component", () => {
    it("should render the Games component correctly", () => {
        render(
        <Router>
            <Games />
        </Router>
        );
        //check to see if img is rendered
        const element = screen.getByRole("img");
        expect(element).toBeInTheDocument();
    })
});



// describe("Games component", () => {
//     it("should render the Games component correctly", () => {
//         render(
//         <Router>
//             <Games />
//         </Router>
//         );
//     })
//     it("should render photo", () => {
//         const element = screen.getByRole("img");
//         expect(element).toBeInTheDocument();
//     })
//  });
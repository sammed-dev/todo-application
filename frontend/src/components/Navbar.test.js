import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TodoContainer from './TodoContainer';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';


const WithReactRouter = ()=>{
    return(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    )
}

it("navbar", ()=>{
    render(<WithReactRouter />)
    const todoText = screen.getByText(/🆃🅾🅳🅾🆂/i)
    expect(todoText).toBeInTheDocument()
})
import {getByPlaceholderText, render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
// import axiosmock from 'axios'

jest.mock('axios', () => ({
    get: () => Promise.resolve({ data: 'data' }),
}));

const todoList = jest.fn()

const WithReactRouter = ()=>{
    return(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
}

it("input box of home page", ()=>{
    render(<Home />)
    const input = screen.getByPlaceholderText(/Add new todo/i)
    expect(input.closest("input").value).toEqual("")
})



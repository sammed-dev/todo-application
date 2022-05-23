import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Signup from './Signup'
import '@testing-library/jest-dom/extend-expect';

import userEvent from '@testing-library/user-event';

import axiosmock from 'axios'

const WithReactRouter = ()=>{
    return(
        <BrowserRouter>
            <Signup />
        </BrowserRouter>
    )
}


it("test signup form placeholders", ()=> {
    render(<WithReactRouter />)
    expect(screen.getByLabelText(/firstname/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/lastname/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
})

it("All inputs should be empty", ()=>{
    render(<WithReactRouter />)

    const firstNameElement = screen.getByRole("textbox", {
        name:/firstName/i
    })
    expect(firstNameElement.value).toBe("")

    const lastNameElement = screen.getByRole("textbox", {
        name:/lastName/i
    })
    expect(lastNameElement.value).toBe("")

    const emailElement = screen.getByRole("textbox", {
        name:/Email/i
    })
    expect(emailElement.value).toBe("")
    
    const passwordInput = screen.getByLabelText(/Password/i);
    expect(passwordInput.value).toBe("")
})


describe("sign up with API", ()=>{
    it("sign up test with API call", async ()=>{
        render(<WithReactRouter />)
        const email = "sam@gmail.com";
        const password = "Sammed123";
        const firstName ="sammed";
        const lastName = "sankonatti"

        const data = {
            firstName : "sammed",
            lastName : "sankonatti"
        };

        axiosmock.post.mockImplementationOnce(()=> Promise.resolve(data))
            const response = await axiosmock.post('http://localhost:8080/todoapp/webapi/user/register', {
                email,
                password,
                firstName,
                lastName
            });
            expect(response).toStrictEqual(data);        
    });
})
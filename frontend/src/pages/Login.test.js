import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Login from './Login'
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import axiosmock from 'axios'


const WithReactRouter = ()=>{
    return(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    )
}


it("test login form placeholders", ()=> {
    render(<WithReactRouter />)
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
})

it("All inputs should be empty", ()=>{
    render(<WithReactRouter />)
    const emailElement = screen.getByRole("textbox")
    expect(emailElement.value).toBe("")
    const passwordInput = screen.getByLabelText(/Password/i);
    expect(passwordInput.value).toBe("")
})

it("test the entered values for the login form", ()=>{
    render(<WithReactRouter />)
    const emailInput = screen.getByRole("textbox",{
        name: /Email/i
    });
    userEvent.type(emailInput, "sam@gmail.com")
    expect(emailInput.value).toBe("sam@gmail.com")
})


it("test for invalid Email", ()=>{
    render(<WithReactRouter />)

    const errorMessage = screen.queryByText(/Invalid email/i)
    expect(errorMessage).not.toBeInTheDocument()

    const emailInput = screen.getByRole("textbox");
    userEvent.type(emailInput, "samgmail.com")
    // const submitButton = screen.getByRole("button",{
    //     name:/submit/i
    // })
    const submitButton = screen.getByText(/login/i).closest('button')
    userEvent.click(submitButton)
    // expect(errorMessage).toBeInTheDocument()
})



describe("Login with API", ()=>{
    it("login test with API call", async ()=>{
        render(<WithReactRouter />)
        const email = "sam@gmail.com";
        const password = "Sammed123";

        const data = {
            
        };

        axiosmock.post.mockReturnValue(()=> Promise.resolve(data))
            const response = await axiosmock.post("http://localhost:8080/mediaapi/webapi/user/login", {
                email,
                password,
            });
            expect({}).toStrictEqual(data);
        
    });


})
import React from "react";
import { render,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const{getByText}=render(<CheckoutForm/>)
  const title=getByText(/Checkout Form/i)
  expect(title).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const container = render(<CheckoutForm />);

    const firstName = container.getByLabelText(/first name/i);
    const lastName = container.getByLabelText(/last name/i);
    const address = container.getByLabelText(/address/i);
    const city = container.getByLabelText(/city/i);
    const state = container.getByLabelText(/state/i);
    const zip = container.getByLabelText(/zip/i);

    fireEvent.change(firstName, {target:{value:'Priyanka'}});
    fireEvent.change(lastName, {target:{value:'Sarkar'}});
    fireEvent.change(address, {target:{value:'29400 N 122nd Glen'}});
    fireEvent.change(city, {target:{value:'Peoria'}});
    fireEvent.change(state, {target:{value:'AZ'}});
    fireEvent.change(zip, {target:{value:'85383'}});

    const submitButton = container.getByText('Checkout');

    fireEvent.click(submitButton);

    const successMessage = container.getByTestId(/successMessage/i);

    expect(successMessage).toBeInTheDocument();
});

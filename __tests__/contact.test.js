import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import ContactForm from "../pages/contact/index";
import "@testing-library/jest-dom";

test("it calls handleSend when button is clicked", async () => {
  const mock = jest.fn();
  render(<ContactForm handleChange={mock} />);
  // find the inputs
  // const [nameInput, emailInput, messageInput] = screen.getAllByRole("textbox");
  const nameInput = screen.getByPlaceholderText("Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const messageInput = screen.getByPlaceholderText("Message");
  // Simulate typing in a name
  await user.click(nameInput);
  await user.keyboard("jane");

  // Simulate typing in an email
  await user.click(emailInput);
  await user.keyboard("jane@jane.com");

  // Simulate typing in a message
  await user.click(messageInput);
  await user.keyboard("test message");

  // console.log(nameInput)
  // console.log(emailInput)
  // console.log(messageInput)
  // Find the button
  const button = screen.getByRole("button");
  // console.log(button)
  // Simulate clicking the button
  user.click(button);
  expect(mock).toHaveBeenCalled();
  // expect(mock).toHaveBeenCalledWith({
  //   name: "jane",
  //   email: "jane@jane.com",
  //   message: "test message",
  // });
});

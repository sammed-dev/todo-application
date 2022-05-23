import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TodoContainer from './TodoContainer';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';


function renderComponent(todo, setState) {
    return render(
          <TodoContainer todo={todo} setState={setState} />
    );
  }

  test("Todo is displayed", () => {
    const todo = {userId: 12324, todoId: 3456, content: "sleep", completed: false };
    renderComponent(todo);
    expect(screen.getByText("sleep")).toBeInTheDocument();
  });
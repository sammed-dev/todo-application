import React, { useEffect, useState } from 'react'
import { Box, Button, Container} from '@mui/material'
import TodoContainer from '../components/TodoContainer'
import AddIcon from '@mui/icons-material/Add';
import uuid from 'react-uuid';
import axios from 'axios';


const Home = () => {

  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])
  const [state, setState] = useState(false)
  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(()=>{
		axios.get(`http://localhost:8080/todoapp/webapi/todo/all/${user?.userId}`)
				.then(response=>{
					setTodoList(response.data)
				})
	},[state, user?.userId])

  const handleAdd = async(e)=>{
    e.preventDefault()
    const todoId = uuid()
			const newTodo = {
				userId : user?.userId,
				todoId ,
				content : todo,
				completed : false
			}
      setTodoList([...todoList, newTodo])
      axios.post('http://localhost:8080/todoapp/webapi/todo/add', newTodo).then(response=>{
				console.log(response.data);
				setState(prevState=> !prevState)
				// return [...todoItem, { content : response.data.content, userId:response.data.userId, todoId : response.data.todoId,  completed:response.data.completed}]
			})
		setTodo("");
   
  }

  return (
    <Box display="flex" justifyContent="center" minHeight="70vh">
         <Container maxWidth="sm" style={{marginTop:"2rem"}} >
            <form onSubmit={(e) => handleAdd(e)} className="card-content" style={{display:"flex", alignContent:"flex-end", justifyContent:"space-between"}}>
            <input
                value={todo}
                onChange={(e)=> setTodo(e.target.value)}
                placeholder="Add new todo "
                name="todo_content"
              />
              <Button
              data-testid="addbutton"
                type="submit"
                color="primary"
                variant="contained"
                style={{height:"3.5rem", borderRadius:"20px"}}
              >
                <AddIcon />
              </Button>
            </form>
            {
              todoList?.map((todo)=>{
                return(
                  <TodoContainer key={todo.todoId} todo={todo} setState={setState}  />
                )
              })
            }
         </Container>
         
    </Box>
  )
}

export default Home
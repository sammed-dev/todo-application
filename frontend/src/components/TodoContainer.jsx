import { Card, CardActions, CardContent, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';


const TodoContainer = ({todo, setState}) => {

  const handleDelete=(todoId)=>{

		axios.delete(`http://localhost:8080/todoapp/webapi/todo/delete/${todoId}`)
				.then(response=>{
					setState(prevState=> !prevState)
				})
  }

  return (
    <Card elevation={2} sx={{ minWidth: 275, height:70  ,marginTop: "0.5rem", background : "linear-gradient(to right, #C89D93, #bcd)" }}>
      <CardContent className="card-content">
        <Typography
          sx={{ fontSize: 30, marginTop: "0.1rem", fontFamily:"Grand Hotel" }}
          style={{ textDecoration: "none" }}
          color="#333333"
          
        >
         {todo.content}
        </Typography>
        <CardActions>
            <IconButton color='primary' onClick={()=> handleDelete(todo.todoId)}>
              <DeleteIcon />
            </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default TodoContainer
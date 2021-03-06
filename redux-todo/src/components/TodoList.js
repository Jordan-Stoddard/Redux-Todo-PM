import React from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'

const TodoList = (props) => {
    
  return (
    <div>
      <ul>
          {props.todos.map(todo => {
              return <Todo key={todo.id} todo={todo}/>
          })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {})(TodoList)


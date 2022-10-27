import create from 'zustand';

import {devtools, persist} from 'zustand/middleware';

const todoStore = (set) => ({
    todos: [],
    addTodo: (todo) => {
        set((state) => ({
            todos: [todo, ...state.todos],
        }))
    },
    removeTodo: (todoId) => {
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== todoId),
        }))
    },
    toggleTodoStatus: (todoId) => {
        set((state) => ({
            todos: state.todos.map((todo) => {
                if (todo.id === todoId) {
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            }),
        }))
    }
})

const useTodoStore = create(
    devtools(
        persist(todoStore, {
            name: 'todos',
        })
    )
)

export default useTodoStore
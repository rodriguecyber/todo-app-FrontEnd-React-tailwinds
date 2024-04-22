import '../index.css'

const Todo = (todo) => {
    const {todos} = todo
    return(
        <>
        {todos.map((todo)=>(

<div className='bg-gray-200 m-7 p-5 flex justify-around'>
<input type='checkbox' />
<p className='1/3'>{todo.task}</p>
<p className='1/3'>{todo.date}</p>
<p className='1/3'>{todo.time}</p>   
</div>
        ))}

</>
)
}
export default Todo
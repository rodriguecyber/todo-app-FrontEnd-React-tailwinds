import '../index.css'
 import Header from '../elements/Header'
 import Todo from '../elements/todo'
//  import Task from '../data/data'
const Content = () =>{
    const todos=[
        {task:'wakeup',date:'March 12-2024',time:'12:00 am'},
        {task:'sport',date:'today',time:'2:00 am'},
        {task:'study',date:'tomorrow',time:'11:00 am'}
    ]
    return(
    <body className='flex-1 '>
   <Header /> 
   <Todo todos={todos}/>
    </body>
    )
}
export default Content


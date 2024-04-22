import '../index.css';

const Sidebar = () => (
    <div className="lg:block bg-green-500 h-screen w-1/4 left-0 top-0 p-4">
        <h3 className='text-black-500 text-center m-2' >ADD NEW TO-DO</h3>
        <input type="text" placeholder='todo name' className=' border border-gray-500 rounded focus:outline-none focus:border-blue-500 px-2 py-2'/>
        <p  className='text-black-500  m-2'>Add date</p>
        <input type="date" placeholder='due date' className='border border-gray-500 rounded px-3 py-1 mx-auto'/>
        <p  className='text-black-500  m-2'>Add date</p>
        <input type="time" placeholder='todo name' className=' border border-gray-500 rounded px-3 py-1 mx-auto'/>
        <button className='border border-gray-500 rounded px-3 block m-3 bg-red-300 hover:bg-red-400'>Add</button>
    </div>
);

export default Sidebar;

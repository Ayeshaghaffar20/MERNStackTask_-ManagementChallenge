import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NoteModal from '../../pages/NoteModal';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { MdNoteAlt } from "react-icons/md";

import { toast } from 'react-toastify';
import { deleteTask } from '../../redux/slices/taskSlice';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const { user } = useSelector((state) => state.auth);
  const tasks = useSelector((state) => state.tasks?.tasks || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddClick = () => {
    if (!user) {
      navigate('/register');
    } else {
      setEditingTask(null); // Reset editing state for new task
      setIsModalOpen(true);
    }
  };

const handleEdit = (task) => {
  if (!user) {
    toast.warn('Please login to edit tasks');
    return;
  }
  setEditingTask(task);
  setIsModalOpen(true);
};

const handleDelete = async (taskId) => {
  if (!user) {
    toast.warn('Please login to delete tasks');
    return;
  }
  try {
    await dispatch(deleteTask(taskId)).unwrap();
    toast.success('Task deleted');
  } catch (err) {
    toast.error(err || 'Failed to delete task');
  }
};

  return (
 <div className={`relative min-h-screen ${isModalOpen ? 'backdrop-blur-sm' : ''} bg-[#1f1f2e] transition duration-300`}>
  {/* Remove max-w-lg and mx-auto to avoid centering */}
  <div className="p-8 text-white">
    <h1 className="text-2xl mb-4 font-bold text-orange-400">Your Tasks:</h1>

    {tasks.length === 0 ? (
      <p className="text-gray-400 flex justify-center items-center text-3xl gap-1">No tasks found <span className='text-white text-3xl'><MdNoteAlt /></span></p>
    ) : (
      <ul className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="bg-[#2b2b40] p-4 rounded-md shadow-md flex flex-col justify-between"
          >
            <div className='flex flex-col gap-2'>
              <div className="font-semibold text-lg">{task.title}</div>
              <div className="text-2xl text-gray-400">{task.description}</div>
              <div
                className={` w-fit px-3 py-1 mt-1 rounded-full text- font-medium ${
                  task.status === 'completed'
                    ? 'bg-green-500 text-white'
                    : 'bg-yellow-400 text-white'
                }`}
              >
                {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
              </div>
            </div>
            <div className="flex space-x-3 mt-3 justify-end">
              <button
                onClick={() => handleEdit(task)}
                className="text-blue-400 hover:text-blue-500 text-lg"
                title="Edit Task"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(task._id)}
                className="text-red-400 hover:text-red-500 text-lg"
                title="Delete Task"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>

  <button
    onClick={handleAddClick}
    className="fixed bottom-4 right-4 bg-orange-400 hover:bg-orange-500 text-[#1f1f2e] text-4xl font-bold p-5 rounded-full shadow-lg transition duration-300"
    aria-label="Add Task"
  >
    +
  </button>

  {isModalOpen && (
    <NoteModal
      onClose={() => {
        setIsModalOpen(false);
        setEditingTask(null);
      }}
      editingTask={editingTask}
    />
  )}
</div>

  );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addTask, updateTask } from '../redux/slices/taskSlice';

const NoteModal = ({ onClose, editingTask }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'pending',
  });

  useEffect(() => {
    if (editingTask) {
      setForm({
        title: editingTask.title,
        description: editingTask.description,
        status: editingTask.status,
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTask) {
        await dispatch(updateTask({ id: editingTask._id, updatedData: form })).unwrap();
        toast.success('Task updated successfully!');
      } else {
        await dispatch(addTask(form)).unwrap();
        toast.success('Task added successfully!');
      }
      onClose();
    } catch (err) {
      toast.error(err || 'Something went wrong');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-[#2b2b40] p-8 rounded-xl w-full max-w-md shadow-xl">
        <h2 className="text-xl text-orange-400 font-bold mb-4">
          {editingTask ? 'Edit Task' : 'Add New Task'}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 mb-3 bg-[#3b3b55] text-white rounded-md"
            required
          />
          <input
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-3 mb-3 bg-[#3b3b55] text-white rounded-md"
            required
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full p-3 mb-4 bg-[#3b3b55] text-white rounded-md"
          >
            <option value="pending">Pending</option>
            <option value="completed">completed</option>
          </select>
          <div className="flex justify-between">
            <button type="submit" className="bg-orange-400 px-4 py-2 rounded-md font-bold text-[#1f1f2e]">
              {editingTask ? 'Update' : 'Submit'}
            </button>
            <button onClick={onClose} className="text-gray-400 hover:underline">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteModal;

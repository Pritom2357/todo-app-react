import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const [due, setDue] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if(!todo) return;
        addTodo({ todo, due, completed: false });
        setTodo("");
        setDue("");
    }

    return (
        <form onSubmit={add} className="flex flex-col sm:flex-row gap-2">
            <input
                type="text"
                placeholder="Write Todo..."
                className="flex-1 border border-black/10 rounded-lg px-3 outline-none bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <input
                type="date"
                className="border border-black/10 rounded-lg px-3 outline-none bg-white/20 py-1.5"
                value={due}
                onChange={(e)=>setDue(e.target.value)}
            />
            <button type="submit" className="rounded-lg px-4 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
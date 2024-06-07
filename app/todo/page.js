"use client";
import Layout from "@/components/layout";
import { addTodo } from "@/utils/services/todo";
import { useState } from "react";

//should show a todo list of task
//perform add, delete and update
export default function Todo() {
  /**@type {[(string | null), React.Dispatch<SetStateAction<(string|null)>>]}*/
  const [todoValue, setTodoValue] = useState("");

  /**@param {React.FormEventHandler<HTMLFormElement>} e*/
  const handleTodoAdd = async (e) => {
    try {
      e.preventDefault();
      if (!todoValue || todoValue.length === 0) {
        throw new Error("Provide a todo name");
      }
      //create a api in the go lang for insert the use in th sqllite database
      // may be I have to write a sql query in the go lang web developement
      addTodo({ value: todoValue });
      // res.error == false - todo value added successfully
    } catch (err) {
      // probably have to provide a error condition for {AxiosError} or the Error constructor
      console.log("error", err);
    }
  };
  return (
    <Layout>
      <h2 className="text-xl text-gray-700 text-center">Todo page</h2>
      <div className="flex justify-center items-center gap-2 p-2">
        <form onSubmit={handleTodoAdd}>
          <input
            type="text"
            name="task"
            placeholder="type your text here..."
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
            className="p-2 border rounded-md border-gray-500 outline-none focus:outline-gray-300"
          />
          <button
            className="border border-black text-white bg-black rounded-md px-4 py-2"
            type="submit"
          >
            add
          </button>
        </form>
      </div>
    </Layout>
  );
}

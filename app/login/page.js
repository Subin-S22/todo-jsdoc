"use client";
import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  /**
   * @param {'email' | 'password'} type
   * @param {string} value
   * */
  const handleFormChange = (type, value) => {
    setFormData((prev) => ({ ...prev, [type]: value }));
  };

  /**
   * @param {React.FormEvent<HTMLFormElement>} e -  event form
   * */
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
    } catch (err) {}
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="p-4 border border-gray-300 rounded-md">
        <form onSubmit={handleSubmit}>
          <Input
            value={formData.email}
            onChange={handleFormChange}
            name="email"
            type="email"
          />
          <Input
            value={formData.password}
            onChange={handleFormChange}
            name="password"
            type="password"
          />
          <Button name="Login" onClick={() => {}} />
        </form>
      </div>
    </div>
  );
}

/**@typedef {object} InputProps
 * @property {string} name
 * @property {string} type
 * @property {string} value
 * @property {React.ChangeEventHandler<HTMLInputElement>} onChange
 * */

/**@param {InputProps} */
function Input({ name, type, value, onChange }) {
  return (
    <div className="flex flex-col gap-2 ">
      <label className="capitalize">{name}</label>
      <input
        className="border border-gray-300 rounded-md p-1 focus:border-blue-400 outline-none"
        type={type}
        value={value}
        onChange={(e) => onChange(type, e.target.value)}
      />
    </div>
  );
}

/** @typedef {object} ButtonProps
 * @property {string} name
 * @property {string} [type]
 * @property {React.MouseEventHandler<HTMLButtonElement>} onClick
 * */

/** @param {ButtonProps} buttonProps*/
function Button({ name, type, onClick }) {
  return (
    <button
      className="flex w-full rounded-md border border-black text-white bg-black justify-center mt-8 py-1"
      type={type}
      onClick={() => {
        onClick();
      }}
    >
      {name}
    </button>
  );
}

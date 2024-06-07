"use client";
import Layout from "@/components/layout";
import { contacts } from "@/utils/constant";
import { filterContacts } from "@/utils/home";
import { useState } from "react";

/**@typedef {object} Contact
 * @property {string} name
 * @property {string} phoneNumber
 * */

export default function Keypad() {
  const [contactsState, setContactsState] = useState(contacts);
  // if we pass the numbers it should first go through the keypad
  // check the includes in the letter with lowercase or uppercase
  const handleChange = (e) => {
    setContactsState(() => filterContacts(e.target.value, contacts));
  };

  const handleSearch = () => {};

  return (
    <Layout>
      <div className="flex justify-center gap-2 items-center">
        <input
          className="border outline-none border-gray-400 focus:outline-slate-300 rounded-md p-2"
          type="text"
          name="search"
          placeholder="search..."
          onChange={handleChange}
        />
        <button
          className="border border-slate-500 focus:border-gray-300 rounded-md text-white px-4 py-2 bg-slate-500 hover:bg-slate-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div>
        {contactsState.map((contact, index) => (
          <div
            key={`contact-${index}`}
            className="flex justify-center items-center gap-2 p-4"
          >
            <div>{contact.name}</div>
            <div>{contact.phoneNumber}</div>
          </div>
        ))}
      </div>
      {/**TODO: let have a temp array with phonenumber and names
       */}
      <div>show the result here based on the search filed</div>
    </Layout>
  );
}

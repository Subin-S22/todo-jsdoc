import { keypad } from "./constant";

/**
 * @param {string} value
 * @param {Contact[]} contacts
 * @returns {Contact[]}
 * */
export const filterContacts = (value, contacts) => {
  if (!value || value === "") return "";
  //might have to do split and check for the includes in the keypad object
  /** @type {string[]} inputLetters */
  const inputNumbers = value.split("");

  let numberFilter = [];

  if (Number(value) > 1) {
    numberFilter = contacts;
    for (let i = 0; i < inputNumbers.length; ++i) {
      //it will be a single input -assume 9
      const keys = keypad[inputNumbers[i]]; // ["w", "x", "y", "z"]
      numberFilter = numberFilter.filter((contact) =>
        keys.includes(contact.name[i].toUpperCase()),
      );
    }
  }

  /** @todo filter operation */
  const filteredContact = contacts.filter(
    (contact) =>
      //serach thorught numbers with keypad , next - phonenumbers , -next - names
      !numberFilter.some((cont) => cont.name === contact.name) &&
      (contact.phoneNumber.includes(value) || contact.name.includes(value)),
  );
  return [...filteredContact, ...numberFilter];
};

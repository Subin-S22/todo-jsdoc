/**@param {Object} values
 * @param {string} values.value
 * @returns {{data:{data:Object, message:string, error:boolean}}}
 * @throws {Error}
 * */
export const addTodo = (values) => {
  try {
    //actual api call
    return { data: { data: {}, message: "task added", error: false } };
  } catch (err) {
    throw err;
  }
};

/**@param {Object} values
 * @param {string} values.value
 * @returns {{data:{data:Object, message:string, error:boolean}}}
 * @throws {Error}
 * */
export const updateTodo = (values) => {
  try {
    //actual api call
    return { data: { data: {}, message: "task updated", error: false } };
  } catch (err) {
    throw err;
  }
};

import { filterContacts } from "./home";
import { contacts } from "./constant";


describe("filter contacts", () => {
  test("filter by phonenumber", async () => {
    expect(filterContacts("22", contacts).length).toBe(2);
    expect(filterContacts("98", contacts).length).toBe(4);
    expect(filterContacts("98", contacts).length).toBe(4);
    expect(filterContacts("33", contacts).length).toBe(2);
    expect(filterContacts("334", contacts).length).toBe(2);
    expect(filterContacts("34", contacts).length).toBe(3);
    expect(filterContacts("3", contacts).length).toBe(4);
  });

  test("filter by name", async () => {
    expect(filterContacts("abc", contacts).length).toBe(1);
    expect(filterContacts("cv", contacts).length).toBe(1);
    expect(filterContacts("d", contacts).length).toBe(3);
  });

  test("filter by name with empty value", async () => {
    expect(filterContacts("", contacts)).toBe("");
  });

  test("filter by name with empty value", async () => {
    expect(filterContacts(null, contacts)).toBe("");
    expect(filterContacts(undefined, contacts)).toBe("");
  });
});

const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ["oven", "stove", "washer"],
    area: 20,
    wallColor: "white",
  },
};

const desiredHouse = {
  bath: true,
  kitchen: {
    amenities: ["oven", "stove", "washer"],
    wallColor: expect.stringMatching(/white|yellow/),
  },
};

test("the house has my desired features", () => {
  expect(houseForSale).toMatchObject(desiredHouse);
});

const isCalledError = 'please provide is called value'
const callMessage = 'it is called'
const notCallMessage = 'it is not called'
/**@param {boolean} isCalled*/
const apiCall = (isCalled) => {
  if (isCalled === undefined) throw new Error(isCalledError)
  //we probably won't use promise that much in the project 
  return new Promise((res, rej) => {
    if (isCalled) {
      res(callMessage)
    }
    else {
      rej(notCallMessage)
    }
  })
}

const apiCall2 = () => {
  throw new Error('api call 2')
}

/**@param {number} index*/
const returnValue = (index) => {
  const a = [1, 2, 3, 4, 5, 6]
  return a[index]

}

describe('promise testing', () => {
  test('api call 1', async () => {
    const first = await apiCall(true);
    expect(first).toBe(callMessage)
    try {
      await apiCall(false);
    } catch (err) {
      expect(err).toMatch(notCallMessage)
    }
  })

  test('api call 2', () => {
    expect(() => apiCall2()).toThrow();
  })

  test('api call 1 with no value', () => {
    expect.assertions(3)
    expect(() => apiCall()).toThrow(isCalledError);
    expect(() => apiCall()).toThrow();
    expect(() => apiCall()).toBeInstanceOf(Function);
  })

  test('return value function', () => {
    const a = returnValue(3)
    expect(a).toBe(4)
  })
})

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

  test("filter by name with numbers", async () => {
    expect(filterContacts("abc", contacts).length).toBe(1);
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

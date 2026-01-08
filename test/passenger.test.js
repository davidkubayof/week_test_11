import test from "node:test";
import assert from "node:assert";
import { StudentPassenger } from "../classes/studentPassenger.js";

test.describe("test buy a ticket", () => {
  test("Not enough money ", () => {
    const passenger1 = new StudentPassenger("david", 100);;

    assert.strictEqual(passenger1.buyTicket(200), false); 
  });
  test('Enough money', () => {
      const passenger1 = new StudentPassenger("david", 100);

      assert.strictEqual(passenger1.buyTicket(50), true);
      assert.strictEqual(passenger1.buyTicket(40), true);
    });
});
console.log("buy a ticket tests passed");

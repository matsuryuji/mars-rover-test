import Rover from "./Rover";

test("Get final position example 1", () => {
  let r = new Rover({
    initialPosition: {
      coords: [1, 2],
      orientation: "N",
    },
    commands: "MMM",
    max: [11, 11],
  });

  expect(r.getPositionFinal()).toBe("1 5 N");
});

test("Get final position example 2", () => {
  let r = new Rover({
    initialPosition: {
      coords: [3, 3],
      orientation: "E",
    },
    commands: "MRRMMRMRRM",
    max: [11, 11],
  });

  expect(r.getPositionFinal()).toBe("2 3 S");
});

test("Get final position plateau size equals [0,0]", () => {
  let r = new Rover({
    initialPosition: {
      coords: [1, 2],
      orientation: "N",
    },
    commands: "MMM",
    max: [0, 0],
  });

  expect(r.getPositionFinal()).toBe("0 0 N");
});

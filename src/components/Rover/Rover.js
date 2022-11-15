class Rover {
  serial = Math.random().toString(36).slice(2);
  initialPosition = {
    coords: [0, 0],
    orientation: "N",
  };
  commands = "";
  processedComands = null;
  max = [0, 0];
  finalPosition;

  constructor({ initialPosition, commands = "", max = [0, 0] }) {
    this.initialPosition = initialPosition;
    this.commands = commands;
    this.max = max;
    this.init();
  }

  init() {
    this.processComands();
  }

  processComands(commands) {
    //posição inicial temporaria
    let initialPosition = { ...this.initialPosition };
    //Gerar os tokens da entrada dos comandos
    let tokensCommands = commands
      ? commands.split("")
      : this.commands.split("");
    let processedComands = [];

    //Constroi as arvores de comandos e processa a posição final
    tokensCommands.forEach((instrution, k) => {
      let instrutionRover;
      let command;
      let from = k <= 0 ? initialPosition : processedComands[k - 1].from;
      from = { ...from };
      let to = from;
      // eslint-disable-next-line default-case
      switch (instrution) {
        case "L":
          to.orientation = this.getOrientation(from.orientation, instrution);
          command = "ROTATE";
          break;
        case "R":
          to.orientation = this.getOrientation(from.orientation, instrution);
          command = "ROTATE";
          break;
        case "M":
          to.coords = this.getMovement(from.orientation, from.coords);
          command = "MOVE";
          break;
      }
      instrutionRover = {
        command,
        from,
        to,
      };
      processedComands.push(instrutionRover);
    });

    this.processedComands = processedComands;
    this.finalPosition = processedComands[processedComands.length - 1].to;
  }

  getOrientation(orientation, command) {
    if (orientation === "N") {
      if (command === "L") {
        return "W";
      } else {
        return "E";
      }
    }
    if (orientation === "W") {
      if (command === "L") {
        return "S";
      } else {
        return "N";
      }
    }
    if (orientation === "E") {
      if (command === "L") {
        return "N";
      } else {
        return "S";
      }
    }
    if (orientation === "S") {
      if (command === "L") {
        return "E";
      } else {
        return "W";
      }
    }
  }
  getMovement(orientation, fromCoords) {
    if (this.max[0] > 0 && this.max[1] > 0) {
      if (orientation === "N") {
        return [fromCoords[0], Math.min(this.max[1] - 1, fromCoords[1] + 1)];
      }
      if (orientation === "S") {
        return [fromCoords[0], Math.max(fromCoords[1] - 1, 0)];
      }
      if (orientation === "W") {
        return [Math.max(fromCoords[0] - 1, 0), fromCoords[1]];
      }
      if (orientation === "E") {
        return [Math.min(fromCoords[0] + 1, this.max[0] - 1), fromCoords[1]];
      }
    } else {
      return [0, 0];
    }
  }
  getPositionFinal() {
    let { coords, orientation } = this.finalPosition;
    return `${coords[0]} ${coords[1]} ${orientation}`;
  }
}

export default Rover;

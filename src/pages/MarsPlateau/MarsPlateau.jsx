import CommandRover from "components/CommandRover";
import PlateauMatrix from "components/PlateauMatrix";
import Rover from "components/Rover";
import { useState } from "react";
import "./style.scss";

const MarsPlateau = () => {
  const [plateauSize, setPlateauSize] = useState([1, 1]);

  const [roverPosition, setRoverPosition] = useState([0, 0]);

  const [commands, setCommands] = useState("A");

  const [orientation, setOrientation] = useState("N");

  const [rover, setRover] = useState(
    new Rover({
      initialPosition: { coords: roverPosition, orientation: orientation },
      commands: commands,
      max:plateauSize
    })
  );

  const handleChangePlateauSize = (event) => {
    const tempValue = event.target.value;
    const arrString = tempValue.split(",");
    const tempArr = [];
    arrString.forEach((element) => {
      tempArr.push(Number(element));
    });
    setPlateauSize(tempArr);
  };

  const handleChangeRoverPosition = (event) => {
    const tempValue = event.target.value;
    const arrString = tempValue.split(",");
    const tempArr = [];
    arrString.forEach((element, index) => {
      element === "N" || element === "S" || element === "E" || element === "W"
        ? setOrientation(element)
        : tempArr.push(Number(element));
    });
    setRoverPosition(tempArr);
  };

  const handleMoveRover = (event) => {
    setCommands(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRover(
      new Rover({
        initialPosition: {
          coords: roverPosition,
          orientation: orientation,
        },        
        commands: commands,
        max:plateauSize
      })
    );
  };

  return (
    <div className="mars-plateau__wrapper">
      <CommandRover
        handleChangePlateauSize={handleChangePlateauSize}
        handleChangeRoverPosition={handleChangeRoverPosition}
        handleMoveRover={handleMoveRover}
        handleSubmit={handleSubmit}
      />
      <PlateauMatrix plateauSize={plateauSize} rover={rover} />
    </div>
  );
};

export default MarsPlateau;
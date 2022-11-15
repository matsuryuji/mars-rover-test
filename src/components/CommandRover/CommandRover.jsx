import { Button, Input } from "components/core";
import "./style.scss";

const CommandRover = ({
  handleChangeRoverPosition,
  handleChangePlateauSize,
  handleMoveRover,
  handleSubmit,
}) => {
  return (
    <div className="command-rover">
      <div className="command-rover__wrapper">
        <h1>Command Option</h1>
        <form onSubmit={handleSubmit}>
          <div className="command-rover__item">
            <h4>Plateau Size</h4>
            <Input onChange={handleChangePlateauSize} name="plateauSize" placeholder="11,11" mask="99,99" maskChar="0" />
          </div>
          <div className="command-rover__item">
            <h4>Rover Starting Position</h4>
            <Input onChange={handleChangeRoverPosition} name="roverPosition" placeholder="1,2,N" mask="99,99,a"  />
          </div>
          <div className="command-rover__item">
            <h4>Rover Moves</h4>
            <Input onChange={handleMoveRover} name="roverMoviment" placeholder="LMRMM" />
          </div>
          <div className="command-rover__item">
            <Button  type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommandRover;

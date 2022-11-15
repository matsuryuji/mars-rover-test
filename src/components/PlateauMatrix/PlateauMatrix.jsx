import "./style.scss";
import ROVER from "assets/rover.webp";

const PlateauMatrix = ({ plateauSize, rover }) => {
  let arrayX = new Array(plateauSize[0]);
  let arrayY = new Array(plateauSize[1]);
  
  const getRoverRotation = () => {
    switch (rover.finalPosition.orientation) {
      case "N":
        return ({ transform: "rotate(360deg)" });
      case "S":
        return ({ transform: "rotate(180deg)" });
      case "E":
        return ({ transform: "rotate(90deg)" });
      case "W":
        return ({ transform: "rotate(270deg)" });
      default:
        return <h1>Error</h1>;
    }
  };

  const roverLocation = (indexX, indexY) => {
    if (indexX === rover.finalPosition.coords[0] && indexY === rover.finalPosition.coords[1])
      return <img src={ROVER} alt="" height={40} width={40} style={getRoverRotation()} />
  };

  return (
    <div className="plateau-matrix__wrapper">
      <div className="plateau-matrix__row">
        {arrayX.fill("").map((__, indexX) => {
          return (
            <div key={indexX} className="plateau-matrix__column">
              {arrayY.fill("").map((__, indexY) => {
                return (
                  <div
                    className="plateau-matrix__item"
                    key={indexY}
                    style={
                      indexX === rover.finalPosition.coords[0] &&
                      indexY === rover.finalPosition.coords[1]
                      ? { backgroundColor: "#0951e0",color:"#fff" }
                      : {}
                    }
                  >
                    {roverLocation(indexX, indexY)}
                    <span>{`X: ${indexX}, Y: ${indexY}`}</span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlateauMatrix;

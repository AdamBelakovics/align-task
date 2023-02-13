import { useEffect, useState } from "react";

export function Grid({
  config,
  setStepsArray,
  handleNext,
  currentNumberOfSteps,
}) {
  const [selectedCoordinates, setSelectedCoordinates] = useState({
    x: Math.floor(Math.random() * config.size),
    y: Math.floor(Math.random() * config.size),
  });

  const handleKeyPress = (args) => {
    if (args.key === "ArrowDown") {
      const { x, y } = selectedCoordinates;
      if (x + 1 < config.size) {
        setSelectedCoordinates({
          x: x + 1,
          y,
        });
      }
    } else if (args.key === "ArrowUp") {
      const { x, y } = selectedCoordinates;
      if (x - 1 >= 0) {
        setSelectedCoordinates({ x: x - 1, y: y });
      }
    } else if (args.key === "ArrowLeft") {
      const { x, y } = selectedCoordinates;
      if (y - 1 >= 0) {
        setSelectedCoordinates({ x, y: y - 1 });
      }
    } else if (args.key === "ArrowRight") {
      const { x, y } = selectedCoordinates;
      if (y + 1 < config.size) {
        setSelectedCoordinates({ x, y: y + 1 });
      }
    }
  };

  useEffect(() => {
    console.log("useEffect", selectedCoordinates);
    setStepsArray((state) => [...state, selectedCoordinates]);
    if (currentNumberOfSteps === config.steps) {
      handleNext();
    }
  }, [selectedCoordinates]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [selectedCoordinates]); // Empty array ensures that effect is only run on mount and unmount

  if (!config) {
    console.error("NO config provided for Grid");
  }

  return (
    <div>
      {Array.from({ length: config.size })
        .map((_, idx) => idx)
        .map((x) => (
          <div key={x} style={{ display: "flex", flexDirection: "row" }}>
            {Array.from({ length: config.size })
              .map((_, idx) => idx)
              .map((y) => (
                <div
                  key={y}
                  style={{
                    height: "40px",
                    width: "40px",
                    border: "2px solid black",
                    backgroundColor:
                      selectedCoordinates.x === x && selectedCoordinates.y === y
                        ? "red"
                        : "white",
                  }}
                >{`${x}, ${y}`}</div>
              ))}
          </div>
        ))}
    </div>
  );
}

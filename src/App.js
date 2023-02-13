import { useState } from "react";
import { Form } from "./Form";
import { Grid } from "./Grid";
import { Result } from "./Result";

function App() {
  const [stage, setStage] = useState(1);

  const [config, setConfig] = useState(null);

  const [stepsArray, setStepsArray] = useState([]);

  if (stage === 1) {
    return (
      <Form
        handleNext={(values) => {
          setConfig(values);
          setStage(2);
        }}
      />
    );
  }

  if (stage === 2) {
    return (
      <Grid
        config={config}
        currentNumberOfSteps={stepsArray.length}
        setStepsArray={setStepsArray}
        handleNext={() => setStage(3)}
      />
    );
  }

  if (stage === 3) {
    return <Result stepsArray={stepsArray} />;
  }

  console.error("Invalid stage number");

  return <Form />;
}

export default App;

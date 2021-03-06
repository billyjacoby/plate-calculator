import { useState } from "react";
import styled from "styled-components";

import "../node_modules/normalize.css/normalize.css";

import Plate from "./components/Plate";
import calculateWeights from "./lib/plateCalculator";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin: 10px 0;
  }
`;

const PlateInventory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [desiredWeight, setDesiredWeight] = useState("");
  const [barWeight, setBarWeight] = useState(45);

  const [results, setResults] = useState();

  const [plateInventory, setPlateInventory] = useState({
    45: 4,
    35: 2,
    25: 4,
    10: 4,
    5: 4,
    2.5: 2,
  });

  function clickCalculate() {
    setResults(
      calculateWeights({
        desiredWeight,
        barWeight: barWeight || 0,
        // Interesting that passing in the actual object here changes it
        plateInventory: { ...plateInventory },
      })
    );
  }

  return (
    <AppContainer>
      <InnerContainer>
        <header>
          <h1>Plate Calculator</h1>
          <p>get strong, not smart</p>
        </header>
        <Form>
          <label htmlFor="desiredWeight">
            Enter Desired Weight:
            <input
              type="number"
              name="desiredWeight"
              placeholder="135"
              value={desiredWeight}
              onChange={(e) => setDesiredWeight(e.target.value)}
            />
          </label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <label htmlFor="barWeight"> Choose a weight: </label>
            <select
              name="barWeight"
              id="barWeight"
              style={{ padding: "2px 10px" }}
              value={barWeight}
              onChange={(e) => setBarWeight(e.target.value)}
            >
              <option value="45" default>
                45lbs
              </option>
              <option value="35">35lbs</option>
              <option value="25">25lbs</option>
              <option value="15">15lbs</option>
              <option value="10">10lbs</option>
              <option value="0">0</option>
              <option value="other" disabled>
                other
              </option>
            </select>
          </div>
        </Form>
        <PlateInventory>
          <h2>Plate Inventory:</h2>
          <Plate
            weight="45"
            inventory={plateInventory}
            setPlateInventory={setPlateInventory}
          />
          <Plate
            weight="35"
            inventory={plateInventory}
            setPlateInventory={setPlateInventory}
          />
          <Plate
            weight="25"
            inventory={plateInventory}
            setPlateInventory={setPlateInventory}
          />
          <Plate
            weight="10"
            inventory={plateInventory}
            setPlateInventory={setPlateInventory}
          />
          <Plate
            weight="5"
            inventory={plateInventory}
            setPlateInventory={setPlateInventory}
          />
          <Plate
            weight="2.5"
            inventory={plateInventory}
            setPlateInventory={setPlateInventory}
          />
        </PlateInventory>
        {results ? (
          <>
            <h3>Plates needed:</h3>
            <button
              type="button"
              onClick={clickCalculate}
              disabled={!desiredWeight}
            >
              re-Calculate!
            </button>
            <div>
              <p>Closest Weight: {results?.closestWeight}</p>
              <ul>
                {results?.plates.map((plate) => {
                  return (
                    <li key={plate.plateWeight}>
                      {plate.plateWeight} - {plate.qty}
                    </li>
                  );
                })}
              </ul>
            </div>
            {console.log(JSON.stringify(results))}
          </>
        ) : (
          <button
            type="button"
            onClick={clickCalculate}
            disabled={!desiredWeight}
          >
            Calculate!
          </button>
        )}
      </InnerContainer>
    </AppContainer>
  );
}

export default App;

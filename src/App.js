import { useState } from "react";
import styled from "styled-components";

import "../node_modules/normalize.css/normalize.css";

import Header from "./components/Header";
import Plate from "./components/Plate";
import calculateWeights from "./lib/plateCalculator";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const PlateContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
`;

function App() {
  const [desiredWeight, setDesiredWeight] = useState("");
  const [barWeight, setBarWeight] = useState("");

  const [results, setResults] = useState();

  const [plateInventory, setPlateInventory] = useState({
    45: 4,
    35: 2,
    25: 4,
    10: 4,
    5: 4,
    2.5: 2,
  });

  function clickCalculate(e) {
    e?.preventDefault();
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
      <Header />
      <InnerContainer>
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
          <label htmlFor="barWeight">
            Bar Weight:
            <input
              type="number"
              name="barWeight"
              placeholder="45"
              value={barWeight}
              onChange={(e) => setBarWeight(e.target.value)}
            />
          </label>
          {results ? (
            <>
              <button
                type="submit"
                onClick={clickCalculate}
                disabled={!desiredWeight}
              >
                re-Calculate!
              </button>
              <button type="button" onClick={() => setResults()}>
                clear
              </button>
              <h3>Plates needed:</h3>
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
              type="submit"
              onClick={clickCalculate}
              disabled={!desiredWeight}
            >
              Calculate!
            </button>
          )}
        </Form>
        <PlateInventory>
          <h2>Plate Inventory:</h2>
          <PlateContainer>
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
          </PlateContainer>
        </PlateInventory>
      </InnerContainer>
    </AppContainer>
  );
}

export default App;

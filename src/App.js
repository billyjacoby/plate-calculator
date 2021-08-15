import { useState } from "react";
import styled from "styled-components";

import "../node_modules/normalize.css/normalize.css";

import Header from "./components/Header";
import Plate from "./components/Plate";

import { Button } from "./style/Global";

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

const PlatesNeeded = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--colorFive);
  padding: 10px 100px;
  border-radius: 10px;

  & > * {
    margin: 2px 0px;
  }
`;

const WeightNeededList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  list-style: none;
`;

const WeightNeededItem = styled.li`
  font-weight: 600;
  font-size: 24px;
  margin: 5px 0;
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
          {results ? (
            <PlatesNeeded>
              <h3>Plates needed:</h3>
              <div>
                {!results?.exactWeight && (
                  <p>Closest Weight: {results?.closestWeight}</p>
                )}
                <WeightNeededList>
                  {results?.plates.map((plate) => {
                    return (
                      <WeightNeededItem key={plate.plateWeight}>
                        <span>
                          {plate.plateWeight}lbs x {plate.qty}
                        </span>
                      </WeightNeededItem>
                    );
                  })}
                </WeightNeededList>
              </div>
              <Button
                type="submit"
                onClick={clickCalculate}
                disabled={!desiredWeight}
              >
                re-Calculate!
              </Button>
            </PlatesNeeded>
          ) : (
            <Button
              type="submit"
              onClick={clickCalculate}
              disabled={!desiredWeight}
            >
              Calculate!
            </Button>
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

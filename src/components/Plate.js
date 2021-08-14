import styled from "styled-components";
import PlateSVG from "../img/plate";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 200px;
`;
const Button = styled.button`
  font-size: 24px;
  width: 3rem;
  height: 3rem;
  border-radius: 15px;
`;

const plateColors = {
  45: "red",
  35: "green",
  25: "yellow",
  10: "blue",
  5: "white",
  2.5: "black",
};

const plateFactors = {
  45: 1,
  35: 0.9,
  25: 0.75,
  10: 0.6,
  5: 0.55,
  2.5: 0.5,
};

const Plate = ({ weight, inventory, setPlateInventory }) => {
  return (
    <Container>
      <PlateSVG
        fill={plateColors[weight]}
        r={weight}
        weight={weight}
        factor={plateFactors[weight]}
      />
      <div>
        <Button
          type="button"
          onClick={() =>
            setPlateInventory({
              ...inventory,
              [weight]: inventory[weight] - 1,
            })
          }
        >
          -
        </Button>
        <span>{inventory[weight]}</span>
        <Button
          type="button"
          onClick={() =>
            setPlateInventory({
              ...inventory,
              [weight]: inventory[weight] + 1,
            })
          }
        >
          +
        </Button>
      </div>
    </Container>
  );
};

export default Plate;

import styled from "styled-components";
import { Button } from "../style/Global";

const Container = styled.div`
  border: 1px solid var(--colorFive);
  margin: 5px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 200px;
  /* padding: 50px 0; */
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150px;
  align-items: center;
  justify-content: space-around;
`;

const WeightText = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const Plate = ({ weight, inventory, setPlateInventory }) => {
  return (
    <Container>
      <InnerContainer>
        <WeightText>{weight} lbs</WeightText>
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
          <WeightText>{inventory[weight]}</WeightText>
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
      </InnerContainer>
    </Container>
  );
};

export default Plate;

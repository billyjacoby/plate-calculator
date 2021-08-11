const Plate = ({ weight, inventory, setPlateInventory }) => {
  return (
    <div>
      <span>{weight}: </span>
      <button
        type="button"
        onClick={() =>
          setPlateInventory({
            ...inventory,
            [weight]: inventory[weight] - 1,
          })
        }
      >
        -
      </button>
      <span>{inventory[weight]}</span>
      <button
        type="button"
        onClick={() =>
          setPlateInventory({
            ...inventory,
            [weight]: inventory[weight] + 1,
          })
        }
      >
        +
      </button>
    </div>
  );
};

export default Plate;

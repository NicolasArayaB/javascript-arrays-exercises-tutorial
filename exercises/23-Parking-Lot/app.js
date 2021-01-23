let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
];

const getParkingLotState = (parking_state) => {
    let total = 0;
    let available = 0;
    let occupied = 0;
    const state = {};

    for (let row of parking_state)
        for (let slot of row)
            if (slot == 1){
                occupied += 1;
                total += 1;
            } else if (slot == 2){
                available += 1;
                total += 1;
            }
            
    state["totalSlots"] = total;
    state["availableSlots"] = available;
    state["occupiedSlots"] = occupied;
    return state
}
console.log(getParkingLotState(parking_state))
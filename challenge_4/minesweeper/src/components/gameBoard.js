function gameBoard() {
  const board = [
    [10, 1, 0, 0, 0, 0, 0, 0, 1, 10],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 10, 10, 10, 0, 0, 0, 0],
    [0, 0, 0, 10, 8, 10, 0, 0, 0, 0],
    [0, 0, 0, 10, 10, 10, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [10, 1, 0, 0, 0, 0, 0, 0, 1, 10]
  ];

  return board;
}

export default gameBoard();

//***Possible items to display***
//Unclicked Tile -- 9
//Uncliked Tile with Flag
//Revealed Tile - Bomb
//Revealed Tile - Blank Space
//Revealed Tile - Number of bombs that tile touches

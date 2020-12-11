function boardContents() {
  const board = [
    [1, 0, 0],
    [0, 0, 0],
    [1, 1, 0]
  ];

  return board;
}

export default boardContents();

//***Possible items to display***
//Unclicked Tile
//Uncliked Tile with Flag
//Revealed Tile - Bomb
//Revealed Tile - Blank Space
//Revealed Tile - Number of bombs that tile touches
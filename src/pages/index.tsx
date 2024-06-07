import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const directions = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];

  const check_directions = [
    [0, i],
    [0, -i],
    [i, i],
    [-i, -i],
    [i, 0],
    [-i, 0],
    [i, -i],
    [-i, i],
  ]

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    for(const dir of directions) /* 全方向を見渡す */ {
    if (board[y + dir[0]] !== undefined && board[x + dir[1]] !== undefined && board[y + dir[0]][x + dir[1]] === 2 / turnColor)
      /* 方向の指定 */ { 
      for (let i:number = 0; i++;) /* 一方向に対して異なる色の先に同じ色があるか検索 */
        {if () {};
      newBoard[y][x] = turnColor;
      setTurnColor(2 / turnColor);
    };
  };
  };

    setBoard(newBoard);
  };

  return (
    <div className={styles.container}>
      <div className={styles.boardstyle}>
        {board.map(
          (
            row,
            y, //map = for
          ) =>
            row.map(
              (
                color,
                x, //row
              ) => (
                <div
                  className={styles.cellstyle}
                  key={`${x}-${y}`}
                  onClick={() => clickHandler(x, y)}
                >
                  {color !== 0 && (
                    <div
                      className={styles.stoneStyle}
                      style={{ background: color === 1 ? '#000' : '#fff' }}
                    />
                  )}
                </div>
              ),
            ),
        )}
      </div>
    </div>
  );
};

export default Home;

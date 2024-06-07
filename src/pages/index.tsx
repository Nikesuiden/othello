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

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    const direction = [[y + 1],[y - 1], [x + 1], [x - 1]];

    if (board[y + 1] !== undefined && board[y + 1][x] === 2 / turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(2 / turnColor);
    }
    if (board[y - 1] !== undefined && board[y - 1][x] === 2 / turnColor) {
      newBoard[y][x] = turnColor;
      setTurnColor(2 / turnColor);
    }



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

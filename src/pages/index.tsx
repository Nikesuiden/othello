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

  let countTurn = 1;

  const clickHandler = (x: number, y: number) => {
    console.log(`クリックした座標 -> [${x}, ${y}]`);
    const newBoard = structuredClone(board);

    for (const dir of directions) /* 異色の先に同色があるか一方向ずつ見てみましょう */ {
      if (
        // ボードの範囲内でかつ隣の駒が異色であった場合通過
        board[y + dir[0]] !== undefined &&
        board[y + dir[0]][x + dir[1]] !== undefined && // board[y座標を示す][x座標を示す]
        board[y + dir[0]][x + dir[1]] === 2 / turnColor
      ) {
        // 一歩進ませます。行き先が異色である場合、もう一歩進ませます
        for (let i = 1; i++; ) {
          console.log(`dir = ${dir}, i = ${i}`);

          // 進んだ先が範囲外なら処理を落とす
          if (
            board[y + dir[0] * i] === undefined ||
            board[y + dir[0] * i][x + dir[1] * i] === undefined
          ) {
            break;
          }

          // もし進んだ先に置いた石と同じ色があったら石を置く
          else if (
            board[y + dir[0] * i] === undefined ||
            board[y + dir[0] * i][x + dir[1] * i] === turnColor
          ) {
            newBoard[y][x] = turnColor;

            // 挟まれたコマをひっくり返す処理
            for (let n = 1; n < i; n++) {
              console.log(`n = ${n}`);
              newBoard[y + dir[0] * n][x + dir[1] * n] = turnColor;
            }

            setTurnColor(2 / turnColor);

            countTurn += 1;

            console.log(`ターンカウント：${countTurn}`);
            break;
          }

          // 進んだ先に駒がなかったら処理を落とす
          else if (
            board[y + dir[0] * i] === undefined ||
            board[y + dir[0] * i][x + dir[1] * i] === 0
          ) {
            break;
          }
        }
      }
    }
    // let countWhite = 0;
    // let countBlack = 0;
    // newBoard.map((row, y) => row.map((color, x) => key={`${x}-${y}`} {color === 1 ? countBlack += 1 : countWhite += 1}))
    setBoard(newBoard);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
      <div className={styles.callTurn}>
        {turnColor === 1 ? "黒":"白" }の番です, {countTurn}ターン目
      </div>
      <div className={styles.countWhite}>

      </div>
      <div className={styles.countBlack}>

      </div>
      </div>

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

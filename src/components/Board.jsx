
import Square from './Square'



export default function Board({ squares, onClick }) {

  function showSquare (i){ 
   return <Square value={squares[i]} onClick={() => onClick(i)} />;
  }

  

    return (
        <>
        <div className="board-row">
          {showSquare(0)}
          {showSquare(1)}
          {showSquare(2)}
        </div>
        <div className="board-row">
          {showSquare(3)}
          {showSquare(4)}
          {showSquare(5)}
        </div>
        <div className="board-row">
          {showSquare(6)}
          {showSquare(7)}
          {showSquare(8)}
        </div>
      </>
    )
}
import "./App.css";
import "./styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import TicTacToe from "./games/TicTacToe/TicTacToe";
import CodeCraft from "./games/CodeCraft/CodeCraft";

function App() {
  return (
    <main>
      {/* <TicTacToe /> */}
      <CodeCraft />
    </main>
  );
}

export default App;

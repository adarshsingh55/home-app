
import "./App.css";
import ConnectWallet from "./component/ConnectWallet/ConnectWallet";
import TopNavbar from "./component/TopNavbar/TopNavbar";
import TaskeState from "./context/Task/TaskeState";


function App() {
  return (
    <div className="App">
      <TaskeState>

   <TopNavbar/>
   {/* <ConnectWallet/> */}
      </TaskeState>
    </div>
  );
}

export default App;

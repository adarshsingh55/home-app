// import logo from './logo.svg';
import "./App.css";
import BottomNav from "./component/BottomNav/BottomNav";
// import Clock from "./component/Clock/Clock";
import ImgGallery from "./component/ImgGallery/ImgGallery";
import SideNav from "./component/SideNav/SideNav";
import NoteGallery from "./component/noteGallery/NoteGallery";

function App() {
  return (
    <div className="App">
      <SideNav />
      <BottomNav/>
      <ImgGallery />
      <NoteGallery />
      {/* <Clock/> */}
    </div>
  );
}

export default App;

import DropZone from "./dropzone/DropZone";
import './App.css';

function App() {
  return (
    <div>
      <p className="title">React Drag and Drop</p>
        <div className="content">
          <DropZone />
        </div>
    </div>
  );
}

export default App;

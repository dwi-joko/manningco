// import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/sidebar";
import MainPage from "./Components/mainPage";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <MainPage />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    //       Learn Reactiven
    //     </a>
    //   </header>
    // </div>
    // <div className="container p-8 m-10 mx-auto bg-gray-200 border shadow rounded-xl">
    //   <p className="mb-5 text-3xl font-bold text-gray-700">Welcome!</p>
    //   <p className="text-lg text-gray-500">React and Tailwind CSS in action</p>
    // </div>
  );
}

export default App;

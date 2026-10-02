import './App.css'

function App() {
  return (
    <>
      <div className='header'><h1>Project Dashboard Administrator</h1></div>
      <div className='box1'>
        <div className='topnav'>
          <a className="active" href="#home"><span>Home</span></a>
          <a href="#users"><span>Internal Users</span></a>
          <a href="#contracts"><span>Contracts</span></a>
        </div>
        <div className='search'>
          <input type="text" placeholder="Search for user.."></input>
        </div>
      </div>
    </>
  )
}

export default App

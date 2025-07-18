import qladstoneLogo from './assets/Qladstone_logo.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="http://qladstone.com" target="_blank">
          <img src={qladstoneLogo} className="logo" alt="Qladstone" />
        </a>
      </div>
      <h3>Welcome to www.qladstone.com.</h3>
      <div className="card">
        <p>
           
        </p>
        <p>
          Qladstone is a backend software engineer based in Singapore.<br />
          LinkedIn: <a href='http://linkedin.com/in/looquanxiang'>linkedin.com/in/looquanxiang</a><br />
          GitHub: <a href='http://github.com/Qladstone'>github.com/Qladstone</a><br />
          CV: <a href='https://files.qladstone.com/cv/QX_Resume.pdf'>files.qladstone.com/cv</a><br />
          
        </p>
      </div>
      <p className="read-the-docs">
        This website is built using Vite and React, and deployed on Vultr.
      </p>
    </>
  )
}

export default App

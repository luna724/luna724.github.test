import { useState } from 'react'
import './App.css'
import Luna724Icon from "./assets/Luna724Icon.jsx";
import RepositoryCDN from "./assets/RepositoryCDN.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={"container"}>
      <div className="center profile content">
        <Luna724Icon scale={2} className='profile-img' />
        <h2>星乃るな (luna724)</h2>
        <p className={"img-p"}>INFPの日本人です、気軽にどーぞ &nbsp;<RepositoryCDN cdnPath={"/cdn/Studykai-sakisaki.webp"} className={"compress-img"}/></p>
        <a href={"https://discordapp.com/users/1123616332349452288"}>
          [<span className={"bold"}>Contact</span>]&nbsp;&nbsp;
          <i className="fab fa-discord" />
          Discord: <span className={"underline"}>iloveichika2</span>
        </a>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

      </div>
      <Footer />
    </div>
  )
}

export default App

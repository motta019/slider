import { useState } from 'react'
import './App.css'
import TenisNike from './assets/tenis-nike.jpg'
import TenisNike2 from './assets/TenisNike2.jpg'
import TenisNike3 from './assets/TenisNike3.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={TenisNike} alt="" className="img-prod"/>
              <h2>Tenis Nike</h2>
              <p className="desc">Um lindo tenis da nike</p>
              <p className="preco">R$ 699,99</p>
              <div className="avaliacao"> <span>★ ★ ☆ ☆ ☆</span> (472)</div>
              <div className="off">- 15%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={TenisNike2} alt="" className="img-prod"/>
              <h2>Tenis Nike</h2>
              <p className="desc">Um lindo tenis da nike</p>
              <p className="preco">R$ 1100,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (378) </div>
              <div className="off">- 15%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={TenisNike3} alt="" className="img-prod"/>
              <h2>Tenis Nike</h2>
              <p className="desc">Um lindo tenis da nike</p>
              <p className="preco">R$ 950,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ☆ ☆</span> (129) </div>
              <div className="off">- 15%</div>
            </div>
          </a>

        </section>
        <section className="destaque"></section>
        <footer></footer>
      </main>
    </>
  )
}

export default App

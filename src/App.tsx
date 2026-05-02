import { useState } from 'react'
import './App.css'

function App() {
  const [brojA, setBrojA] = useState<string>('')
  const [brojB, setBrojB] = useState<string>('')
  const [rezultat, setRezultat] = useState<string>('')

  const saberi = () => {
    const a = parseFloat(brojA)
    const b = parseFloat(brojB)
    if (isNaN(a) || isNaN(b)) { setRezultat('Unesite brojeve!'); return }
    setRezultat(`${a} + ${b} = ${a + b}`)
  }

  const oduzmi = () => {
    const a = parseFloat(brojA)
    const b = parseFloat(brojB)
    if (isNaN(a) || isNaN(b)) { setRezultat('Unesite brojeve!'); return }
    setRezultat(`${a} - ${b} = ${a - b}`)
  }

  const pomnozi = () => {
    const a = parseFloat(brojA)
    const b = parseFloat(brojB)
    if (isNaN(a) || isNaN(b)) { setRezultat('Unesite brojeve!'); return }
    setRezultat(`${a} × ${b} = ${a * b}`)
  }

  const podijeli = () => {
    const a = parseFloat(brojA)
    const b = parseFloat(brojB)
    if (isNaN(a) || isNaN(b)) { setRezultat('Unesite brojeve!'); return }
    if (b === 0) { setRezultat('Dijeljenje nulom nije moguće!'); return }
    setRezultat(`${a} ÷ ${b} = ${parseFloat((a / b).toFixed(2))}`)
  }

  const resetuj = () => {
    setBrojA('')
    setBrojB('')
    setRezultat('')
  }

  return (
    <div className="wrapper">
      <div className="kartica">
        <h1 className="naslov">Kalkulator</h1>
        <p className="podnaslov">Unesite dva broja i odaberite operaciju</p>

        <div className="red">
          <div className="polje">
            <label>Broj A</label>
            <input
              type="number"
              placeholder="npr. 6"
              value={brojA}
              onChange={(e) => setBrojA(e.target.value)}
            />
          </div>
          <div className="polje">
            <label>Broj B</label>
            <input
              type="number"
              placeholder="npr. 5"
              value={brojB}
              onChange={(e) => setBrojB(e.target.value)}
            />
          </div>
        </div>

        <div className="dugmad">
          <button onClick={saberi}>Saberi</button>
          <button onClick={oduzmi}>Oduzmi</button>
          <button onClick={pomnozi}>Pomnoži</button>
          <button onClick={podijeli}>Podijeli</button>
        </div>

        {rezultat !== '' && (
          <div className="rezultat">
            {rezultat}
          </div>
        )}

        <button className="reset" onClick={resetuj}>Resetuj</button>
      </div>
    </div>
  )
}

export default App
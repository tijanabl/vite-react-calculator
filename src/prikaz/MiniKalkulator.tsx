import { useState } from 'react'
import { saberi, oduzmi, pomnozi, podijeli, validiraj } from './kalkulatorFunkcije'
import './MiniKalkulator.css'

export default function MiniKalkulator() {
  const [brojA, setBrojA] = useState<string>('')
  const [brojB, setBrojB] = useState<string>('')
  const [rezultat, setRezultat] = useState<string>('')

  const izracunaj = (operacija: string) => {
    const a = parseFloat(brojA)
    const b = parseFloat(brojB)
    if (!validiraj(a, b)) { setRezultat('Unesite brojeve!'); return }

    switch (operacija) {
      case '+': setRezultat(saberi(a, b)); break
      case '-': setRezultat(oduzmi(a, b)); break
      case '*': setRezultat(pomnozi(a, b)); break
      case '/': setRezultat(podijeli(a, b)); break
    }
  }

  const resetuj = () => {
    setBrojA('')
    setBrojB('')
    setRezultat('')
  }

  return (
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
        <button onClick={() => izracunaj('+')}>Saberi</button>
        <button onClick={() => izracunaj('-')}>Oduzmi</button>
        <button onClick={() => izracunaj('*')}>Pomnoži</button>
        <button onClick={() => izracunaj('/')}>Podijeli</button>
      </div>

      {rezultat !== '' && (
        <div className="rezultat">{rezultat}</div>
      )}

      <button className="reset" onClick={resetuj}>Resetuj</button>
    </div>
  )
}
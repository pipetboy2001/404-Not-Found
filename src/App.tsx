import './Styles/main.scss'

function App() {

  return (
    <>
    <div>
      <img src='./assets/Scarecrow.png' alt='Scarecrow'/>
    </div>

    <div>
      <h1 className='TextBad'>
        I have bad news for you
      </h1>
      <p className='MiniText'>
        The page you are looking for might be removed or is temporaly unavabiable
      </p>
    </div>

    <div>
      <button className='BadButton'>
        Back to HomePage
      </button>
    </div>

    </>
  )
}

export default App

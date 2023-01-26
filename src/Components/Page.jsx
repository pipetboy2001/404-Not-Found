import React from 'react'

export const Page = () => {
  return (
    <div className="contenedor-padre">
      <div className="izquierda">
        <img
          className="Scarecrow"
          src="https://github.com/pipetboy2001/404-Not-Found/blob/main/src/assets/Scarecrow.png?raw=true"
          alt="Scarecrow"
        />
      </div>

      <div className="derecha">
        <div>
          <h1 className="TextBad">I have bad news for you</h1>
          <p className="MiniText">
            The page you are looking for might be removed or is temporaly
            unavabiable
          </p>
        </div>
        <div>
          <button className="BadButton">Back to HomePage</button>
        </div>
      </div>
    </div>
  );
}

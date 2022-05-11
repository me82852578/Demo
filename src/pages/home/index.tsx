import React from "react";
import { ReactComponent as SunIcon } from "./sun.svg";
import { ReactComponent as StarIcon } from "./star.svg";
import { ReactComponent as PeaceIcon } from "./peace.svg";
import "./index.scss";

function Home() {
  return (
    <div className="home">
      <header>
        <div className="starBox">
          <StarIcon height="23px" />
          <StarIcon height="15px" />
          <StarIcon height="10px" />
        </div>
        <div className="foreground">
          <h1>Jay's Demo Space</h1>
          <div className="typing-effect">
            <p>If any questions, feel free to ask.</p>
          </div>
          <SunIcon
            height="200px"
            width="200px"
            viewBox="-44 -44 600 600"
            className="sun-icon"
          />
          <div className="temp-text">
            <p>
              Hope the world peace. <PeaceIcon height="42px" stroke="whitesmoke" fill="whitesmoke" />
            </p>
          </div>
        </div>
      </header>
      <section>
        <h2>Section 1</h2>
      </section>
      <section>
        <h2>Section 2</h2>
      </section>
      <section>
        <h2>Section 3</h2>
      </section>
      <section>
        <h2>Section 4</h2>
      </section>
    </div>
  );
}

export default Home;

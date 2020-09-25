import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [latest, setLatest] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/countries/malaysia"),
      ])
      .then((responseArr) => {
        setLatest(responseArr[0].data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  return (
    <div className="App">
      <main>
        <nav>
          <a href="" className="logo">{lastUpdated}</a>
          <a href="#about" className="rightlink">About</a>
        </nav>

        <h1 className="header">Daily updates on the Covid-19 outbreak in Malaysia.</h1>

        <div className="numflex">
          <div className="flex1">
            <h2>{latest.cases}<br></br><span>total cases</span></h2>
          </div>
          <div className="flex2">
            <h2>{latest.recovered}<br></br><span>cured</span></h2>
          </div>
          <div className="flex3">
            <h2>{latest.deaths}<br></br><span>deaths</span></h2>
          </div>
        </div>

        <div className="cont section">
          <h2>Symptoms</h2>
          <h3>
            The most common symptoms of coronavirus disease (COVID-19) are fever, 
            tiredness, and dry cough. Most people (about 80%) recover from the 
            disease without needing special treatment.<br></br>
            <br></br>
            People may experience:<br></br>
            • cough<br></br>
            • fever<br></br>
            • tiredness<br></br>
            • difficulty breathing (severe cases)
          </h3>

          <h2>How it spreads</h2>
          <h3>
            Coronavirus disease spreads primarily through contact with an infected person 
            when they cough or sneeze. It also spreads when a person touches a surface or 
            object that has the virus on it, then touches their eyes, nose, or mouth.
          </h3>

          <h2>Prevention</h2>
          <h3>
            Do the five:<br></br>
            1. HANDS Wash them often<br></br>
            2. ELBOW Cough into it<br></br>
            3. FACE Don't touch it<br></br>
            4. SPACE Keep safe distance<br></br>
            5. HOME Stay if you can<br></br>
          </h3>

          <h2>Treatment</h2>
          <h3>
            There is no specific medicine to prevent or treat coronavirus disease (COVID-19).
            People may need supportive care to help them breathe. If you develop a fever, cough, 
            and have difficulty breathing, promptly seek medical care.
          </h3>
        </div>

        <div className="cont about">
          <h2 id="about">About</h2>
          <h3>
            The purpose of this website is to help inform the people of Malaysia about 
            the current situation of the Covid-19 outbreak. Time and date of update are shown
            uptop on the left side of the navigation bar. Thanks for visiting and stay safe.<br></br>
            <br></br>
            Feedback:<br></br>
            - <a href="mailto:joshuachew8118@gmail.com?Subject=Covid-19 website feedback">Email</a><br></br>
            - <a href="https://t.me/damnitjoshua">Telegram</a><br></br>
            <br></br>
            Made with ❤️ by Joshua Chew
          </h3>
        </div>
      </main>
    </div>
  );
}

export default App;

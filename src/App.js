import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import MainPage from "./Containers/MainPage/MainPage";



function App() {
  const [questions, setQuestions] = useState([]);


useEffect(() => {
  const fetchData = async () => {
    const data = await fetch('https://untitled-vo7ndi24dx6y.runkit.sh/v1');

    const json = await data.json();
    
    setQuestions(json.data.problems);
    console.log(json);
  }

  fetchData()
  .catch(console.error);
}, [])

  console.log(questions);

  return (
    <div className="App">
        <MainPage/>
        {questions.map((quest, questIdx) => {
          <div key={questIdx}>
            {quest.description}
            quest.map((opt, optIdx) => {
              <option key={optIDx}>
                {opt.solution}
              </option>
            })
            </div>
        )}}
    </div>
  );
}

export default App;

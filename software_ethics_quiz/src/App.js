import './App.css';
import Landing from "./pages/landing";
import Terms from "./pages/terms";
import SummaryAndFeedback from "./pages/summaryAndFeedback";
import Questions from '../src/pages/questions';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from "react";
import Role from "./pages/role";

function App() {

    const [responses, setResponses] = useState({profession: null, answers: null});

    function setProfession(profession) {
        setResponses({...responses, profession});
    }

    function setSelectedAnswers(selectedAnswers) {
        setResponses({...responses, answers: selectedAnswers});
    }

    // test mongodb post
    /*const answer = [
        [1, 2, 3, 4],
        [3, 2, 4, 1],
        [2, 3, 4, 1],
        [1, 2, 3, 4]
    ];
 
    async function insert() {
    await fetch("http://localhost:5050/answer", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(answer),
    }).catch(e => {
        console.error(e);
        return;
    });
    }

    insert();*/

    return (
        <main className="App">
            <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path='/' exact element={<Landing />} />
                    <Route path='/terms' exact element={<Terms />} />
                    <Route path='/role' exact element={<Role setProfession={setProfession}/>} />
                    <Route path='/questions' exact element={<Questions setFinalSelectedAnswers={setSelectedAnswers}/>}/>

                    <Route
                        exact
                        path="/summary"
                        element={responses.answers ? <SummaryAndFeedback responses={responses}/> : <Navigate replace to={"/"} />}
                    />
                    {/* <Route path='/summary' exact element={<SummaryAndFeedback />} /> */}
                </Routes>
            </Router>
        </main>
    );
}

export default App;

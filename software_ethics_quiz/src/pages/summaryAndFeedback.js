import React, { useState } from 'react';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import '../styles/summaryAndFeedback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { scenariosAndQuestions as SCENARIO_AND_QUESTIONS } from '../constants/scenariosAndQuestions';

function SummaryAndFeedback() {
    // TODO: get answers from other pg
    let selectedAnswers = [
        [3, 2, 3, 3],
        [3, 3, 3, 3],
        [3, 3, 3, 3],
        [3, 3, 3, 3]
    ];
    let maxScore = 16 * 4;


    const getScore = (selectedAnswers, maxScore) => {
        let score = 0;
        selectedAnswers.forEach(function (scenarioAns, scenario) {
            scenarioAns.forEach(function (ans, ques) {
                score += SCENARIO_AND_QUESTIONS[scenario].questions[ques].answers[ans].score;
            });
        });
        return Math.round(score / maxScore);
        // return score;
    };

    const getStars = (score) => {
        const stars = [];
        let numStars = 5;
        for (let i = 0; i < score; i++) {
            stars.push(<FontAwesomeIcon icon={faStar} className='star' color='orange' />);
        }
        for (let i = 0; i < (numStars - score); i++) {
            stars.push(<FontAwesomeIcon icon={faStar} className='star' />);
        }

        return stars;
    };

    const handleClick = (scenarioNum, quesNum, selectedAnswers) => {
        let scenario = scenarioNum - 1;
        let ques = quesNum - 1;
        let ans = selectedAnswers[scenario][ques];

        setFeedbackBoxTitle("Question " + quesNum);
        // setFeedbackBoxContent(selectedAnswers[scenarioNum]);
        // setFeedbackBoxContent(ans);
        // setFeedbackBoxContent(SCENARIO_AND_QUESTIONS[scenario].questions[ques].question);
        setFeedbackBoxContent(SCENARIO_AND_QUESTIONS[scenario].questions[ques].answers[ans].userFeedback);
    };


    let score = getScore(selectedAnswers, maxScore);


    const [feedbackBoxTitle, setFeedbackBoxTitle] = useState("Good Try!");
    // const [feedbackBoxContent, setFeedbackBoxContent] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sem cursus, convallis ex in, rutrum lorem. Curabitur efficitur ante ac congue sodales. Mauris varius ac sapien sit amet fermentum. Morbi quis dui efficitur mauris ultrices ullamcorper in quis nibh. Nulla dignissim eu ex at imperdiet. Maecenas sollicitudin venenatis ex ut porttitor. Vestibulum eget sodales sapien, sed vehicula orci. Nunc vel augue vitae orci vestibulum molestie. Sed dapibus urna sed facilisis sagittis.");
    const stars = useState(getStars(score));
    const [feedbackBoxContent, setFeedbackBoxContent] = useState(score);


    return (
        <div className="summaryAndFeedbackPage">
            <div className="summaryAndFeedbackHeader">
                <h1 className='headerTitle'>Summary and Feedback</h1>
            </div>
            <div className='summaryAndFeedbackContent'>

                <Container>
                    <Row>
                        <Col sm={8} className="feedback-container ">
                            <Stack gap={3} justify-content-center>
                                <div>
                                    <h2 className='feedbackBoxTitle'>{feedbackBoxTitle}</h2>
                                    <div className="feedbackBox ">
                                        {stars}
                                        <p>
                                            {feedbackBoxContent}
                                        </p>
                                    </div>
                                </div>
                                <button type="button" class="startButton btn btn-outline-light btn-sm" id='scenarioBtn' hidden>Scenario</button>
                            </Stack>

                        </Col>
                        <Col sm={4} className="questions-container">
                            <Stack gap={1}>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(1,1,selectedAnswers)}>Question 1</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(1,2,selectedAnswers)}>Question 2</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(1,3,selectedAnswers)}>Question 3</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(1,4,selectedAnswers)}>Question 4</Button>
                            </Stack>
                            <br />
                            <Stack gap={1}>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(2,1,selectedAnswers)}>Question 5</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(2,2,selectedAnswers)}>Question 6</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(2,3,selectedAnswers)}>Question 7</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(2,4,selectedAnswers)}>Question 8</Button>
                            </Stack>
                            <br />
                            <Stack gap={1}>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(3,1,selectedAnswers)}>Question 9</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(3,2,selectedAnswers)}>Question 10</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(3,3,selectedAnswers)}>Question 11</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(3,4,selectedAnswers)}>Question 12</Button>
                            </Stack>
                            <br />
                            <Stack gap={1}>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(4,1,selectedAnswers)}>Question 13</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(4,2,selectedAnswers)}>Question 14</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(4,3,selectedAnswers)}>Question 15</Button>
                                <Button variant='outline-light' className="questionButton" onClick={() => handleClick(4,4,selectedAnswers)}>Question 16</Button>
                            </Stack>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant='outline-light' className="tryAgainButton">Try Again</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default SummaryAndFeedback;

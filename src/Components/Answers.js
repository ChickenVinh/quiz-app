import React from 'react'
import Answer from './Answer'

const Answers = (props) => {
    const correctAnswer = props.correct_answer
    const incorrectAnswers = props.incorrect_answers
    const answerSet = incorrectAnswers.concat(correctAnswer)
    return (
        <>
            {answerSet.map((x, index) => {
                return (
                    <Answer
                        //give it a random number to declare position in quiz
                        //rn last option is correct answer
                        key={index}
                        answer={x}
                    />
                )
            })}
        </>
    )
}

export default Answers

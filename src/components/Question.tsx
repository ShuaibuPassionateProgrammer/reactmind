import useQuizStore from "../store/useQuizStore";

const Question = () => {
    const {
        questions,
        currentQuestion,
        selectAnswer,
        answers,
        nextQuestion,
        prevQuestion,
        showScore,
        score,
        resetQuiz,
    } = useQuizStore();

    if (showScore) {
        return (
            <div className="w-3/4 p-8 bg-white rounded-2xl shadow-xl max-w-3xl mx-auto">
                <div className="text-center py-8">
                    <h2 className="text-3xl font-bold text-indigo-800 mb-6">Quiz Completed!</h2>
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full w-48 h-48 flex items-center justify-center mx-auto mb-8 shadow-lg">
                        <div>
                            <p className="text-5xl font-bold">{score}</p>
                            <p className="text-xl">out of {questions.length}</p>
                        </div>
                    </div>
                    <p className="text-2xl text-gray-700 mb-2">
                        {score === questions.length ? "Perfect! 🎉" : 
                         score >= questions.length/2 ? "Good job! 👍" : "Keep practicing! 💪"}
                    </p>
                    <p className="text-lg text-gray-600 mb-8">
                        {Math.round((score/questions.length)*100)}% Correct
                    </p>
                    <button
                        onClick={resetQuiz}
                        className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300"
                    >
                        Restart Quiz
                    </button>
                </div>
            </div>
        );
    }

    const question = questions[currentQuestion];
    const currentAnswer = answers[currentQuestion];

    const handleSelect = (optionIndex: any) => {
        selectAnswer(optionIndex);
    };

    const handleSubmit = () => {
        nextQuestion();
    };

    return (
        <div className="w-3/4 p-8 bg-white rounded-2xl shadow-xl max-w-3xl mx-auto">
            <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-indigo-800">Question {currentQuestion + 1}</h3>
                    <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-bold">
                        {currentQuestion + 1} of {questions.length}
                    </span>
                </div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">{question.question}</h2>
                
                <div className="space-y-4 mt-8">
                    {question.options.map((option, index) => (
                        <div 
                            key={index} 
                            onClick={() => handleSelect(index)}
                            className={`p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                                currentAnswer === index 
                                    ? "border-indigo-500 bg-indigo-50 shadow-md" 
                                    : "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50"
                            }`}
                        >
                            <label className="flex items-center cursor-pointer">
                                <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                                    currentAnswer === index 
                                        ? "border-indigo-500 bg-indigo-500" 
                                        : "border-gray-300"
                                }`}>
                                    {currentAnswer === index && (
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    )}
                                </div>
                                <span className="text-lg text-gray-700">{option}</span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between mt-10 pt-6 border-t border-gray-200">
                {currentQuestion > 0 && (
                    <button
                        onClick={prevQuestion}
                        className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-300 transition-colors duration-200 flex items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Previous
                    </button>
                )}

                <div className="ml-auto">
                    {currentQuestion < questions.length - 1 ? (
                        <button
                            onClick={nextQuestion}
                            disabled={currentAnswer === null}
                            className={`px-6 py-3 font-semibold rounded-lg shadow flex items-center ${
                                currentAnswer !== null
                                    ? "bg-indigo-600 text-white hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                        >
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            disabled={currentAnswer === null}
                            className={`px-6 py-3 font-semibold rounded-lg shadow flex items-center ${
                                currentAnswer !== null
                                    ? "bg-green-600 text-white hover:bg-green-700 transform hover:scale-105 transition-all duration-200"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                        >
                            Submit Quiz
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Question;
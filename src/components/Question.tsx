import { FaTrophy, FaRedo, FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";
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
        const percentage = Math.round((score / questions.length) * 100);
        return (
            <div className="w-full max-w-2xl animate-fade-in">
                <div className="glass rounded-[2.5rem] p-12 text-center relative overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 transform rotate-12 shadow-inner">
                            <FaTrophy className="text-5xl" />
                        </div>

                        <h2 className="text-4xl font-extrabold text-slate-800 mb-2">Quiz Completed!</h2>
                        <p className="text-slate-500 font-medium mb-10">You've reached the finish line.</p>

                        <div className="flex justify-center items-end gap-2 mb-10">
                            <span className="text-7xl font-black text-indigo-600 leading-none">{score}</span>
                            <span className="text-2xl font-bold text-slate-400 mb-2">/ {questions.length}</span>
                        </div>

                        <div className="bg-slate-50 rounded-3xl p-6 mb-10 flex items-center justify-between">
                            <div className="text-left">
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Accuracy</p>
                                <p className="text-2xl font-bold text-slate-800">{percentage}%</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Performance</p>
                                <p className="text-2xl font-bold text-indigo-600">
                                    {percentage === 100 ? "Perfect! 🎉" : percentage >= 70 ? "Great! 🌟" : percentage >= 50 ? "Good! 👍" : "Keep it up! 💪"}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={resetQuiz}
                            className="btn-primary w-full flex items-center justify-center gap-3 py-5 text-lg"
                        >
                            <FaRedo /> Try Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const question = questions[currentQuestion];
    const currentAnswer = answers[currentQuestion];

    return (
        <div className="w-full max-w-3xl animate-fade-in">
            <div className="glass rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden">
                {/* Progress Header */}
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-500 bg-indigo-50 px-4 py-2 rounded-full">
                            Question {currentQuestion + 1}
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="text-sm font-bold text-slate-400">
                            {currentQuestion + 1} <span className="mx-1 text-slate-300">of</span> {questions.length}
                        </span>
                    </div>
                </div>

                {/* Question Text */}
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-12">
                    {question.question}
                </h2>

                {/* Options Grid */}
                <div className="grid grid-cols-1 gap-4">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => selectAnswer(index)}
                            className={`group relative p-6 rounded-2xl border-2 text-left transition-all duration-300 ${currentAnswer === index
                                ? "border-indigo-600 bg-indigo-50/50 shadow-lg shadow-indigo-100"
                                : "border-slate-100 hover:border-indigo-200 hover:bg-slate-50"
                                }`}
                        >
                            <div className="flex items-center gap-5">
                                <div className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${currentAnswer === index
                                    ? "bg-indigo-600 border-indigo-600 text-white scale-110"
                                    : "border-slate-200 group-hover:border-indigo-300"
                                    }`}>
                                    {currentAnswer === index ? <FaCheck className="text-sm" /> : <span className="text-xs font-bold text-slate-400 group-hover:text-indigo-400">{String.fromCharCode(65 + index)}</span>}
                                </div>
                                <span className={`text-lg font-semibold transition-colors duration-300 ${currentAnswer === index ? "text-indigo-900" : "text-slate-600 group-hover:text-slate-900"
                                    }`}>
                                    {option}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Navigation Footer */}
                <div className="flex justify-between items-center mt-12 pt-10 border-t border-slate-100">
                    <button
                        onClick={prevQuestion}
                        disabled={currentQuestion === 0}
                        className="btn-secondary flex items-center gap-2 disabled:opacity-0 transition-all duration-300"
                    >
                        <FaArrowLeft className="text-sm" /> Previous
                    </button>

                    <button
                        onClick={nextQuestion}
                        disabled={currentAnswer === null}
                        className={`btn-primary flex items-center gap-2 ${currentQuestion === questions.length - 1 ? "bg-emerald-600 hover:bg-emerald-700 hover:shadow-emerald-500/30" : ""
                            }`}
                    >
                        {currentQuestion === questions.length - 1 ? (
                            <>Complete Quiz <FaCheck /></>
                        ) : (
                            <>Next Question <FaArrowRight /></>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Question;
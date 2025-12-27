import { FaCheckCircle } from "react-icons/fa";
import useQuizStore from "../store/useQuizStore";

const Sidebar = () => {
    const { questions, currentQuestion } = useQuizStore();

    return (
        <div className="w-full lg:w-full glass rounded-3xl p-6 md:p-8 flex flex-col lg:h-[calc(100vh-2rem)] animate-slide-in">
            <div className="mb-6 md:mb-10">

                <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-500 mb-2">Progress</h2>
                <h3 className="text-3xl font-extrabold text-slate-800">Quiz Journey</h3>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                <ul className="space-y-4">
                    {questions.map((_, index) => (
                        <li
                            key={index}
                            className={`flex items-center p-4 rounded-2xl transition-all duration-300 ${index === currentQuestion
                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105"
                                : index < currentQuestion
                                    ? "bg-indigo-50 text-indigo-700"
                                    : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                                }`}
                        >
                            <div className="mr-4">
                                {index < currentQuestion ? (
                                    <FaCheckCircle className="text-xl" />
                                ) : (
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${index === currentQuestion ? "border-white" : "border-slate-300"
                                        }`}>
                                        {index === currentQuestion && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
                                    </div>
                                )}
                            </div>
                            <span className="font-bold tracking-tight">
                                Question {index + 1}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-center justify-between text-sm font-bold text-slate-500">
                    <span>Completion</span>
                    <span>{Math.round(((currentQuestion) / questions.length) * 100)}%</span>
                </div>
                <div className="mt-2 w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                        style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
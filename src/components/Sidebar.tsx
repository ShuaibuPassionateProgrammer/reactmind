import { FaCheckCircle, FaCircle } from "react-icons/fa";
import useQuizStore from "../store/useQuizStore";

const Sidebar = () => {
    const { questions, currentQuestion } = useQuizStore();

    return (
        <div className="w-1/4 bg-gradient-to-b from-blue-50 to-indigo-50 p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-2">Quiz Progress</h2>
            <ul className="space-y-3">
                {questions.map((_, index) => (
                <li key={index} className="flex items-center p-2 rounded-lg transition-all duration-200 hover:bg-indigo-100">
                    {index <= currentQuestion ? (
                        <FaCheckCircle
                        className={`mr-3 text-xl ${
                            index === currentQuestion ? "text-indigo-600 animate-pulse" : "text-green-500"
                        }`}
                        />
                    ) : (
                        <FaCircle className="mr-3 text-xl text-gray-300" />
                    )}
                    <span className={`font-medium ${index === currentQuestion ? "text-indigo-700 font-bold" : "text-gray-600"}`}>
                        Question {index + 1}
                    </span>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
import Sidebar from "./Sidebar";
import Question from "./Question";

const QuizLayout = () => {
    return (
        <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <Sidebar />
            <div className="flex-1 flex items-center justify-center overflow-y-auto">
                <Question />
            </div>
        </div>
    );
};

export default QuizLayout;
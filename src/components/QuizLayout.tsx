import Sidebar from "./Sidebar";
import Question from "./Question";

const QuizLayout = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50 p-4 gap-4">
            <div className="w-full lg:w-1/4">
                <Sidebar />
            </div>
            <div className="flex-1 flex items-center justify-center overflow-y-auto py-8">
                <Question />
            </div>
        </div>
    );
};

export default QuizLayout;
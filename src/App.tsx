import { useState } from "react";
import QuizLayout from "./components/QuizLayout";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="App min-h-screen">
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <div className="animate-fade-in">
          <QuizLayout />
        </div>
      )}
    </div>
  );
};

export default App;
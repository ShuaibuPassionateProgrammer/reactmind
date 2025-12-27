import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500); // Wait for fade out animation
        }, 2500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-950 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative flex flex-col items-center">
                {/* Animated Logo Background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>

                {/* Logo Icon */}
                <div className="relative w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl flex items-center justify-center shadow-2xl mb-8 transform rotate-12 animate-fade-in">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                    </svg>
                </div>

                {/* App Name */}
                <h1 className="text-4xl font-bold text-white tracking-tight mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Quiz<span className="text-indigo-400">Master</span>
                </h1>

                {/* Tagline */}
                <p className="text-slate-400 font-medium animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    Challenge Your Mind
                </p>

                {/* Loading Bar */}
                <div className="mt-12 w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-[loading_2s_ease-in-out_infinite]"></div>
                </div>
            </div>

            <style>{`
        @keyframes loading {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 100%; transform: translateX(0%); }
          100% { width: 0%; transform: translateX(100%); }
        }
      `}</style>
        </div>
    );
};

export default SplashScreen;

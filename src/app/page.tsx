"use client";

import { useState } from "react";

export default function Home() {
  const defaultSnackEmojis: { [key: string]: string } = {
    "Cold pizza from last crit day": "🍕",
    "Microwaved coffee for the 3rd time": "☕",
    "Peanut butter on a scale ruler": "📏",
    "Energy drink with a splash of existential crisis": "🫠",
    "Instant ramen between deadlines": "🍜",
    "Granola bar found in your desk drawer from last semester": "🌾",
    "Half a bagel stolen from the materials library": "🥯",
    "Leftover donuts from the client meeting": "🍩",
    "Trail mix spilled on your trace paper": "🥜",
    "Yesterday&apos;s sandwich discovered under a pile of sketches": "🥪",
    "Coffee beans eaten straight from desperation": "☕",
    "Mints found in your plotting folder": "🍬"
  };

  const [snackEmojis, setSnackEmojis] = useState(defaultSnackEmojis);
  const [newSnack, setNewSnack] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [snack, setSnack] = useState("");
  const [mood, setMood] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [, setClickCount] = useState(0);
  const [showWaterReminder, setShowWaterReminder] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  const moods = [
    "while re-exporting a 2GB PDF for the fourth time",
    "as your model crashes for the third time today",
    "because the client just requested &apos;something timeless but trendy&apos;",
    "while praying the render finishes before sunrise",
    "because Revit just crashed during cloud sync",
    "while waiting for AutoCAD to stop &apos;not responding&apos;",
    "because your professor said &apos;just iterate more&apos;",
    "while the plotter jams during your final submission",
    "because your scale figures look suspiciously like memes",
    "while trying to explain why that column HAS to be there"
  ];

  const suggestSnack = () => {
    const snacks = Object.keys(snackEmojis);
    setIsVisible(false);
    setClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 1) {
        setShowCTA(true);
      }
      if (newCount === 10) {
        setShowWaterReminder(true);
        setTimeout(() => setShowWaterReminder(false), 5000);
      }
      return newCount;
    });
    setTimeout(() => {
      const randomSnack = snacks[Math.floor(Math.random() * snacks.length)];
      const randomMood = moods[Math.floor(Math.random() * moods.length)];
      setSnack(randomSnack);
      setMood(randomMood);
      setIsVisible(true);
    }, 500);
  };

  const shareOnTwitter = () => {
    const tweetText = `I&apos;m eating ${snack} ${mood}. ${snackEmojis[snack]} Send help. 🧑‍💻`;
    const url = "https://arkkisnack.vercel.app";
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
  };

  const handleSubmitSnack = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSnack.trim()) {
      setSnackEmojis(prev => ({
        ...prev,
        [newSnack]: "🍽️" // Default emoji for custom snacks
      }));
      setNewSnack("");
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f7] via-[#eaeaea] to-[#f7f7f7] animate-gradient bg-[length:300%_300%]"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-gray-800 text-center">
          What Should I Eat While Rendering?
        </h1>
        
        <div 
          className={`flex flex-col items-center justify-center mb-8 min-h-[8rem] text-center transition-all duration-500 ease-in-out ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
          }`}
        >
          <div className="text-3xl md:text-5xl mb-2">
            {snack || "Click the button to get a snack!"}
          </div>
          {snack && (
            <div className="text-6xl md:text-7xl mb-4 animate-bounce">
              {snackEmojis[snack]}
            </div>
          )}
          {mood && (
            <div className="text-xl md:text-2xl text-gray-500 italic">
              {mood}
            </div>
          )}
          {showCTA && (
            <div className="text-sm text-gray-500 mt-6 transition-opacity duration-500 ease-in-out">
              Architect? Designer? Your snack deserves a portfolio.{" "}
              <a 
                href="https://arkiste.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline text-gray-600"
              >
                → Create yours on Arkiste.com
              </a>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <button
              onClick={suggestSnack}
              className="px-8 py-4 bg-blue-500 text-white text-xl rounded-lg shadow-lg hover:bg-blue-600 
                       transform hover:scale-105 transition-all duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Suggest a Snack
            </button>

            {snack && (
              <button
                onClick={shareOnTwitter}
                className="px-8 py-4 bg-[#1DA1F2] text-white text-xl rounded-lg shadow-lg hover:bg-[#1a8cd8]
                         transform hover:scale-105 transition-all duration-200 ease-in-out
                         focus:outline-none focus:ring-2 focus:ring-[#1DA1F2] focus:ring-opacity-50
                         flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Share this snack
              </button>
            )}
          </div>

          {showWaterReminder && (
            <div className="text-blue-600 font-medium text-lg animate-fade-in-out flex items-center gap-2">
              Okay, maybe it&apos;s time to drink some water <span className="text-2xl">💧</span>
            </div>
          )}
        </div>

        <div className="w-full max-w-md mt-8 mb-16">
          <form onSubmit={handleSubmitSnack} className="flex flex-col items-center gap-4">
            <input
              type="text"
              value={newSnack}
              onChange={(e) => setNewSnack(e.target.value)}
              placeholder="Suggest a new snack..."
              className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:border-blue-500 
                       focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 focus:outline-none
                       transition-all duration-200"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-green-500 text-white text-lg rounded-lg shadow-lg hover:bg-green-600 
                       transform hover:scale-105 transition-all duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
            >
              Add Snack
            </button>
            {showConfirmation && (
              <div className="text-green-600 font-medium animate-fade-in-out">
                Snack added! ✨
              </div>
            )}
          </form>
        </div>

        <footer className="absolute bottom-4 text-sm text-gray-500 italic mt-16">
          Made by an architect who just wanted a snack.
        </footer>
      </div>
    </main>
  );
}

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
    "Yesterday's sandwich discovered under a pile of sketches": "🥪",
    "Coffee beans eaten straight from desperation": "☕",
    "Mints found in your plotting folder": "🍬"
  };

  const [snackEmojis] = useState(defaultSnackEmojis);
  const [snack, setSnack] = useState("");
  const [mood, setMood] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [, setClickCount] = useState(0);
  const [showWaterReminder, setShowWaterReminder] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  const moods = [
    "while re-exporting a 2GB PDF for the fourth time",
    "as your model crashes for the third time today",
    "because the client just requested 'something timeless but trendy'",
    "while praying the render finishes before sunrise",
    "because Revit just crashed during cloud sync",
    "while waiting for AutoCAD to stop 'not responding'",
    "because your professor said 'just iterate more'",
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
    const tweetText = `I'm eating ${snack} ${mood}. ${snackEmojis[snack]} Send help. 🧑‍💻`;
    const url = "https://arkkisnack.vercel.app";
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
  };

  const ShareButtons = ({ snack, mood }: { snack: string; mood: string }) => {
    const shareUrl = "https://arkkisnack.vercel.app";
    const shareText = `I'm eating ${snack} ${mood}. Send snacks. 🧑‍💻`;
    const fullShareText = `${shareText} ${shareUrl}`;

    const copyToClipboard = async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        // Tooltip päivitys voitaisiin tehdä tässä
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };

    const shareToWhatsApp = () => {
      const url = `https://wa.me/?text=${encodeURIComponent(fullShareText)}`;
      window.open(url, '_blank');
    };

    const shareToFacebook = () => {
      const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
      window.open(url, '_blank');
    };

    const shareToLinkedIn = () => {
      const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
      window.open(url, '_blank');
    };

    return (
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        <button
          onClick={shareToWhatsApp}
          className="w-12 h-12 flex items-center justify-center bg-[#00857F] rounded-full 
                   hover:scale-110 hover:shadow-lg transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-[#00857F] focus:ring-offset-2"
          title="Jaa WhatsAppissa"
          aria-label="Jaa WhatsAppissa"
        >
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>
        
        <button
          onClick={shareOnTwitter}
          className="w-12 h-12 flex items-center justify-center bg-[#00857F] rounded-full 
                   hover:scale-110 hover:shadow-lg transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-[#00857F] focus:ring-offset-2"
          title="Jaa Twitterissä"
          aria-label="Jaa Twitterissä"
        >
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </button>

        <button
          onClick={() => copyToClipboard(fullShareText)}
          className="w-12 h-12 flex items-center justify-center bg-[#00857F] rounded-full 
                   hover:scale-110 hover:shadow-lg transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-[#00857F] focus:ring-offset-2"
          title="Kopioi linkki Instagram-tarinaa varten"
          aria-label="Kopioi linkki Instagram-tarinaa varten"
        >
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </button>

        <button
          onClick={shareToLinkedIn}
          className="w-12 h-12 flex items-center justify-center bg-[#00857F] rounded-full 
                   hover:scale-110 hover:shadow-lg transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-[#00857F] focus:ring-offset-2"
          title="Jaa LinkedInissä"
          aria-label="Jaa LinkedInissä"
        >
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </button>

        <button
          onClick={shareToFacebook}
          className="w-12 h-12 flex items-center justify-center bg-[#00857F] rounded-full 
                   hover:scale-110 hover:shadow-lg transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-[#00857F] focus:ring-offset-2"
          title="Jaa Facebookissa"
          aria-label="Jaa Facebookissa"
        >
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </button>

        <button
          onClick={() => copyToClipboard(fullShareText)}
          className="w-12 h-12 flex items-center justify-center bg-[#00857F] rounded-full 
                   hover:scale-110 hover:shadow-lg transition-all duration-200
                   focus:outline-none focus:ring-2 focus:ring-[#00857F] focus:ring-offset-2"
          title="Kopioi linkki"
          aria-label="Kopioi linkki"
        >
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
            <path d="M7 4V2h10v2h3.008C21.108 4 22 4.898 22 6v14c0 1.102-.892 2-1.992 2H4.992C3.892 22 3 21.102 3 20V6c0-1.102.892-2 1.992-2H7zm0 2H5v14h14V6h-2v2H7V6zm2-2v2h6V4H9z"/>
          </svg>
        </button>
      </div>
    );
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-8 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-arkiste-grey/5 to-white animate-gradient bg-[length:300%_300%]"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full flex-grow">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-arkiste-dark text-center">
          What Should I Eat While Rendering?
        </h1>
        
        <div 
          className={`flex flex-col items-center justify-center mb-8 min-h-[8rem] text-center transition-all duration-500 ease-in-out ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
          }`}
        >
          <div className="text-3xl md:text-5xl mb-2 text-arkiste-dark font-semibold">
            {snack || "Click the button to get a snack!"}
          </div>
          {snack && (
            <div className="text-6xl md:text-7xl mb-4 animate-bounce">
              {snackEmojis[snack]}
            </div>
          )}
          {mood && (
            <div className="text-xl md:text-2xl text-arkiste-grey italic">
              {mood}
            </div>
          )}
          {showCTA && (
            <div className="text-sm text-arkiste-grey mt-6 transition-opacity duration-500 ease-in-out">
              Well, if you're stuck waiting for a render… might as well build your Arkiste portfolio.{" "}
              <a 
                href="https://arkiste.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-arkiste-orange hover:text-arkiste-orange/80 hover:underline"
              >
                → Create yours on Arkiste.com
              </a>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-4 mb-8">
          <button
            onClick={suggestSnack}
            className="px-8 py-4 bg-[#00857F] text-white text-xl rounded-lg shadow-lg 
                     hover:bg-[#00857F]/90 transform hover:scale-105 transition-all duration-200 ease-in-out
                     focus:outline-none focus:ring-2 focus:ring-[#00857F] focus:ring-opacity-50
                     font-semibold"
          >
            Suggest a Snack
          </button>

          {snack && (
            <>
              <div className="text-sm text-arkiste-grey mt-6 mb-2">
                Send this to your studio buddy who's running on instant noodles and ambition 🍜
              </div>
              <ShareButtons snack={snack} mood={mood} />
            </>
          )}
        </div>

        {showWaterReminder && (
          <div className="text-arkiste-lila font-medium text-lg animate-fade-in-out flex items-center gap-2 mb-8">
            Okay, maybe it's time to drink some water <span className="text-2xl">💧</span>
          </div>
        )}
      </div>

      <footer className="text-sm text-arkiste-grey italic mt-8">
        Made by an architect who just wanted a snack.
      </footer>
    </main>
  );
}

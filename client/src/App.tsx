import { useContext } from 'react';
import YouTubeDownloader from './components/YouTubeDownloader';
import { ThemeContext, ThemeProvider } from './theme/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import Logo from './components/Logo';
import Footer from './components/Footer';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className="ml-4 p-2 rounded-full bg-white/60 dark:bg-black/40 shadow transition hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <SunIcon className="h-6 w-6 text-yellow-400" />
      ) : (
        <MoonIcon className="h-6 w-6 text-blue-300" />
      )}
    </button>
  );
}

function AppShell() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' : 'bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-900'}`}>
      <header className="flex items-center justify-between px-6 py-4 shadow-lg bg-white/70 dark:bg-black/40 backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <Logo />
          <span className="text-2xl font-extrabold tracking-tight select-none text-blue-700 dark:text-white">Media Downloader</span>
        </div>
        <ThemeToggle />
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          <h2 className="text-center text-3xl font-bold mb-2 drop-shadow-lg">Download YouTube Videos & Audio</h2>
          <p className="text-center text-lg mb-8 opacity-80">Paste a YouTube link below to get started.</p>
          <YouTubeDownloader />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
} 
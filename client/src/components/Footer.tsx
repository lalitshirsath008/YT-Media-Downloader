export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 flex flex-col md:flex-row items-center justify-between bg-white/70 dark:bg-black/40 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
      <div className="text-sm opacity-80 mb-2 md:mb-0">&copy; {new Date().getFullYear()} All rights reserved.</div>
      <div className="flex items-center space-x-4">
        <a href="https://github.com/lalitshirsath008" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
          className="rounded-full p-1 bg-gradient-to-br from-gray-100/80 via-white/60 to-gray-300/60 dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 shadow-md hover:shadow-blue-400/40 transition hover:scale-110">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#181717"/><path fill="#fff" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/lalit-shirsath-2a6526310/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
          className="rounded-full p-1 bg-gradient-to-br from-blue-200/80 via-white/60 to-blue-400/60 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 shadow-md hover:shadow-blue-400/40 transition hover:scale-110">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#0A66C2"/><path fill="#fff" d="M7.5 17h-2v-7h2v7zm-1-8.28c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2zm10.5 8.28h-2v-3.5c0-.83-.02-1.9-1.15-1.9-1.15 0-1.33.9-1.33 1.83v3.57h-2v-7h1.92v.96h.03c.27-.5.92-1.03 1.89-1.03 2.02 0 2.39 1.33 2.39 3.06v4.01z"/></svg>
        </a>
        <a href="https://www.instagram.com/_lalitz" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
          className="rounded-full p-1 bg-gradient-to-br from-pink-200/80 via-white/60 to-pink-400/60 dark:from-pink-900 dark:via-pink-800 dark:to-pink-700 shadow-md hover:shadow-pink-400/40 transition hover:scale-110">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="url(#ig-gradient)"/><defs><linearGradient id="ig-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#fd5"/><stop offset=".5" stopColor="#ff543e"/><stop offset="1" stopColor="#c837ab"/></linearGradient></defs><path fill="#fff" d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.8A3 3 0 1 1 12 9a3 3 0 0 1 0 6zm5.2-8.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/></svg>
        </a>
      </div>
    </footer>
  );
} 
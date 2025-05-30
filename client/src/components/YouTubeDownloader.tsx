import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface VideoFormat {
  itag: string;
  quality: string;
  mimeType: string;
  hasAudio: boolean;
  hasVideo: boolean;
  url: string;
}

interface VideoDetails {
  title: string;
  thumbnail: string;
  audioFormats: VideoFormat[];
  videoFormats: VideoFormat[];
  videoAudioFormats: VideoFormat[];
}

export default function YouTubeDownloader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (loading) {
      setProgress(0);
      progressInterval.current = setInterval(() => {
        setProgress((prev) => {
          if (prev < 90) return prev + 10;
          return prev;
        });
      }, 200);
    } else {
      setProgress(100);
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
        progressInterval.current = null;
      }
      setTimeout(() => setProgress(0), 500);
    }
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
        progressInterval.current = null;
      }
    };
  }, [loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setVideoDetails(null);

    try {
      const response = await axios.get(`/api/youtube?url=${encodeURIComponent(url)}`);
      setVideoDetails(response.data);
    } catch (err) {
      setError('Failed to fetch video details. Please check the URL and try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (format: VideoFormat) => {
    window.open(format.url, '_blank');
  };

  return (
    <div className="space-y-6 flex flex-col items-center w-full px-2 sm:px-0">
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-xl">
        {loading && (
          <div className="w-full mb-2">
            <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-2 bg-blue-500 transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-xs text-center mt-1 text-gray-500 dark:text-gray-300">Loading... {progress}%</div>
          </div>
        )}
        <div>
          <label htmlFor="youtube-url" className="block text-sm font-medium text-gray-700 dark:text-gray-100">
            YouTube URL
          </label>
          <div className="mt-1 flex flex-col sm:flex-row rounded-md shadow-sm gap-2">
            <input
              type="text"
              name="youtube-url"
              id="youtube-url"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm dark:bg-gray-900 dark:text-white"
              placeholder="https://www.youtube.com/watch?v=..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Fetch Info'}
            </button>
          </div>
        </div>
      </form>

      {error && (
        <div className="rounded-md bg-red-50 p-4 w-full max-w-xl">
          <div className="text-sm text-red-700">{error}</div>
        </div>
      )}

      {videoDetails && (
        <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6 shadow-sm w-full max-w-xl dark:bg-gray-900 dark:border-gray-700 dark:text-white">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={videoDetails.thumbnail}
              alt={videoDetails.title}
              className="w-full max-w-md rounded-lg object-cover"
            />
            <div className="w-full">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center mb-6">{videoDetails.title}</h3>

              {/* Audio Only */}
              {videoDetails.audioFormats.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-md font-semibold text-primary-700 mb-2 text-center">Audio Only</h4>
                  <div className="space-y-2">
                    {videoDetails.audioFormats.map((format) => (
                      <div
                        key={format.itag}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between rounded-md border border-gray-200 p-3 gap-2"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {format.quality} ({format.mimeType.split(';')[0]})
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-300">Audio Only</p>
                        </div>
                        <button
                          onClick={() => handleDownload(format)}
                          className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        >
                          <ArrowDownTrayIcon className="mr-2 h-4 w-4" />
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Video Only */}
              {videoDetails.videoFormats.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-md font-semibold text-primary-700 mb-2 text-center">Video Only</h4>
                  <div className="space-y-2">
                    {videoDetails.videoFormats.map((format) => (
                      <div
                        key={format.itag}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between rounded-md border border-gray-200 p-3 gap-2"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {format.quality} ({format.mimeType.split(';')[0]})
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-300">Video Only</p>
                        </div>
                        <button
                          onClick={() => handleDownload(format)}
                          className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        >
                          <ArrowDownTrayIcon className="mr-2 h-4 w-4" />
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Video + Audio */}
              {videoDetails.videoAudioFormats.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-md font-semibold text-primary-700 mb-2 text-center">Video + Audio</h4>
                  <div className="space-y-2">
                    {videoDetails.videoAudioFormats.map((format) => (
                      <div
                        key={format.itag}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between rounded-md border border-gray-200 p-3 gap-2"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {format.quality} ({format.mimeType.split(';')[0]})
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-300">Video + Audio</p>
                        </div>
                        <button
                          onClick={() => handleDownload(format)}
                          className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        >
                          <ArrowDownTrayIcon className="mr-2 h-4 w-4" />
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
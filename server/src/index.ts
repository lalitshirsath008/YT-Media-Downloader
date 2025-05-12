import express from 'express';
import cors from 'cors';
const ytdl = require('ytdl-core');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// YouTube video info endpoint
app.get('/api/youtube', async (req, res) => {
  try {
    const { url } = req.query;
    
    if (!url || typeof url !== 'string') {
      return res.status(400).json({ error: 'YouTube URL is required' });
    }

    const info = await ytdl.getInfo(url);
    const audioFormats = ytdl.filterFormats(info.formats, 'audioonly').map((format: any) => ({
      itag: format.itag,
      quality: format.audioQuality || format.qualityLabel || 'audio',
      mimeType: format.mimeType,
      hasAudio: format.hasAudio,
      hasVideo: format.hasVideo,
      url: format.url
    }));
    const videoFormats = ytdl.filterFormats(info.formats, 'videoonly').map((format: any) => ({
      itag: format.itag,
      quality: format.qualityLabel || 'video',
      mimeType: format.mimeType,
      hasAudio: format.hasAudio,
      hasVideo: format.hasVideo,
      url: format.url
    }));
    const videoAudioFormats = ytdl.filterFormats(info.formats, 'audioandvideo').map((format: any) => ({
      itag: format.itag,
      quality: format.qualityLabel || 'video+audio',
      mimeType: format.mimeType,
      hasAudio: format.hasAudio,
      hasVideo: format.hasVideo,
      url: format.url
    }));
    const videoDetails = {
      title: info.videoDetails.title,
      thumbnail: info.videoDetails.thumbnails[0].url,
      audioFormats,
      videoFormats,
      videoAudioFormats
    };

    res.json(videoDetails);
  } catch (error) {
    console.error('YouTube API Error:', error);
    res.status(500).json({ error: 'Failed to fetch YouTube video info', details: error instanceof Error ? error.message : String(error) });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 
// Import required modules
const express = require("express");
const ytdl = require("ytdl-core");
const cors = require("cors");

// Create an Express application
const app = express();

// Enable CORS so your frontend can access this backend
app.use(cors());

// Route to handle YouTube video download requests
app.get("/download", async (req, res) => {
  const url = req.query.url; // Get the YouTube URL from the query string

  // Validate the YouTube URL
  if (!ytdl.validateURL(url)) {
    return res.status(400).send("Invalid YouTube URL");
  }

  // Set the response headers to prompt a file download
  res.header("Content-Disposition", 'attachment; filename="video.mp4"');

  // Stream the video to the response in MP4 format
  ytdl(url, { format: "mp4" }).pipe(res);
});

// Start the server on port 4000
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

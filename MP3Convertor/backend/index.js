const youtubedl = require('youtube-dl-exec');
const fs = require('fs');
const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.get('/download', async (req, res) => {
  console.log("Got Download Link");
  const url = req.query.url;

  try {
    const info = await youtubedl(url, {
      dumpSingleJson: true,
      noWarnings: true,
      noCallHome: true,
      preferFreeFormats: true,
    });
    console.log(info);

    const sanitize = (title) => title.replace(/[<>:"/\\|?*]/g, '_'); // Sanitize filename
    const outputPath = `${sanitize(info.fulltitle)}.mp3`;

    await youtubedl(url, {
      extractAudio: true,
      audioFormat: 'mp3',
      output: outputPath,
    });

    

    res.download(outputPath, (err) => {
      if (err) {
        console.error("Download error:", err);
      }
      // Delete file only if it exists
      fs.existsSync(outputPath) && fs.unlinkSync(outputPath);
    });

  } catch (err) {
    console.error("Download failed:", err);
    res.status(500).send("Download error");
  }
});


app.listen( 5000 , () => console.log("Server Stared at port 5000") )

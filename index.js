require("dotenv").config();

let express= require("express");
let mongoose= require("mongoose");
let MusicData= require("./music");
let TrendingMusic= require("./trendingMusic");
let artistMusic =require("./artist");
let MusicLove= require("./MusicLove");
let cors= require("cors");
let bodyParser= require("body-parser");
let app= express();
app.use(cors());
app.use(bodyParser.json());
let port= 8080;

app.listen(port,function(){
    console.log("server working on port ", port);
});


main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}



// let musicData=async()=>{
//     await MusicLove.deleteMany({});
//     let data = await fetch("https://v1.nocodeapi.com/chrpe678/spotify/MrgHBlrhJMSwfIXs/search?q=panjabiartist&type=track");
//     let jsonData= await data.json();
//     console.log(jsonData);
//     let tracks=[];
//     tracks= (jsonData.tracks.items);
    
    
    
//     tracks.map(async(el)=>{
//       const shazam_music= new MusicLove({
//         song_img:el.album.images[1].url,
//         song_name:el.name,
//         artist:el.album.artists[0].name,
//         release_date:el.album.release_date,
//         song_play:el.preview_url
//       });
//       shazam_music.save();
//     });  
//     console.log("data was initialized");
//   }
// musicData();
  // const music= async()=>{
  //   let data = await  MusicData.find({});
  //   console.log(data);
  // }
  // music();

app.get("/daku",async(req,res)=>{
    let music = await MusicData.find({});
    res.json(music);
});

app.get("/trendingMusic",async(req,res)=>{
  let music = await TrendingMusic.find({});
  res.json(music);
});

app.get("/aritstMusic",async(req,res)=>{
  let music = await artistMusic.find({});
  res.json(music);
});

app.get("/lovesong",async(req,res)=>{
  let music = await MusicLove.find({});
  res.json(music);
});

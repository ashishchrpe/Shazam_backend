let mongoose= require("mongoose");

let Schema= mongoose.Schema;

let trendingMusic= Schema ({
    artist: String,

    song_name:String,

    song_play:String,

    release_date: {
        type:Date,
    },

    song_img:{
        type:String,
    }

});
let TrendingMusic = mongoose.model("trendingMusic",trendingMusic);

module.exports= TrendingMusic;
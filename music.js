let mongoose= require("mongoose");

let Schema= mongoose.Schema;

let musicData= Schema ({
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
let MusicData = mongoose.model("MusicData",musicData);

module.exports= MusicData;
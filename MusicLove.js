let mongoose= require("mongoose");

let Schema= mongoose.Schema;

let musiclove= Schema ({
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
let MusicLove = mongoose.model("MusicLove",musiclove);

module.exports= MusicLove;
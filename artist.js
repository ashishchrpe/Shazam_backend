let mongoose= require("mongoose");

let Schema= mongoose.Schema;

let artistMusic= Schema ({
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
let ArtistMusic = mongoose.model("artistMusic",artistMusic);

module.exports= ArtistMusic;
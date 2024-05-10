import { Player } from "textalive-app-api";

//API初期化
const player = new Player({
    app: { token: "QwskYbYglQvovKNi" },
    mediaElement: document.querySelector("#media"),
    mediaBannerPosition: "bottom right",
});

const overlay = document.getElementById("overlay");
const background = document.querySelector(".background");
const text = document.getElementById("text");
const seekbar = document.getElementById("seekbar");
const paintedseekbar = document.getElementById("painted_seekbar");

player.addListener({
    
    //起動準備
    onAppReady() {
        console.log('onAppReadyまで読み込んだよ！');
        if (!player.managed) {
            console.log('if(player.managed)で読み込んだよ！');
            overlay.className = "disabled";
        }
        if (!player.songUrl) {
            player.createFromSongUrl("https://piapro.jp/t/--OD");
            console.log('曲を読み込んだよ');
        }
    }
});


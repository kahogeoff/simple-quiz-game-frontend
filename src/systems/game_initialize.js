import axios from "axios";
import BGM from "../assets/audio/the_adventurers_rag.mp3";


const GameInitialize = (entities, args) => {
    let mut_parameters = entities['game_parameters'];
    if(!mut_parameters.initialized){

        // Play BGM - Should make into it own system
        const bgmPlayer = new Audio(BGM);
        bgmPlayer.volume = 0.3;
        bgmPlayer.loop = true;
        bgmPlayer.addEventListener("canplaythrough", event => {
            setTimeout(() => {
                bgmPlayer.play();
            }, 3000);
        });

        axios.defaults = Object.assign(axios.defaults, {
            withCredentials: true,
            baseURL: 'http://localhost:3000',
          });

        // Get the token
        axios.get("http://localhost:3000/api/get_token")
            .then((res) => {
                if(res.data['state'] === "error"){
                    throw new Error(res.data['msg']);
                }
                mut_parameters.opentdb_token = res.data['token'];
                //console.debug(res.data);
            })
            .catch((err) => {
                console.error(`ERROR: ${err}`);
            });
    }
    return entities;
}

export { GameInitialize }
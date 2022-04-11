import axios from "axios";
import correctSFX from "../assets/audio/correct_sfx.ogg";
import wrongSFX from "../assets/audio/wrong_sfx.ogg";

//let start_cooldown = false;
let next_question_cooldown = 5000;
let sfx_play_delay = 100;

const correct_sfx = new Audio(correctSFX);
const wrong_sfx = new Audio(wrongSFX);

const ResetButtonState = (entities) => {
    entities['ui_btn_opt0'].isCorrectAnswer = false;
    entities['ui_btn_opt0'].isWrongAnswer = false;

    entities['ui_btn_opt1'].isCorrectAnswer = false;
    entities['ui_btn_opt1'].isWrongAnswer = false;

    entities['ui_btn_opt2'].isCorrectAnswer = false;
    entities['ui_btn_opt2'].isWrongAnswer = false;

    entities['ui_btn_opt3'].isCorrectAnswer = false;
    entities['ui_btn_opt3'].isWrongAnswer = false;

    entities['game_parameters']['question_answered'] = false;
}

const PlayResultSFX = (is_correct) => {
    setTimeout(() => {
        if(is_correct) {
            correct_sfx.play();
        }else{
            wrong_sfx.play();
        }
    }, sfx_play_delay);

}

const QuestionAnswering = (entities, { input }) => {
    const parameters = entities['game_parameters'];
    const mouseDown = input.find(x => x.name === "onMouseDown") || {};
    const current_question = parameters['current_question'];

    if(!current_question || parameters['question_answered']) {
        return entities;
    }
    
    //ui_btn_opt
    let user_answer = "";
    if(mouseDown.payload && mouseDown.payload.target.id.startsWith("ui_btn_opt")) {
        const ans_id = parseInt(mouseDown.payload.target.id.replace('ui_btn_opt', ''));
        user_answer = current_question.answer[ans_id];

        axios.post("http://localhost:3000/api/answer_question", {
            answer: user_answer
        })
        .then((res) => {
            //console.debug(user_answer);
            //console.debug(res.data);
            const is_correct = res.data['result'] === 'correct';
            //console.debug(is_correct);
            if(is_correct) {
                parameters['correct_count'] += 1;
                correct_sfx.play();
                // Play correct fx
            }else{
                parameters['wrong_count'] += 1;
                // Play wrong fx
            }
            PlayResultSFX(is_correct);

            const correct_idx = current_question['answer'].indexOf(res.data['correct_answer']);
            entities[`ui_btn_opt${correct_idx}`].isCorrectAnswer = true;

            current_question['answer'].filter(x => res.data['incorrect_answers'].includes(x)).forEach(ans => {
                const idx = current_question['answer'].indexOf(ans);
                entities[`ui_btn_opt${idx}`].isWrongAnswer = true;
            });
        })
        .catch((err) => {
            console.error(err);
        })
        .then(()=>{
            parameters['question_answered'] = true;
            setTimeout(() => {
                parameters['current_question'] = null;
                parameters['question_asked'] = false;
                ResetButtonState(entities);
            }, next_question_cooldown);
        });
    }

    return entities;
}

export { QuestionAnswering };
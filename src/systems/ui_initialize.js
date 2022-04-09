import { CounterText, QuizButton, QuestionText } from "../components/ui";
import GameVar from "../game_var";

const UIInitialize = (entities, args) => {
    if(!GameVar.initialized){
        const btn_color = [
            "blue",
            "red",
            'yellow',
            "green"
        ]
        GameVar.initialize_view_size = {
            w: window.innerWidth,
            h: window.innerHeight
        };

        let correct_counter = { 
            anchor: {
                r: 100,
                t: 50
            },
            text: `Correct: ${GameVar.correct_count}`,
            fontSize: 30,
            renderer: <CounterText /> 
        };

        let wrong_counter = { 
            anchor: {
                r: 100,
                t: 88
            },
            text: `Wrong: ${GameVar.wrong_count}`,
            fontSize: 30,
            renderer: <CounterText /> 
        };
        
        entities["ui_counter_correct"] = correct_counter;
        entities["ui_counter_wrong"] = wrong_counter;
        entities["ui_text_question"] = {
            renderer: <QuestionText />
        };

        for (let index = 0; index < 4; index++) {
            entities[`ui_btn_opt${index}`] = {
                id: `ui_btn_opt${index}`,
                size: {
                    w: 190 * 1.5,
                    h: 49 * 1.5
                },
                fontSize: 20,
                scale: 1,
                anchor: {
                    r: (index % 2 === 1? 120: null),
                    l: (index % 2 === 1? null: 120),
                    b: (index < 2? 200: 100)
                },
                text: `Option ${index+1}`,
                buttonColor: btn_color[index],
                renderer: <QuizButton /> 
            };
        }
        GameVar.initialized = true;
    }

    return entities;
};

export { UIInitialize };
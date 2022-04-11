import { CounterText, QuizButton, QuestionText } from "../components/ui";

const UIInitialize = (entities, args) => {
    const parameters = entities['game_parameters'];
    if(!parameters.initialized){
        const btn_color = [
            "blue",
            "red",
            'yellow',
            "green"
        ]
        parameters.initialize_view_size = {
            w: window.innerWidth,
            h: window.innerHeight
        };

        // Initialize the counters
        let correct_counter = { 
            anchor: {
                r: 100,
                t: 50
            },
            text: `Correct: ${parameters.correct_count}`,
            fontSize: 30,
            renderer: <CounterText /> 
        };
        let wrong_counter = { 
            anchor: {
                r: 100,
                t: 88
            },
            text: `Wrong: ${parameters.wrong_count}`,
            fontSize: 30,
            renderer: <CounterText /> 
        };
        
        entities["ui_counter_correct"] = correct_counter;
        entities["ui_counter_wrong"] = wrong_counter;

        // Initialize the question text
        entities["ui_text_question"] = {
            renderer: <QuestionText />
        };

        // Initialize the question button
        for (let index = 0; index < 4; index++) {
            entities[`ui_btn_opt${index}`] = {
                id: `ui_btn_opt${index}`,
                size: {
                    w: 190 * 1.8,
                    h: 49 * 1.8
                },
                fontSize: 20,
                scale: 1,
                anchor: {
                    r: (index % 2 === 1? window.innerWidth * 0.2: null),
                    l: (index % 2 === 1? null: window.innerWidth * 0.2),
                    b: (index < 2? 220: 100)
                },
                text: `Option ${index+1}`,
                buttonColor: btn_color[index],
                renderer: <QuizButton /> 
            };
        }
        parameters.initialized = true;
    }

    return entities;
};

export { UIInitialize };
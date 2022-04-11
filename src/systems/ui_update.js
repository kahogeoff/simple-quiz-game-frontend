// Util function

function htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

function keepUIInshape(entities) {
    const parameters = entities['game_parameters'];
    for (let index = 0; index < 4; index++) {
        entities[`ui_btn_opt${index}`].size = {
            w: 190 * 1.8,
            h: 49 * 1.8
        };
        entities[`ui_btn_opt${index}`].anchor = {
            r: (index % 2 === 1? window.innerWidth * 0.2: null),
            l: (index % 2 === 1? null: window.innerWidth * 0.2),
            b: (index < 2? 220: 100)
        };
    }
}

const UIUpdate = (entities, args) => {
    
    const parameters = entities['game_parameters'];

    let correct_count = entities['ui_counter_correct'];
    let wrong_count = entities['ui_counter_wrong'];
    let question_text = entities['ui_text_question'];

    const current_question = parameters['current_question'];
    keepUIInshape(entities);
    if(current_question){
        question_text.text = htmlDecode(current_question['question']);
        
        if(current_question['type'] === 'boolean'){
            entities[`ui_btn_opt0`].hidden = false;
            entities[`ui_btn_opt1`].hidden = false;
            entities[`ui_btn_opt2`].hidden = true;
            entities[`ui_btn_opt3`].hidden = true;
        }else{
            entities[`ui_btn_opt0`].hidden = false;
            entities[`ui_btn_opt1`].hidden = false;
            entities[`ui_btn_opt2`].hidden = false;
            entities[`ui_btn_opt3`].hidden = false;
        }

        current_question['answer'].forEach((option, idx) => {
            entities[`ui_btn_opt${idx}`].text = htmlDecode(option);
        });
    } else {
        question_text.text = "Loading...";
        entities[`ui_btn_opt0`].text = "Option 1";
        entities[`ui_btn_opt1`].text = "Option 2";
        entities[`ui_btn_opt2`].text = "Option 3";
        entities[`ui_btn_opt3`].text = "Option 4";

        entities[`ui_btn_opt0`].hidden = true;
        entities[`ui_btn_opt1`].hidden = true;
        entities[`ui_btn_opt2`].hidden = true;
        entities[`ui_btn_opt3`].hidden = true;
    }
    correct_count.text = `Correct: ${parameters['correct_count']}`;
    //wrong_count.text = `Wrong: ${parameters['wrong_count']}`;
    wrong_count.text = `Total: ${parameters['correct_count'] + parameters['wrong_count']}`;
    return entities;
}

export { UIUpdate }
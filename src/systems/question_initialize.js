import axios from "axios";

const QuestionInitialize = (entities, args) => {
    let mut_parameters = entities['game_parameters'];
    // if (mut_parameters['question_answered']){
    //     mut_parameters['current_question'] = null;
    // }
    if(!mut_parameters.opentdb_token) {
        return entities;
    }

    if(!mut_parameters['current_question'] && !mut_parameters['question_asked']){
        axios.get("http://localhost:3000/api/get_question")
            .then((res) => {
                // console.debug(res.data);
                mut_parameters['current_question'] = res.data;
                // mut_parameters['question_answered'] = false;
                //console.debug(mut_parameters['current_question']);
            })
            .catch((err) => {
                console.error(err);
            });
            mut_parameters['question_asked'] = true;
    }

    return entities;
}

export { QuestionInitialize };
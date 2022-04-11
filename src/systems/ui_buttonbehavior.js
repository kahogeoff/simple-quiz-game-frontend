import buttonSFX from "../assets/audio/click1.ogg";
import rolloverSFX from "../assets/audio/rollover2.ogg";

const rollOver_sfx = new Audio(rolloverSFX);
const button_sfx = new Audio(buttonSFX);

const UIButtonBehavior = (entities, { input }) => {
    const parameters = entities['game_parameters'];
    const mouseUp = input.find(x => x.name === "onMouseUp") || {};
    const mouseDown = input.find(x => x.name === "onMouseDown") || {};
    const mouseOver  = input.find(x => x.name === "onMouseOver") || {};
    const mouseExit = input.find(x => x.name === "onMouseOut") || {};

    if(mouseOver.payload && mouseOver.payload.target.id.startsWith("ui_btn_")) {
        if(!entities[mouseOver.payload.target.id]['isCorrectAnswer'] && !entities[mouseOver.payload.target.id]['isWrongAnswer']){
            entities[mouseOver.payload.target.id]['isHovering'] = true;
            rollOver_sfx.play();
        }
    }else if (mouseExit.payload && mouseExit.payload.target.id.startsWith("ui_btn_")) {
        entities[mouseExit.payload.target.id]['isHovering'] = false;
    }

    if(mouseDown.payload && mouseDown.payload.target.id.startsWith("ui_btn_")) {
        if(!entities[mouseDown.payload.target.id]['isCorrectAnswer'] && !entities[mouseDown.payload.target.id]['isWrongAnswer']){
            entities[mouseDown.payload.target.id]['isPressed'] = true;
            button_sfx.play();
        }
        if(entities[mouseDown.payload.target.id]['isCorrectAnswer'] || entities[mouseDown.payload.target.id]['isWrongAnswer']){
            entities[mouseDown.payload.target.id]['isHovering'] = false;
        }
    }else if (mouseUp.payload && mouseUp.payload.target.id.startsWith("ui_btn_")) {
        entities[mouseUp.payload.target.id]['isPressed'] = false;
        if(entities[mouseUp.payload.target.id]['isCorrectAnswer'] || entities[mouseUp.payload.target.id]['isWrongAnswer']){
            entities[mouseUp.payload.target.id]['isHovering'] = false;
        }
    }

    return entities;
}

export { UIButtonBehavior }
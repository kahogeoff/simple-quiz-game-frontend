const UIButtonBehavior = (entities, { input }) => {
    const mouseUp = input.find(x => x.name === "onMouseUp") || {};
    const mouseDown = input.find(x => x.name === "onMouseDown") || {};
    const mouseOver  = input.find(x => x.name === "onMouseOver") || {};
    const mouseExit = input.find(x => x.name === "onMouseOut") || {};

    if(mouseOver.payload && mouseOver.payload.target.id.startsWith("ui_btn_")) {
        entities[mouseOver.payload.target.id]['isHovering'] = true;
    }else if (mouseExit.payload && mouseExit.payload.target.id.startsWith("ui_btn_")) {
        entities[mouseExit.payload.target.id]['isHovering'] = false;
    }

    if(mouseDown.payload && mouseDown.payload.target.id.startsWith("ui_btn_")) {
        entities[mouseDown.payload.target.id]['isPressed'] = true;
    }else if (mouseUp.payload && mouseUp.payload.target.id.startsWith("ui_btn_")) {
        entities[mouseUp.payload.target.id]['isPressed'] = false;
    }
    return entities;
}

export { UIButtonBehavior }
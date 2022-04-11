import React, { PureComponent } from "react";

import ButtonB_Unpressed from "../../assets/textures/ui/blue_button00.png";
import ButtonB_Pressed from "../../assets/textures/ui/blue_button03.png";

import ButtonR_Unpressed from "../../assets/textures/ui/red_button11.png";
import ButtonR_Pressed from "../../assets/textures/ui/red_button01.png";

import ButtonG_Unpressed from "../../assets/textures/ui/green_button00.png";
import ButtonG_Pressed from "../../assets/textures/ui/green_button03.png";

import ButtonY_Unpressed from "../../assets/textures/ui/yellow_button00.png";
import ButtonY_Pressed from "../../assets/textures/ui/yellow_button03.png";

class QuizButton extends PureComponent {

  render() {
    const size = this.props.size || {
        w: 100, h: 100
    };
    const font_size = this.props.fontSize || 20;
    const scale = this.props.scale || 1.0;
    //const x = this.props.x - size.w / 2;
    //const y = this.props.y - size.h / 2;
    const anchor = this.props.anchor || {
        t: null, b: null, l: null, r: null
    };
    const hidden = this.props.hidden || false;
    const text = this.props.text || "Button";
    const btn_color = this.props.buttonColor || "blue";

    const btn_textures = {
        blue: [ButtonB_Unpressed, ButtonB_Pressed],
        red: [ButtonR_Unpressed, ButtonR_Pressed],
        green: [ButtonG_Unpressed, ButtonG_Pressed],
        yellow: [ButtonY_Unpressed, ButtonY_Pressed]
    };
    const pressed = this.props.isPressed || false;
    const hovering = this.props.isHovering || false;
    const id = this.props.id || "";

    const wrong = this.props.isWrongAnswer || false;
    const correct = this.props.isCorrectAnswer || false;

    let outline_fx = "";
    let outline_color = "";

    if(hovering) {
      outline_color = "#EEE";
      outline_fx = `0 0 4px 4px ${outline_color}`;
    }else if(wrong){
      outline_color = "#E11";
      outline_fx = `0 0 8px 4px ${outline_color}`;
    }else if(correct) {
      outline_color = "#1E1";
      outline_fx = `0 0 8px 8px ${outline_color}`;
    }

    return (
      <div
        id={id}
        style={{ 
          position: "absolute",
          width: size.w * scale,
          height: size.h * scale,
          top: anchor.t,  
          left: anchor.l, 
          bottom: anchor.b,  
          right: anchor.r,
          fontSize: font_size * scale,
          fontFamily: 'Kenney Future Narrow',
          backgroundImage: `url(${pressed? btn_textures[btn_color][1] : btn_textures[btn_color][0]})`,
          backgroundSize: `${size.w * scale}px ${size.h * scale}px`,
          color: "white",
          textShadow: "#000 0.1em 0.1em 0.2em",
          boxShadow: outline_fx,
          backgroundColor: outline_color,
          textAlign: "center",
          overflow: "clip",
          display: (hidden? 'none': 'block')
        }}
      >
        <span 
          id={id}
          style={{
            position: "relative",
            top: ((size.h /2) * scale) * (pressed? 0.6 : 0.5)
          }}
        >{text}</span>
      </div>
    );
  }
}

export { QuizButton };
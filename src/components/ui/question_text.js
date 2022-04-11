import React, { PureComponent } from "react";

class QuestionText extends PureComponent {
  render() {
    const font_size = this.props.fontSize || 30;
    const scale = this.props.scale || 1.0;
    const text = this.props.text || "Text";

    return (
      <div
        style={{ 
            position: "absolute", 
            top: window.innerHeight * 0.3, 
            left: window.innerWidth*0.1,
            right: window.innerWidth*0.1,
            fontSize: font_size * scale,
            fontFamily: 'Kenney Future Narrow',
            color: "white",
            textShadow: "#000 0.1em 0.1em 0.2em",
            textAlign: "center"
        }}
      >
        <span>{text}</span>
      </div>
    );
  }
}

export { QuestionText };
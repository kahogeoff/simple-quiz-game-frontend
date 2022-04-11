import React, { PureComponent } from "react";

class CounterText extends PureComponent {
  render() {
    const font_size = this.props.fontSize || 20;
    const scale = this.props.scale || 1.0;
    const text = this.props.text || "Text";
    const anchor = this.props.anchor || {
      t: null, b: null, l: null, r: null
    };

    return (
      <div 
      style={{ 
        position: "absolute", 
        top: anchor.t,  
        left: anchor.l, 
        bottom: anchor.b,  
        right: anchor.r, 
        fontSize: font_size * scale,
        fontFamily: 'Kenney Future Narrow',
        color: "white",
        textShadow: "#000 0.1em 0.1em 0.2em",
      }}>
        <span>{text}</span>
      </div>
    );
  }
}

export { CounterText };
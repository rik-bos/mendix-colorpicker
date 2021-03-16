import { Component, createElement } from "react";

import { ColorPickerComponent } from "./components/ColorPickerComponent";
import "./ui/CustomColorPicker.css";

/**
 * custom color picker
 * returns selected color
 */
export default class CustomColorPicker extends Component {
    /**
     * set new color value
     * @param color
     */
    onChangeColor = color => {
        this.props.data.setValue(color);
    };

    render() {
        return <ColorPickerComponent color={this.props.data} onChange={color => this.onChangeColor(color)} />;
    }
}

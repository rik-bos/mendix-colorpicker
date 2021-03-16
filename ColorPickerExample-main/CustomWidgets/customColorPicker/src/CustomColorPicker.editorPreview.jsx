import { Component, createElement } from "react";
import { ColorPickerComponent } from "./components/ColorPickerComponent";

export class preview extends Component {
    render() {
        return <ColorPickerComponent color={this.props.data} />;
    }
}

export function getPreviewCss() {
    return require("./ui/CustomColorPicker.css");
}

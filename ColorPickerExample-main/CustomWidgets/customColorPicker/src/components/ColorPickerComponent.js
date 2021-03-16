import { createElement } from "react";
import { SketchPicker } from "react-color";

const sketchPickerStyles = {
    default: {
        picker: {
            boxShadow: "none"
        }
    }
};

/**
 * component with color picker
 *
 * how to use:
 *
 *  <ColorPickerComponent
 *      color={this.props.data} // set init color
 *      onChange={color => this.onChange(color)} // get called when the color got changed
 *  />
 *
 */
export const ColorPickerComponent = props => {
    /**
     * handle when color got changed
     * @param color
     */
    const handleChangeComplete = color => {
        props.onChange(color.hex);
    };

    return (
        <SketchPicker
            styles={sketchPickerStyles}
            color={props.color.value}
            onChangeComplete={handleChangeComplete}
        />
    );
};

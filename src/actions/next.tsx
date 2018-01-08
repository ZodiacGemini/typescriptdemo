import * as constants from '../constants/next'

export interface ToggleColor {
    type: constants.TOGGLE_COLOR;
}

export type ToggleColorAction = ToggleColor;

export function toggleColor(): ToggleColor {
    return {
        type: constants.TOGGLE_COLOR
    }
}
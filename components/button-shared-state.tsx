import { useState } from "react";

interface ButtonSharedStateProps {
    count: number;
    onClick: () => void;
}

/**
 * Renders a button component with a click count and an onClick handler.
 *
 * @param {ButtonSharedStateProps} count - The count of button clicks.
 * @param {ButtonSharedStateProps} onClick - The function to handle button click.
 * @return {JSX.Element} The button component with the click count displayed.
 */

export const ButtonSharedState = ({count, onClick}: ButtonSharedStateProps) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className="bg-blue-500 hover:bg-blue-700 rounded text-white font-bold px-4 py-2"
        >
            I have been clicked {count} times
        </button>
    );
}
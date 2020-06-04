import React from 'react';
import './toggleButton.css';

interface ToggleButtonProps {
    on?: string;
    off?: string;
    onToggle: () => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({on = 'Markup', off="Text", onToggle}) => {

	return (
        <div className="toggle-btn">
            <span>{off}</span>
            <input type="checkbox" id="toggle_checkbox" onClick={onToggle}/>
            <label htmlFor="toggle_checkbox"></label>
            <span>{on}</span>
        </div>
	);
};

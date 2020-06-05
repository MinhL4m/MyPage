import React from 'react';
import './toggleButton.css';

interface ToggleButtonProps {
    value: boolean;
    on?: string;
    off?: string;
    onToggle: () => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ value, on = 'Markup', off="Text", onToggle}) => {
	return (
        <div className="toggle-btn">
            <span>{off}</span>
            <input checked={value} type="checkbox" id="toggle_checkbox" onClick={onToggle}/>
            <label className="toogle-label" htmlFor="toggle_checkbox"></label>
            <span>{on}</span>
        </div>
	);
};

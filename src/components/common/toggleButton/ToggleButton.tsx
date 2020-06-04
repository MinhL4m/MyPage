import React from 'react';
import './toggleButton.css';

interface ToggleButtonProps {
    on?: string;
    off?: string;
    onToggle: () => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({on = 'Markup', off="Text", onToggle}) => {

	React.useEffect(() => {

        const toggleBody = document.querySelector('.btn-body');
        const toggleBtn = document.querySelector('.btn-switch');

        function toggleButton(){
            toggleBody?.classList.toggle('btn-body--on');
            toggleBtn?.classList.toggle('btn-switch--on');
            onToggle()
        }

        toggleBody?.addEventListener('click', toggleButton);
        return () => {
            toggleBody?.removeEventListener('click', toggleButton)
        }

	},[]);

	return (
        <div className="toggle-btn">
            <span>{off}</span>
            <div className="btn-body">
                    <div className="btn-switch" />
            </div>
            <span>{on}</span>
        </div>
	);
};

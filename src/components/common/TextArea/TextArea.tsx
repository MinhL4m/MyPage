import React from 'react';
import './textArea.css';
import autosize from 'autosize'

interface TextAreaProps {
	value: string;
	onChangeHandler: (ev: any) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({ value, onChangeHandler }) => {
	React.useEffect(() => {
		const textArea = document.querySelector('.text-area')
		autosize(textArea)

		return () => {
			const evt = document.createEvent('Event');
			evt.initEvent('autosize:destroy', true, false);
			textArea?.dispatchEvent(evt)
		};
	}, []);

	return (
		<>

			<div>
				<textarea id="text-area" autoFocus={true} className="text-area" placeholder="Write blog body here" value={value} onChange={onChangeHandler} />
			</div>
		</>
	);
};

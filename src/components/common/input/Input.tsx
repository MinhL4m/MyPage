import React from 'react';
import './input.css';

interface InputProps {
	onChangeHandler: (ev: any) => void;
	id: string;
    type: string;
    label: string;
}

function onInputFocus(ev: any) {
	let targetParentClass = ev.target.parentNode.classList;
	targetParentClass.add('input--filled');
}

function onInputBlur(ev: any) {
	if (ev.target.value.trim() === '') {
		let targetParentClass = ev.target.parentNode.classList;
		targetParentClass.remove('input--filled');
	}
}


export const Input: React.FC<InputProps> = ({ onChangeHandler, id, type, label }) => {

    React.useEffect(() => {
		[].slice.call(document.querySelectorAll(`#${id}`)).forEach(function(inputEl: HTMLElement) {
			inputEl.addEventListener('focus', onInputFocus);
			inputEl.addEventListener('blur', onInputBlur);
		});

		return () => {
			[].slice.call(document.querySelectorAll(`#${id}`)).forEach(function(inputEl: HTMLElement) {
				inputEl.removeEventListener('focus', onInputFocus);
				inputEl.removeEventListener('blur', onInputBlur);
			});
		};
	}, []);

	return (
		<span className="input input--nao">
			<input className="input__field input__field--nao" type={type} id={id} onChange={onChangeHandler} />
			<label className="input__label input__label--nao" htmlFor={id}>
				<span className="input__label-content input__label-content--nao">{label}</span>
			</label>
			<svg
				className="graphic graphic--nao"
				width="300%"
				height="100%"
				viewBox="0 0 1200 60"
				preserveAspectRatio="none"
			>
				<path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0" />
			</svg>
		</span>
	);
};

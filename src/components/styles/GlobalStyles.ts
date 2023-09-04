import styled, { createGlobalStyle } from "styled-components";

export const MainSection = styled.div`
  display: flex;
`;
export const GlobalStyles = createGlobalStyle`



@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Josefin+Sans:ital,wght@0,400;0,500;1,300;1,700&family=Plus+Jakarta+Sans:wght@500;700&display=swap');


@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
  body{
    width: 100%;
    background: ${(props: any) => props.theme.colors.background.secondary};
    font-family: 'Plus Jakarta Sans', sans-serif;
    &::-webkit-scrollbar {
    display: none;
  }
  }
  .activeBoard{
    background-color: ${({ theme }) => theme.colors.buttons.primary} !important;
}
   .activeBoard  p{
    color: ${({ theme }) => theme.colors.buttons.secondary} !important;
   }
   .activeBoard svg > path {
    fill: white !important;
   }
   /////////
   :root {
	font-size: 62.5%;

	--color-switch: #ccc;
	--color-switch-checked: #635FC7;
	--color-switch-thumb: #ffffff;
	--color-switch-thumb-active: #ffffff;
	--color-switch-border: transparent;
	--color-background: #f0f0f5;

	--color-white: #ffffff;
	--color-shadow: rgba(0, 0, 0, 0.2);
}
.switch {
	--_switch-height: 2.5rem; // Dinâmico
	--_switch-border: 1px;
	--_switch-border-multitply: calc(var(--_switch-border) * 1);

	/*
	 Gap dinâmico baseado na altura fornecida para o componente.
	 Formula: altura do componente dividida pela quantidade de lados,
		temos 4 do elemento e mais 4 do thumb.
	*/
	//--_switch-gap: calc(var(--_switch-height) / 8);

	--_switch-gap: 0.3rem;
	--_swicth-gap-multitply: calc(var(--_switch-gap) * 2);

	// Soma dos espaçamentos (superior/inferior) mais espessura da borda
	--_switch-multiply: calc(
		var(--_swicth-gap-multitply) + var(--_switch-border-multitply)
	);

	// Tamanho círculo "thumb". A altura do elemento "switch" menos a soma das bordas (superior/inferior), menos a soma dos espaçamentos.
	--_switch-thumb-width: calc(var(--_switch-height) - var(--_switch-multiply));

	// Largura do componente "switch". Duas vezes a largura/dimensões do círculo "thumb"
	// mais as somas dos espaçamentos incluindo "borders" e "gaps".
	--_switch-width: calc(
		var(--_switch-thumb-width) * 2 + var(--_switch-multiply)
	);

	--_switch-radius: 0;
	--_swith-radius-thumb: 0;

	position: relative;
	overflow: hidden;

	width: var(--_switch-width);
	height: var(--_switch-height);

	border-radius: var(--_switch-radius);
	border: var(--_switch-border) solid var(--color-switch-border);

	box-shadow: 0 0 1rem -1px rgba(0, 0, 0, 0.2);
	background-color: var(--color-switch);

	transition: 0.6s ease-in;

	&.switch--rounded {
		--_switch-radius: calc(var(--_switch-height) / 2);
		--_switch-radius-thumb: calc(var(--_switch-thumb-width) / 2); // ou 50%
	}

	&.switch--square {
		--_switch-radius: 0.4rem;
		--_swith-radius-thumb: 0.4rem;
	}

	&:has(input[data-type="checkbox"]:checked) {
		background-color: var(--color-switch-checked);

		.switch__thumb {
			&::after {
				//transform: translateX(100%);
				transform: translateX(var(--_switch-thumb-width));
				background-color: var(--color-switch-thumb-active);
			}
		}
	}

	&:hover {
		opacity: 0.7;
	}

	&__input {
		pointer-events: none;
		user-select: none;

		-moz-appearance: none;
		-webkit-appearance: none;
		appearance: none;

		z-index: -1;

		position: fixed;
		top: 0;
		left: 0;

		color: transparent;
		background: transparent;

		width: 0;
		height: 0;

		overflow: hidden;

		opacity: 0;
		visibility: hidden;

		caret-color: transparent;
		accent-color: transparent;
	}

	&__thumb {
		position: absolute;
		top: 0;
		left: 0;

		right: 0;
		bottom: 0;

		background: transparent;
		cursor: pointer;

		&:after {
			pointer-events: none;
			user-select: none;

			position: absolute;
			top: var(--_switch-gap);
			left: var(--_switch-gap);

			content: "";

			width: var(--_switch-thumb-width);
			height: var(--_switch-thumb-width);

			border-radius: var(--_switch-radius-thumb);

			background-color: var(--color-switch-thumb);
			transition: 0.2s ease;
		}
	}
}

input {
	display: block;
	width: 200px;

	margin: 0 auto;

	font-size: 1.4rem;
	padding: 1.6rem;
	border: 1px solid #ddd;

	border-radius: 0.4rem;
}
`;

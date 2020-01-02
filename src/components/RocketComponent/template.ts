import * as styles from './styles.scss';

import { RocketComponentProps, RocketComponentState, RocketComponentMethods } from './defines';


export default (render: Function, data: RocketComponentProps & RocketComponentState & RocketComponentMethods , createStyle: Function) => {
    return render`
		${createStyle(styles)}
		<div class="rocket">
			<span class="rocket__text">Fly back<br>to the top</span>
			<a class="rocket__link" href="#">
				<svg class="rocket__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.404 23h-2.808l-.96-2h4.728l-.96 2zm-8.323-7.365c-1.218 1.202-2.081 3.377-2.081 5.696 0 .884.127 1.789.405 2.669.255-1.837 1.122-3.2 3.162-3.773-.634-1.402-1.154-2.949-1.486-4.592zm13.83-.01c-.371 1.772-.92 3.333-1.477 4.602 2.039.573 2.906 1.936 3.161 3.773.278-.88.405-1.785.405-2.67 0-2.324-.867-4.504-2.089-5.705zm-6.926-15.625c-7.076 6.157-5.909 14.779-3.324 20h6.685c2.59-5.483 3.765-13.883-3.361-20zm.015 14c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm0-4c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z"/></svg>
			</a>
		</div>
    `;
}

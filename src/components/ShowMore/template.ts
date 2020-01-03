import * as styles from "./styles.scss";

import { ShowMoreProps, ShowMoreState, ShowMoreMethods } from "./defines";

export default (
	render: Function,
	data: ShowMoreProps & ShowMoreState & ShowMoreMethods,
	createStyle: Function
) => {
	return render`
		${createStyle(styles)}
		<div class="showMore">
			<svg class="showMore__icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
			<span class="showMore__text">${data.text}</span>
		</div>
    `;
};

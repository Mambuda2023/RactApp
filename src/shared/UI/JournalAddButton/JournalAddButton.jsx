import { memo } from "react";
import CardButton from "../../../widgets/CardButton/CardButton";
import "./JournalAddButton.css";
const JournalAddButton = (children) => {
	return <CardButton className='journal-add'>
		<img src="src/public/add-button.svg" alt="" />
		Новое воспоминание
	</CardButton>;
};
export default memo(JournalAddButton)
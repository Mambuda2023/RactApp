import { useState } from "react";
import Button from "../../shared/UI/Button/Button";
import "./JournalForm.css";
const JournalForm = ({ onSubmit }) => {
  const addJournalItem = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    onSubmit(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" />
      <textarea name="text" id=""></textarea>
      <Button text="Сохранить" onClick={(event) => console.log("Нажали")} />
    </form>
  );
};
export default JournalForm;

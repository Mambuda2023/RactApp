import { memo, useState } from "react";
import "./Button.css";
const Button = (children) => {
  const [text, setText] = useState('Сохранить')
  const clicked = () => {
    setText('Закрыть')
  }
  return <button className="button accent" onClick={clicked}>{text}</button>;
};
export default memo(Button)
import { Button } from "../shared/UI/Button/Button";
import CardButton from "../widgets/CardButton/CardButton";
import JournalItem from "../widgets/JournalItem/JournalItem";
import "./App.css";

function App() {
  const data = [
    {
      title: "Подговка к обновлению курсов",
      text: "Горные походы открывают удивительные природные ландшафты",
      date: new Date(),
    },
  ];
  return (
    <>
      <Button />

      <CardButton>
        <JournalItem
          title={data[0].title}
          text={data[0].text}
          date={data[0].date}
        />
      </CardButton>
    </>
  );
}

export default App;

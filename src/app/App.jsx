import Button from "../shared/UI/Button/Button";
import CardButton from "../widgets/CardButton/CardButton";
import JournalItem from "../widgets/JournalList/JournalItem/JournalItem";
import JournalList from "../widgets/JournalList/JournalList";
import LeftPanel from "../widgets/Layout/LeftPanel/LeftPanel";
import Header from "../widgets/Header/Header";
import Body from "../widgets/Layout/Body/Body";
import JournalAddButton from "../shared/UI/JournalAddButton/JournalAddButton";
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
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          <CardButton>

            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>

        </JournalList >
      </LeftPanel >
      <Body>
        Body
      </Body>
    </div>
  );
}

export default App;

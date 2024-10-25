import CardButton from "../widgets/CardButton/CardButton";
import JournalItem from "../widgets/JournalList/JournalItem/JournalItem";
import JournalList from "../widgets/JournalList/JournalList";
import LeftPanel from "../widgets/Layout/LeftPanel/LeftPanel";
import Header from "../widgets/Header/Header";
import Body from "../widgets/Layout/Body/Body";
import JournalAddButton from "../shared/UI/JournalAddButton/JournalAddButton";
import { nanoid } from "nanoid";
import JournalForm from "../widgets/JournalForm/JournalForm";
import { useState } from "react";
import "./App.css";

const INITIAL_DATA = [
  {
    id: nanoid(),
    title: "Подговка к обновлению курсов",
    text: "Горные походы открывают удивительные природные ландшафты",
    date: new Date(),
  },
];

function App() {
  const [items, setItems] = useState(INITIAL_DATA);
  const addItem = (item) => {
    setItems((oldItems) => [
      ...items,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id: nanoid(),
      },
    ]);
  };

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };
  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {items.sort(sortItems).map((element) => (
            <CardButton key={element.id}>
              <JournalItem
                title={element.title}
                text={element.text}
                date={element.date}
              />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;

import "./JournalItem.css";
const JournalItem = ({ title, text, date }) => {
  const formatDate = new Intl.DateTimeFormat('ru-RU').format(date)
  return (
    <>
      <h2 className="journal-item__title">{title}</h2>
      <div className="journal-item__body">
        <footer>
          <data className="journal-item__date" dateTime="2005-10-05">
            {formatDate}
          </data>
        </footer>
        <p className="journal-item__text">{text}</p>
      </div>
    </>
  );
};
export default JournalItem

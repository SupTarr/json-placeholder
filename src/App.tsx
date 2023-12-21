import { useState } from "react";
import Users from "./Users";

enum Tabs {
  Users,
  Posts,
  Comments,
}

const renderSwitch = (tab: Tabs): JSX.Element => {
  switch (tab) {
    case Tabs.Users:
      return <Users />;
    default:
      return <></>;
  }
};

const App = () => {
  const [tab, setTab] = useState(Tabs.Users);

  return (
    <main>
      <div role="tablist" className="tabs-boxed tabs">
        <a
          role="tab"
          className={`tab ${tab === Tabs.Users ? "tab-active" : ""}`}
          onClick={(_) => setTab(Tabs.Users)}
        >
          {Tabs[Tabs.Users]}
        </a>
        <a
          role="tab"
          className={`tab ${tab === Tabs.Posts ? "tab-active" : ""}`}
          onClick={(_) => setTab(Tabs.Posts)}
        >
          {Tabs[Tabs.Posts]}
        </a>
        <a
          role="tab"
          className={`tab ${tab === Tabs.Comments ? "tab-active" : ""}`}
          onClick={(_) => setTab(Tabs.Comments)}
        >
          {Tabs[Tabs.Comments]}
        </a>
      </div>
      {renderSwitch(tab)}
    </main>
  );
};

export default App;

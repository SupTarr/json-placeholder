import { useState } from "react";
import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";

enum Tabs {
  Users,
  Posts,
  Comments,
}

const renderSwitch = (tab: Tabs): JSX.Element => {
  switch (tab) {
    case Tabs.Users:
      return <Users />;
    case Tabs.Posts:
      return <Posts />;
    case Tabs.Comments:
      return <Comments />;
    default:
      return <></>;
  }
};

const App = () => {
  const [tab, setTab] = useState(Tabs.Users);

  return (
    <main className="app m-2">
      <div role="tablist" className="tabs-boxed tabs mb-3">
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

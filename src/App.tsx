import { useState } from "react";

enum Tabs {
  Users,
  Posts,
  Comments,
}

const App = () => {
  const [tab, setTab] = useState(Tabs.Users);

  return (
    <>
      <div role="tablist" className="tabs-boxed tabs">
        <a
          role="tab"
          className={`tab ${tab === Tabs.Users ? "tab-active" : ""}`}
          onClick={_ => setTab(Tabs.Users)}
        >
          {Tabs[Tabs.Users]}
        </a>
        <a
          role="tab"
          className={`tab ${tab === Tabs.Posts ? "tab-active" : ""}`}
          onClick={_ => setTab(Tabs.Posts)}
        >
          {Tabs[Tabs.Posts]}
        </a>
        <a
          role="tab"
          className={`tab ${tab === Tabs.Comments ? "tab-active" : ""}`}
          onClick={_ => setTab(Tabs.Comments)}
        >
          {Tabs[Tabs.Comments]}
        </a>
      </div>
    </>
  );
};

export default App;

import React, { Component } from "react";
//import Chapter from "./Chapter/Chapter";
import Surah from "./Surah/Surah";
import Verse from "./Verse/Verse";
import Reciter from "./Reciter/Reciter";
import TextEditions from "./Editions/Text/TextEditions";
import Translations from "./Editions/Translations/Translations";
// import { Tabs, TabPanel, TabList, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./LeftPanel.css";
import Search from "./Search/Search";
import { connect } from "react-redux";

class LeftPanel extends Component {
  render() {
    return (
      <div className={`LeftPanel ${this.props.settings.settings ? 'showPanel' : ""}`}>
        <h4 className="mt-2">Quran e Kareem</h4>
        <Search />
        <TextEditions />
        {/* <Tabs className="tabPanel"> */}
          {/* <TabList>
            <Tab> By Surah</Tab>
            <Tab> By Para</Tab>
          </TabList> */}
          {/* <TabPanel> */}
            <Surah />
            <Translations />
            <Verse />
          {/* </TabPanel> */}
          {/* <TabPanel>
            <Chapter />
            <Verse />
          </TabPanel> */}
        {/* </Tabs> */}
        <Reciter />
      </div>
    );
  }
}

const mapStatesToProps = state => {
  return {
    settings: state.settings,
  };
};

export default connect(mapStatesToProps)(LeftPanel);

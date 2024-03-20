import React, { Component } from "react";
import { connect } from "react-redux";
import ReactLoading from "react-loading";
import { fetchSurah } from "../../../scripts/surah";

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fetchSurah = nextProps => {
    fetchSurah(this.props, nextProps)
      .then(surah => {
        this.setState({
          surah: surah
        });
      })
      .catch(error => {
        console.log("error in topjs call", error);
      });
  };

  componentDidMount() {
    this.fetchSurah();
  }

  componentDidUpdate(nextProps) {
    if (this.props.surah.surah !== nextProps.surah.surah) {
      this.setState({
        surah: null
      });
      this.fetchSurah(this.props);
    }
  }
  styles = {
    surahName: {
      direction: "rtl",
      fontFamily: "Lateef",
      fontSize: 40,
      color: "#3594a3"
    },
    bismillah: {
      direction: "rtl",
      fontFamily: "Lateef",
      fontSize: 40,
      color: "#3594a3"
    },
    ayaat : {
      fontFamily: "Lateef",
      fontSize: 24,
      color: "#3594a3"
    }
  };

  render() {
    if (!this.state.surah) return <ReactLoading color="#3594a3" type="cylon" />;
    //console.log(this.state.surah.name);
    return (
      <div className="row mt-2">
        <div className="col-md-4">
          <h4 className="text-left" style={this.styles.surahName}>
            {this.state.surah.englishName}{" - "}<span style={this.styles.ayaat}>{this.state.surah.revelationType}{" - "}
            {this.state.surah.numberOfAyahs}</span>
          </h4>
          
        </div>
        <div className="col-md-4">
          <h3 className="text-center" style={this.styles.bismillah}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </h3>
        </div>
        <div className="col-md-4">
          <h4 className="text-right" style={this.styles.surahName}>
            {this.state.surah.name}
          </h4>
        </div>
      </div>
    );
  }
}

const mapStatesToProps = state => {
  return {
    surah: state.surah,
    edition: state.edition,
    chapter: state.chapter,
    translation: state.translation,
    verseRange: state.verseRange
  };
};

export default connect(mapStatesToProps)(Top);

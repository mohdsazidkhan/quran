export const adjustScrollbar = (scrollBar, props, nextProps) => {
  if (Number(nextProps.highlight.highlight.toString().split(".")[0]) < Number(props.highlight.highlight.toString().split(".")[0])) {
    //console.log(Number(nextProps.highlight.highlight.toString().split(".")[0]), ' nextProps.highlight.highlight')
    //console.log(Number(props.highlight.highlight.toString().split(".")[0]), ' props.highlight.highlight')
    let scrollValue = scrollBar.getScrollValues().scrollTop - 100;
    //console.log(scrollValue, ' scrollValue')
    const ayahDiv = document.getElementById("ayah_".concat(props.highlight.highlight.toString().split(".")[0]));
    const transDiv = document.getElementById("trans_ayah_".concat(props.highlight.highlight.toString().split(".")[0]));

    const ayahDivHeight = ayahDiv !== null ? ayahDiv.offsetHeight : 0;
    const transDivHeight = transDiv !== null ? transDiv.offsetHeight : 0;
    //console.log(ayahDivHeight, ' ayahDivHeight')
    scrollValue += ayahDivHeight + transDivHeight;

    scrollBar.scrollTo(scrollValue);
  }
  if (Number(nextProps.highlight.highlight.toString().split(".")[0]) > Number(props.highlight.highlight.toString().split(".")[0])) {
    scrollBar.scrollTo(0);
  }
};

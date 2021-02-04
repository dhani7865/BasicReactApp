class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: "home" //home by default
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      target: e.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("nav", null, /*#__PURE__*/
      React.createElement("ul", null, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/
      React.createElement("button", { onClick: this.handleClick, value: "home" }, "home")), /*#__PURE__*/



      React.createElement("li", null, /*#__PURE__*/
      React.createElement("button", { onClick: this.handleClick, value: "about" }, "about")), /*#__PURE__*/



      React.createElement("li", null, /*#__PURE__*/
      React.createElement("button", { onClick: this.handleClick, value: "contact" }, "contact")))), /*#__PURE__*/





      React.createElement("main", null,
      this.state.target === "home" && /*#__PURE__*/React.createElement(Home, null),
      this.state.target === "about" && /*#__PURE__*/React.createElement(About, null),
      this.state.target === "contact" && /*#__PURE__*/React.createElement(Contact, null))));



  }}


class Home extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { style: { color: "Blue" } }, "HOME"), /*#__PURE__*/

      React.createElement("p", null, "Welcome to this app! As a customer (referrer), this app would let you view a page that displays a URL (Share URL), which you can share to  friends. When the friends use the checkout, it allows you to get a reward and be able to know you have a reward. Customers can refer their friends, get rewards, and be incentivised to refer more friends.")));






  }}

class About extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { style: { color: "red" } }, "ABOUT"), /*#__PURE__*/

      React.createElement("p", null, "this app is about;")));




  }}


class Contact extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { style: { color: "black" } }, "EXPECTATIONS"), /*#__PURE__*/
      React.createElement("p", null, "This page will allow you to share a link, show the freinds page, acitivty feed, and share box.")));





  }}


React.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));
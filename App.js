const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", 
  { id: "child" }),
  [React.createElement("h1", {}, "This is h1 tag"),React.createElement("h2", {}, "This is h2 tag")]);
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "hello" },
  "Hello React"
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);

import React from "react";
import ReactDOM from "react-dom/client";

const Parent = () => React.createElement("div", { id: "parent" }, "This is a  React Project");
const JsxComp = () => <h1 className="head">This is JSX</h1>;

const HeadingComponent = () => {
  return (
    <div>
      <Parent/>
      <JsxComp/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
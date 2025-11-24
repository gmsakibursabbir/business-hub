import Person from "./scripts/Person";
import React from "react";
import ReactDOM from "react-dom/client";
import Lenis from "lenis";

const lenis = new Lenis({
  autoRaf: true,
});

// Optional: Log to verify it's running
console.log("Lenis initialized");

const person1 = new Person("Brad");
if (document.querySelector("#render-react-example-here")) {
  const root = ReactDOM.createRoot(
    document.querySelector("#render-react-example-here")
  );
  root.render(<ExampleReactComponent />);
}

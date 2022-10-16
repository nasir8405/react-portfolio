import React, { useRef, useEffect } from "react";
import ScrollHighlightNabbar from "./ScrollHighlightNabbar/ScrollHighlightNabbar";
import "./styles.css";

export default function App() {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();

  const navHeader = [
    {
      headerTitle: "Section 1",
      headerRef: section1Ref,
      headerID: "section1"
    },
    {
      headerTitle: "Section 2",
      headerRef: section2Ref,
      headerID: "section2"
    },
    {
      headerTitle: "Section 3",
      headerRef: section3Ref,
      headerID: "section3"
    },
    {
      headerTitle: "Section 4",
      headerRef: section4Ref,
      headerID: "section4"
    }
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ScrollHighlightNabbar section3Ref={section3Ref} navHeader={navHeader} />
      <div className="section" ref={section1Ref} id="section1">
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. 
      </div>
      <div className="section" ref={section2Ref} id="section2">
      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. 
      </div>
      <div className="section" ref={section3Ref} id="section3">
      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. 
      </div>
      <div className="section" ref={section4Ref} id="section4">
      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. 
      </div>
    </div>
  );
}

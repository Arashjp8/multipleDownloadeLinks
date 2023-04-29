import { useState, createRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import anchorFinder from "./utils/useElementFinder";

// ? map trough them when the button clicked

function App() {
  const [href, setHref] = useState("");

  let allAnchorTags = [];
  useEffect(() => {
    allAnchorTags = Array.from(document.querySelectorAll("a"));
    console.log(allAnchorTags, typeof allAnchorTags);
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    // await new Promise((resolve) => {
    //   for (let i = 0; i < allAnchorTags.length; i++) {
    //     allAnchorTags[i].addEventListener("click", resolve);
    //     allAnchorTags[i].click();
    //   }
    // });

    // for (const anchorTag of allAnchorTags) {
    //   const newTab = window.open(anchorTag.href, "_blank");
    //   await new Promise((resolve) => {
    //     newTab.addEventListener("load", resolve);
    //   });
    // }

    for (let i = 0; i < allAnchorTags.length; i++) {
      setHref(allAnchorTags[i].href);
      const clickedOne = document.getElementById("click");
      clickedOne.click();
      console.log(allAnchorTags[i].href, clickedOne);
    }
  };

  const anchorTag = createRef();

  return (
    <>
      {/* <a href="https://vitejs.dev" target="_blank" className="text-danger">
        vite
      </a>
      <br />
      <a
        className="text-danger"
        href="https://iamnotindangeriamthedanger.website?select=aHR0cHM6Ly9zdWJ0aXRsZS5ta3NlcnZlcnMuaXIvQWxtYXNFZGl0aW9uL1Nlcmllcy9UL1RlZCUyMExhc3NvL0ZhcnNpL0ZhcnNpLlMwMS5UZWQuTGFzc28vV0VCLURMJTIwJTI2JTIwV0VCUmlwL1RlZCUyMExhc3NvJTIwLSUyMFdFQiUyMC0lMjBTMDFFMDIuc3J0KlRlZC5MYXNzby5TMDFFMDIuMTA4MHAuV0VCLkRMLjZDSC5QYUhlKnNydA=="
        ref={anchorTag}
        title=""
      >
        دانلود زیرنویس قسمت 2
      </a>
      <br />
      <a href="https://react.dev" target="_blank" className="text-danger">
        react
      </a> */}

      <div className="text-center my-1">
        <a
          className="display-inline-block px-3 py-1 br-5px bg1"
          href="https://iamnotindangeriamthedanger.website?select=aHR0cHM6Ly9zdWJ0aXRsZS5ta3NlcnZlcnMuaXIvQWxtYXNFZGl0aW9uL1Nlcmllcy9UL1RlZCUyMExhc3NvL0ZhcnNpL0ZhcnNpLlMwMS5UZWQuTGFzc28vV0VCLURMJTIwJTI2JTIwV0VCUmlwL1RlZCUyMExhc3NvJTIwLSUyMFdFQiUyMC0lMjBTMDFFMDEuc3J0KlRlZC5MYXNzby5TMDFFMDEuMTA4MHAuV0VCLkRMLjZDSC5QYUhlKnNydA=="
          title=""
        >
          دانلود زیرنویس قسمت 1
        </a>
      </div>
      <div className="text-center my-1">
        <a
          className="display-inline-block px-3 py-1 br-5px bg1"
          href="https://iamnotindangeriamthedanger.website?select=aHR0cHM6Ly9zdWJ0aXRsZS5ta3NlcnZlcnMuaXIvQWxtYXNFZGl0aW9uL1Nlcmllcy9UL1RlZCUyMExhc3NvL0ZhcnNpL0ZhcnNpLlMwMS5UZWQuTGFzc28vV0VCLURMJTIwJTI2JTIwV0VCUmlwL1RlZCUyMExhc3NvJTIwLSUyMFdFQiUyMC0lMjBTMDFFMDIuc3J0KlRlZC5MYXNzby5TMDFFMDIuMTA4MHAuV0VCLkRMLjZDSC5QYUhlKnNydA=="
          title=""
        >
          دانلود زیرنویس قسمت 2
        </a>
      </div>
      <div className="text-center my-1">
        <a
          className="display-inline-block px-3 py-1 br-5px bg1"
          href="https://iamnotindangeriamthedanger.website?select=aHR0cHM6Ly9zdWJ0aXRsZS5ta3NlcnZlcnMuaXIvQWxtYXNFZGl0aW9uL1Nlcmllcy9UL1RlZCUyMExhc3NvL0ZhcnNpL0ZhcnNpLlMwMS5UZWQuTGFzc28vV0VCLURMJTIwJTI2JTIwV0VCUmlwL1RlZCUyMExhc3NvJTIwLSUyMFdFQiUyMC0lMjBTMDFFMDMuc3J0KlRlZC5MYXNzby5TMDFFMDMuMTA4MHAuV0VCLkRMLjZDSC5QYUhlKnNydA=="
          title=""
        >
          دانلود زیرنویس قسمت 3
        </a>
      </div>
      <div className="text-center my-1">
        <a
          className="display-inline-block px-3 py-1 br-5px bg1"
          href="https://iamnotindangeriamthedanger.website?select=aHR0cHM6Ly9zdWJ0aXRsZS5ta3NlcnZlcnMuaXIvQWxtYXNFZGl0aW9uL1Nlcmllcy9UL1RlZCUyMExhc3NvL0ZhcnNpL0ZhcnNpLlMwMS5UZWQuTGFzc28vV0VCLURMJTIwJTI2JTIwV0VCUmlwL1RlZCUyMExhc3NvJTIwLSUyMFdFQiUyMC0lMjBTMDFFMDQuc3J0KlRlZC5MYXNzby5TMDFFMDQuMTA4MHAuV0VCLkRMLjZDSC5QYUhlKnNydA=="
          title=""
        >
          دانلود زیرنویس قسمت 4
        </a>
      </div>
      <div className="text-center my-1">
        <a
          className="display-inline-block px-3 py-1 br-5px bg1"
          href="https://iamnotindangeriamthedanger.website?select=aHR0cHM6Ly9zdWJ0aXRsZS5ta3NlcnZlcnMuaXIvQWxtYXNFZGl0aW9uL1Nlcmllcy9UL1RlZCUyMExhc3NvL0ZhcnNpL0ZhcnNpLlMwMS5UZWQuTGFzc28vV0VCLURMJTIwJTI2JTIwV0VCUmlwL1RlZCUyMExhc3NvJTIwLSUyMFdFQiUyMC0lMjBTMDFFMDUuc3J0KlRlZC5MYXNzby5TMDFFMDUuMTA4MHAuV0VCLkRMLjZDSC5QYUhlKnNydA=="
          title=""
        >
          دانلود زیرنویس قسمت 5
        </a>
      </div>
      <div className="text-center my-1">
        <a
          className="display-inline-block px-3 py-1 br-5px bg1"
          href="https://iamnotindangeriamthedanger.website?select=aHR0cHM6Ly9zdWJ0aXRsZS5ta3NlcnZlcnMuaXIvQWxtYXNFZGl0aW9uL1Nlcmllcy9UL1RlZCUyMExhc3NvL0ZhcnNpL0ZhcnNpLlMwMS5UZWQuTGFzc28vV0VCLURMJTIwJTI2JTIwV0VCUmlwL1RlZCUyMExhc3NvJTIwLSUyMFdFQiUyMC0lMjBTMDFFMDYuc3J0KlRlZC5MYXNzby5TMDFFMDYuMTA4MHAuV0VCLkRMLjZDSC5QYUhlKnNydA=="
          title=""
        >
          دانلود زیرنویس قسمت 6
        </a>
      </div>
      <div className="text-center my-1">
        <a
          className="display-inline-block px-3 py-1 br-5px bg1"
          href="https://iamnotindangeriamthedanger.website?select=aHR0cHM6Ly9zdWJ0aXRsZS5ta3NlcnZlcnMuaXIvQWxtYXNFZGl0aW9uL1Nlcmllcy9UL1RlZCUyMExhc3NvL0ZhcnNpL0ZhcnNpLlMwMS5UZWQuTGFzc28vV0VCLURMJTIwJTI2JTIwV0VCUmlwL1RlZCUyMExhc3NvJTIwLSUyMFdFQiUyMC0lMjBTMDFFMDcuc3J0KlRlZC5MYXNzby5TMDFFMDcuMTA4MHAuV0VCLkRMLjZDSC5QYUhlKnNydA=="
          title=""
        >
          دانلود زیرنویس قسمت 7
        </a>
      </div>
      <div className="text-center my-1">
        <a
          className="display-inline-block px-3 py-1 br-5px bg1"
          href="https://iamnotindangeriamthedanger.website?select=aHR0cHM6Ly9zdWJ0aXRsZS5ta3NlcnZlcnMuaXIvQWxtYXNFZGl0aW9uL1Nlcmllcy9UL1RlZCUyMExhc3NvL0ZhcnNpL0ZhcnNpLlMwMS5UZWQuTGFzc28vV0VCLURMJTIwJTI2JTIwV0VCUmlwL1RlZCUyMExhc3NvJTIwLSUyMFdFQiUyMC0lMjBTMDFFMDguc3J0KlRlZC5MYXNzby5TMDFFMDguMTA4MHAuV0VCLkRMLjZDSC5QYUhlKnNydA=="
          title=""
        >
          دانلود زیرنویس قسمت 8
        </a>
      </div>
      <div className="text-center my-1">
        <a
          className="display-inline-block px-3 py-1 br-5px bg1"
          href="https://iamnotindangeriamthedanger.website?select=aHR0cHM6Ly9zdWJ0aXRsZS5ta3NlcnZlcnMuaXIvQWxtYXNFZGl0aW9uL1Nlcmllcy9UL1RlZCUyMExhc3NvL0ZhcnNpL0ZhcnNpLlMwMS5UZWQuTGFzc28vV0VCLURMJTIwJTI2JTIwV0VCUmlwL1RlZCUyMExhc3NvJTIwLSUyMFdFQiUyMC0lMjBTMDFFMDkuc3J0KlRlZC5MYXNzby5TMDFFMDkuMTA4MHAuV0VCLkRMLjZDSC5QYUhlKnNydA=="
          title=""
        >
          دانلود زیرنویس قسمت 9
        </a>
      </div>
      <div className="text-center my-1">
        <a
          className="display-inline-block px-3 py-1 br-5px bg1"
          href="https://iamnotindangeriamthedanger.website?select=aHR0cHM6Ly9zdWJ0aXRsZS5ta3NlcnZlcnMuaXIvQWxtYXNFZGl0aW9uL1Nlcmllcy9UL1RlZCUyMExhc3NvL0ZhcnNpL0ZhcnNpLlMwMS5UZWQuTGFzc28vV0VCLURMJTIwJTI2JTIwV0VCUmlwL1RlZCUyMExhc3NvJTIwLSUyMFdFQiUyMC0lMjBTMDFFMTAuc3J0KlRlZC5MYXNzby5TMDFFMTAuMTA4MHAuV0VCLkRMLjZDSC5QYUhlKnNydA=="
          title=""
        >
          دانلود زیرنویس قسمت 10
        </a>
      </div>

      <div>
        <a href={href} id="click" className="text-danger">
          the one that will change
        </a>
      </div>

      <br />
      <button onClick={handleClick} className="btn btn-primary">
        download All
      </button>
    </>
  );
}

export default App;

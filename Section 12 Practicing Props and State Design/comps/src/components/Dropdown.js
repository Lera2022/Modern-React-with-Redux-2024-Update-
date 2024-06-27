import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

// function Dropdown({ options, selection, onSelect }) {
function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      // console.log(event.target);
      // console.log(divEl);
      // console.log(divEl.current);

      // if (!divEl.current) {
      //   return;
      // }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    // setIsOpen(true);
    setIsOpen(!isOpen);

    // setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  window.timeTwo = performance.now();
  const handleOptionClick = (option) => {
    window.timeOne = performance.now();

    // const dropdown = document.querySelector(".w-48");      // to browser

    // const handleClick = (event) => {                       // to browser
    //   window.timeThree = performance.now();                // to browser
    //   if (dropdown.contains(event.target)) {               // to browser
    //     console.log("Inside dropdown");                    // to browser
    //   } else {                                             // to browser
    //     console.log("OUTSIDE dropdown");                   // to browser
    //   }                                                    // to browser
    // };                                                     // to browser

    // document.addEventListener("click", handleClick, true); // to browser
    // window.timeOne                                         // to browser
    // timeTwo                                                // to browser
    // timeThree                                              // to browser
    // timeTwo - timeOne
    // timeThree - timeOne

    setIsOpen(false);

    // console.log("I should close");

    // CLOSE DROPDOWN
    // WHAT OPTION DID THE USER CLICK ON???
    // console.log(option);
    // onSelect(option);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  // let content = "Select...";
  // if (selection) {
  //   content = selection.label;
  // }

  //   return <div>Dropdown...</div>;
  return (
    <div ref={divEl} className="w-48 relative">
      {/* <div onClick={handleClick}>Select...</div> */}
      {/* <div onClick={handleClick}>{content}</div> */}
      {/* <div onClick={handleClick}>{selection?.label || "Select..."}</div> */}
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;

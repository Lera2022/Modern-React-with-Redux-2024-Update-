import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";


function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        console.log('STALE version of expandedIndex', expandedIndex);   // $0.click(); $0.click();

        setExpandedIndex((currentExpandedIndex) => {
            console.log('UP TO DATE version', currentExpandedIndex);
            if (currentExpandedIndex === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        });

        // console.log(expandedIndex);
    //     if (expandedIndex === nextIndex) {
    //         setExpandedIndex(-1);
    //     } else {
    //         setExpandedIndex(nextIndex);
    //     }
    };
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        // console.log(isExpanded);
        // const content = isExpanded && <div>{item.content}</div>
        // if (index === expandedIndex) {
        //     console.log('expanded');
        // } else {
        //     console.log('collapsed');
        // }

        const icon = <span className='text-2xl'>
            {/* {isExpanded ? 'DOWN' : 'LEFT'} */}
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>

        return (
            <div key={item.id}>
                {/* <div onClick={handleClick}>{item.label}</div> */}
                <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>

                {/* <div onClick={() => setExpandedIndex(index)}>{item.label}</div> */}
                {/* <div onClick={() => {
                    console.log(index);
                    setExpandedIndex(index)
                    }}
                    >
                    {item.label}
                </div> */}
                {/* <div>{item.content}</div> */}
                {/* {content} */}
                {isExpanded && <div className='border-b p-5 '>{item.content}</div>}
            </div>
        );
    });

    return <div className='border-x border-t rounded'>{renderedItems}</div>;
}

export default Accordion;

    // function myFunction(items, /* ?? */) {
    // function myFunction(items, expandedIndex) {
    //     return items.map((item, index) => {
    //         if (index === expandedIndex) {
    //             return 'Expanded!'
    //         } else {
    //             return 'collapsed'
    //         }
    //     })
    // }

    // myFunction(propsItems, /* ?? */);   // ['Expanded!', 'collapsed', 'collapsed'];
    // myFunction(propsItems, 0);   // ['Expanded!', 'collapsed', 'collapsed'];

    // myFunction(propsItems, /* ?? */);   // ['collapsed', 'collapsed', 'Expanded!'];
    // myFunction(propsItems, 2);   // ['collapsed', 'collapsed', 'Expanded!'];
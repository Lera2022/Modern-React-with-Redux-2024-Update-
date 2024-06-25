import { useState } from 'react';

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        // console.log(isExpanded);

        // const content = isExpanded && <div>{item.content}</div>

        // if (index === expandedIndex) {
        //     console.log('expanded');
        // } else {
        //     console.log('collapsed');
        // }

        return (
            <div key={item.id}>
                <div onClick={() => setExpandedIndex(index)}>{item.label}</div>
                {/* <div>{item.content}</div> */}
                {/* {content} */}
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });

    return <div>{renderedItems}</div>;
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
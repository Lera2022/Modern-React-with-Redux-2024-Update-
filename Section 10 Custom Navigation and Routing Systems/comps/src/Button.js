import PropTypes from 'prop-types';

// function Button({ text }) {
    function Button({ 
        children,
        primary,
        secondary,
        success,
        warning,
        danger,
        outline,
        rounded
     }) {

        let baseClassName = 'px-3 py-1.5 border';

        if (primary) {
            baseClassName += 'border-green-600 bg-green-500 text-white';
        } else if (secondary) {
            baseClassName += 'border-green-600 bg-green-500 text-white';
        }

    // return <button>Hi there!</button>;
    // return <button>{text}</button>;

        // if(primary && secondary) {
        //     throw new Error('only one of primary and secondary should be provided')
        // }

    // return <button className='bg-red-500'>{children}</button>;
    // return <button className='bg-blue-500'>{children}</button>;
    // return <button className='bg-blue-100'>{children}</button>;
    // return <button className='bg-blue-900'>{children}</button>;
    // return <button className='text-red-500'>{children}</button>;
    // return <button className='text-blue-500'>{children}</button>;
    // return <button className='px-3 py-1.5 border border-blue-600 bg-blue-500 text-white' >{children}</button>;
    // return <button className='px-3 py-1.5 border border-yellow-600 bg-yellow-500 text-white' >{children}</button>;

    return <button className='px-3 py-1.5 border border-green-600 bg-green-500 text-white' >{children}</button>;

}

Button.propTypes = {
    // checkVariationValue: (props) => {
        checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        // console.log(props);
        // return new Error('Invalid props sdfgh');
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger)

        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger can be true');
        }
    },
};

export default Button;

{/* <Button primary={true}>asdf</Button> */}
{/* <Button primary>asdf</Button> */}
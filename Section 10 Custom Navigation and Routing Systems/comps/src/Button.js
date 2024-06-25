// import PropTypes from 'prop-types';
// import classnames from 'classnames';
import className from 'classnames';

// const finalClassName = className('px-3', 'py-1.5', 'bg-blue-500');
// const finalClassName = className('px-1.5', {
//     'bg-blue-500': true,
//     'text-yellow-500': false
//     // 'text-yellow-500': true
// });

// console.log(finalClassName);

// function Button({ text }) {
    function Button({ 
        children,
        primary,
        secondary,
        success,
        warning,
        danger,
        outline,
        rounded,
        // onClick
        ... rest
     }) {

        // console.log(rest);

        const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
            // 'border-blue-600 bg-blue-500 text-white': primary === true,
            'border-blue-600 bg-blue-500 text-white': primary && !outline,
            'border-gray-900 bg-gray-900 text-white': secondary && !outline,
            'border-green-600 bg-green-500 text-white': success && !outline,
            'border-yellow-400 bg-yellow-400 text-white': warning && !outline,
            'border-red-600 bg-red-500 text-white': danger && !outline,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-500 border-blue-600': outline && primary,
            'text-gray-900 border-gray-900': outline && secondary,
            'text-green-500 border-green-600': outline && success,
            'text-yellow-400 border-yellow-400': outline && warning,
            'text-red-500 border-red-600': outline && danger,

        });

        // let baseClassName = 'px-3 py-1.5 border';

        // if (primary) {
        //     baseClassName += 'border-green-600 bg-green-500 text-white';
        // } else if (secondary) {
        //     baseClassName += 'border-green-600 bg-green-500 text-white';
        // }

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
    // return <button className='px-3 py-1.5 border border-green-600 bg-green-500 text-white' >{children}</button>;

    return (
        // <button onClick={onClick} className={classes} >
        <button {...rest} className={classes} >
            {children}
        </button>
    );

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

// import { twMerge } from 'tailwind-merge';

// const classes = twMerge(
//     className('px-3 py-1.5 border', {
//       'border-blue-500 bg-blue-500 text-white': primary,
//       'border-gray-900 bg-gray-900 text-white': secondary,
//       'border-green-500 bg-green-500 text-white': success,
//       'border-yellow-400 bg-yellow-400 text-white': warning,
//       'border-red-500 bg-red-500 text-white': danger,
//       'rounded-full': rounded,
//       'bg-white': outline,
//       'text-blue-500': outline && primary,
//       'text-gray-900': outline && secondary,
//       'text-green-500': outline && success,
//       'text-yellow-400': outline && warning,
//       'text-red-500': outline && danger
//     })
//   );
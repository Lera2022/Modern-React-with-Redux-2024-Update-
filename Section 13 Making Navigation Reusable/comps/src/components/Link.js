import classNames from "classnames";
// import { useContext } from "react";
// import NavigationContext from "../context/navigation";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
  //   const { navigate } = useContext(NavigationContext);
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    // console.log(event);

    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;

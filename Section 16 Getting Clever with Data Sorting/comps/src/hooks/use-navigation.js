import { useContext } from "react";
import NavigationContext from "../context/navigation";

function useNavigation(params) {
  return useContext(NavigationContext);
}

export default useNavigation;

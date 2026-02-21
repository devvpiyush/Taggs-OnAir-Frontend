// External Modules
import { Form as ReactForm } from "react-router-dom";

// Local Modules
import Primary from "./Primary";

function Form() {
  return (
    <ReactForm className="w-full px-1 py-4 sm:px-0 flex flex-col items-center justify-between">
      <Primary />
    </ReactForm>
  );
}

export default Form;

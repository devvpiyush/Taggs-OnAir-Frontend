// External Modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Local Modules
import API from "@util/api.util.js";
import Header from "./Header";

function Chat() {
  // States
  const [CONTEXT_ABOUT_USER, UPDATE_CONTEXT_ABOUT_USER] = useState();

  // Constants
  const params = useParams();

  // Side-Effects
  useEffect(() => {
    const call = async () => {
      const result = await API("GET", `chat/user-context/${params.username}`);
      UPDATE_CONTEXT_ABOUT_USER(result?.data?.userContext);
    };
    call();
  }, []);

  return <Header UserContext={CONTEXT_ABOUT_USER} />;
}

export default Chat;

// External Modules
import { useState } from "react";

// Local Modules
import Bar from "./Bar";
import Button from "./Button";
import Result from "./Result";

function Search() {
  // Constants & States
  const [SEARCH, UPDATE_SEARCH] = useState("");
  const [SEARCH_RESULTS, UPDATE_SEARCH_RESULTS] = useState([]);

  return (
    <div>
      <div className="w-full p-4 flex flex-row items-center justify-between gap-4 border border-b-(--primary-border-color)">
        <Bar
          value={SEARCH}
          UPDATE_SEARCH={UPDATE_SEARCH}
          UPDATE_SEARCH_RESULTS={UPDATE_SEARCH_RESULTS}
        />
        <Button input={SEARCH} UPDATE_SEARCH_RESULTS={UPDATE_SEARCH_RESULTS} />
      </div>
      <div className="w-full p-4 flex flex-col gap-4">
        {SEARCH_RESULTS.length > 0 &&
          SEARCH_RESULTS.map((result) => (
            <Result
              key={result.username}
              username={result.username}
              name={result.name}
              isVerified={result.isVerified}
              profilePictureUrl={result.profilePictureUrl}
            />
          ))}
      </div>
    </div>
  );
}

export default Search;

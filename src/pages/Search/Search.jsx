// External Modules
import { useState } from "react";

// Local Modules
import { CircularCoolBlue } from "@component/Loaders";
import Bar from "./Bar";
import Button from "./Button";
import Result from "./Result";
import { useSearch } from "@hook/Func.hooks";

function Search() {
  // Constants & States
  const [SEARCH, UPDATE_SEARCH] = useState("");
  const SearchQuery = useSearch(SEARCH);

  return (
    <div>
      <div className="w-full p-4 flex flex-row items-center justify-between gap-4 border border-b-(--primary-border-color)">
        <Bar value={SEARCH} UPDATE_SEARCH={UPDATE_SEARCH} />
        <Button input={SEARCH} />
      </div>
      <div className="w-full p-4 flex flex-col gap-4">
        {SearchQuery?.isLoading && (
          <div className="w-full py-8 flex items-center justify-center">
            <CircularCoolBlue />
          </div>
        )}
        {SearchQuery?.data?.length === 0 && (
          <div className="w-full py-8 flex items-center justify-center">
            <p className="text-sm md:text-lg text-center font-semibold text-[#c0c0c0]">
              We couldn’t find anything… but we’re rooting for your next try!
            </p>
          </div>
        )}
        {SearchQuery?.data?.length > 0 &&
          SearchQuery?.data.map((result) => (
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

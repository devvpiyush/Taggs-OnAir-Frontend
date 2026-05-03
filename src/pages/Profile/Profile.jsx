// External Modules
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Local Modules
import API from "@util/api.util.js";
import { BrandHead } from "@component/Brand";
import Classic from "@/layouts/Classic";

function Profile() {
  // Constants
  const param = useParams().username;

  // States
  const [PROFILE, SET_PROFILE] = useState(null);

  // Side-Effects
  useEffect(() => {
    const call = async () => {
      const res = await API("GET", `user/id/${param}`);
      if (res?.isSuccess) SET_PROFILE(res?.meta?.data);
    };
    if (param && param !== "") call();
  }, [param]);

  return (
    <Classic>
      <BrandHead />
      <div className="p-3 md:p-12">
        <img
          src={PROFILE?.profilePictureUrl}
          alt={`${PROFILE?.name}'s Profile Picture`}
          className="p-1 w-25 max-w-25 h-25 max-h-25 border-2 border-gray-400 rounded-full"
        />
      </div>
    </Classic>
  );
}

export default Profile;

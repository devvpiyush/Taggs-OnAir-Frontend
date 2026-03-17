// External Modules
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"

// Local Modules
import api from "@util/api.util.js"
import { createLocalUser } from "@util/user.util";
import { AppProgress, AppStatic } from "@component/Loaders";
import { apiCache } from "@data/AppCache.js";
import { checkHealth } from "@hook/APIs.js";

import "./App.css";

function App() {
  // Declarations
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((store) => store.User);

  // Constants, States & References
  const [APP_LOAD_PROGRESS, UPDATE_APP_LOAD_PROGRESS] = useState(0);

  useEffect(() => {
    checkHealth()
  }, [])

  useEffect(() => {
    if (apiCache.checkHealth.loading) {
      const interval = setInterval(() => {
        UPDATE_APP_LOAD_PROGRESS((p) => {
          if (p >= 100) {
            clearInterval(interval);
            return 100;
          }
          return p + 100 / 45;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [apiCache.checkHealth.loading]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        apiCache.authGetMe.loading = true;
        const res = await api("GET", 'auth/me')
        if (res?.isSuccess && res?.data) {
          createLocalUser(dispatch, res?.data)
        }
      } catch (err) {
        console.log(err)
      } finally {
        apiCache.authGetMe.loading = false;
      }
    }

    fetchUser()
  }, [])

  return (
    <>
      {apiCache.checkHealth.loading && (
        <AppProgress progress={APP_LOAD_PROGRESS} />
      )}
      {apiCache.authGetMe.loading && (
        <AppStatic />
      )}
      <Outlet />
    </>
  );
}

export default App;

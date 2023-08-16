import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useGaPageTracking = () => {
  const location = useLocation();
  const { pathname, search, hash } = location;

  useEffect(() => {
    window.gtag("event", "page_view", {
      page_path: pathname + search + hash,
      page_search: search,
      page_hash: hash,
    });

    console.info(pathname + search + hash);
  }, [hash, pathname, search]);
};

export default useGaPageTracking;

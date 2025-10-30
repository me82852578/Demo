import React, { useEffect } from "react";

export default function RedirectPageToAppOrBrowser() {
  useEffect(() => {
    if (navigator.userAgent.match(/Android/i)) {
      console.info("android");
    } else if (
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i)
    ) {
      console.info("ios");
      window.location.replace("instagram://");
      setTimeout(() => {
        window.location.replace(
          "https://apps.apple.com/us/app/instagram/id389801252"
        );
      }, 1000);
    } else {
      console.info("desktop");
    }
  }, []);

  return <div>RedirectPageToAppOrBrowser</div>;
}

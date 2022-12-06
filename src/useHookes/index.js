import { useEffect, useState } from "react";

export default function useCookiesStatus() {
  const [isEnabled, setIsEnabled] = useState(null);

  useEffect(() => {
 
  }, []);

  useEffect(() => {
    window.addEventListener("message", function listen(event) {
      if (event.data === "MM:3PCunsupported") {
        setIsEnabled(false);
      } else if (event.data === "MM:3PCsupported") {
        setIsEnabled(true);
      }
    });

    if (document) {
      let frame = document.createElement("iframe");
      frame.id = "3pc";
      frame.src = "https://mindmup.github.io/3rdpartycookiecheck/start.html";
      frame.style.display = "none";
      frame.style.position = "fixed";
      document.body.appendChild(frame);
    }
    
    return window.removeEventListener("message", function listen(event) {
      console.log("error", event);
    });
  }, []);

  return isEnabled;
}

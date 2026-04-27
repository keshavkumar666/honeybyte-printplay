"use client";

import { useEffect } from "react";

const API = "https://deluxe-surgery-revered.ngrok-free.dev/";

let requestCount = 0;

export default function SiemLogger() {

  useEffect(() => {

    // track page visit
    sendLog("page_visit");

    // track rapid requests
    const interval = setInterval(() => {
      requestCount++;

      if (requestCount > 10) {
        sendLog("high_request_rate");
      }
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  function sendLog(event: string) {
    fetch(API, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        event,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: Date.now()
      })
    });
  }

  return null;
}
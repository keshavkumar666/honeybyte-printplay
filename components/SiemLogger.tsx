"use client";

import { useEffect } from "react";
import { sendLog } from "@app/utils/logger";

export default function SiemLogger() {
  useEffect(() => {
    sendLog({
      event: "page_visit",
      url: window.location.href,
      userAgent: navigator.userAgent
    });
  }, []);

  return null;
}
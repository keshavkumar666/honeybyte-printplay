// utils/logger.ts

const SIEM_API = "https://deluxe-surgery-revered.ngrok-free.dev/collect-log";

// 🔐 core sender
export async function sendLog(data: any) {
  try {
    await fetch(SIEM_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true"
      },
      body: JSON.stringify({
        ...data,
        timestamp: Date.now()
      })
    });
  } catch (e) {
    console.log("SIEM log failed", e);
  }
}

// 🌐 PAGE VISIT
export function logPageVisit() {
  sendLog({
    event: "page_visit",
    url: window.location.href,
    userAgent: navigator.userAgent
  });
}

// 🔐 LOGIN
export function logLogin(username: string, status: string) {
  sendLog({
    event: "login_attempt",
    username,
    status
  });
}

// 🚪 LOGOUT
export function logLogout(username: string) {
  sendLog({
    event: "logout",
    username
  });
}

// 🧾 FORM SUBMIT
export function logFormSubmit(formName: string) {
  sendLog({
    event: "form_submit",
    form: formName
  });
}

// 🖱️ CLICK TRACKING
export function logClick(action: string) {
  sendLog({
    event: "click",
    action
  });
}

// ⚡ RAPID CLICKS (bot signal)
let clickCount = 0;
export function detectRapidClicks() {
  clickCount++;

  if (clickCount > 5) {
    sendLog({
      event: "multiple_clicks",
      action: "rapid_click_detected"
    });
  }
}

// 📥 FILE DOWNLOAD
export function logDownload(file: string) {
  sendLog({
    event: "download",
    file
  });
}

// 🔍 SEARCH
export function logSearch(query: string) {
  sendLog({
    event: "search",
    query
  });
}

// ❌ ERROR TRACKING
export function logError(message: string) {
  sendLog({
    event: "error",
    message
  });
}

// ⏱️ TIME ON PAGE
export function logTimeSpent(seconds: number) {
  sendLog({
    event: "time_spent",
    duration: seconds
  });
}

// 🤖 BOT DETECTION (frontend hint)
export function detectBot() {
  const ua = navigator.userAgent.toLowerCase();

  if (
    ua.includes("bot") ||
    ua.includes("crawl") ||
    ua.includes("spider") ||
    ua.includes("headless")
  ) {
    sendLog({
      event: "bot_detected",
      userAgent: ua
    });
  }
}

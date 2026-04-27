const SIEM_API = "https://deluxe-surgery-revered.ngrok-free.dev/collect-log";

export async function sendLog(data) {
  try {
    await fetch(SIEM_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true"   // 🔥 THIS FIXES IT
      },
      body: JSON.stringify(data)
    });
  } catch (e) {
    console.log("SIEM log failed", e);
  }
}


const SIEM_API = "http://192.168.44.1P:8000/collect-log";


export async function sendLog(data) {
  try {
    await fetch(SIEM_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  } catch (e) {
    console.log("SIEM log failed");
  }
}

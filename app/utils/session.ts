export function getSessionId() {
  let id = localStorage.getItem("siem_session");

  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("siem_session", id);
  }

  return id;
}

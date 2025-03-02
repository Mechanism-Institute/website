export async function storeChatInput(input: string) {
  return fetch("/api/chat-input", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input,
    }),
  });
}

export async function storeLibrarySearch(input: string) {
  return fetch("/api/library-search-input", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input,
    }),
  });
}

export async function storeGetInvolvedSubmit(info: {
  name: string;
  email: string;
  message?: string;  // Made optional with ?
  x?: string;        // Already optional with ?
}) {
  console.log("Sending to API:", info); // Debug log
  
  return fetch("/api/get-involved-input", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),  // Sending info directly
  });
}
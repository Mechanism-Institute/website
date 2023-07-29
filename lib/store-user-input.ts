export async function storeChatInput(input: string) {
  return fetch("/api/chat-input", {
    method: "POST",
    body: JSON.stringify({
      input,
    }),
  });
}

export async function storeLibrarySearch(input: string) {
  return fetch("/api/library-search-input", {
    method: "POST",
    body: JSON.stringify({
      input,
    }),
  });
}

export async function storeGetInvolvedSubmit(info: {
  name: string;
  email: string;
  involvement: string[];
  twitter?: string;
}) {
  return fetch("/api/get-involved-input", {
    method: "POST",
    body: JSON.stringify({
      ...info,
    }),
  });
}

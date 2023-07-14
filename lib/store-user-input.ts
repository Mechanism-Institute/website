export async function storeUserInput(input: string) {
  return fetch("/api/user-input", {
    method: "POST",
    body: JSON.stringify({
      input,
    }),
  });
}

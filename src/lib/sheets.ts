const SCRIPT_URL = 'https://script.google.com/macros/s/SEU_SCRIPT_ID/exec'; // substitua pela URL real

export async function addToSheet(email: string, sector: string): Promise<void> {
  await fetch(SCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify({ email, sector }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function checkEmailInSheet(): Promise<boolean> {
  return false; // lógica opcional
}

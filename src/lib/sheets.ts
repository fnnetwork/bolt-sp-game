const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxFsxNyDxSR56uzx_BQgP-kij-tAaEn3vluc9-tVIL0WzHwc2wb0qnHCT_fXvL_XZPY/exec'; // substitua pela URL real

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

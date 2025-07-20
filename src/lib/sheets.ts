const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxFsxNyDxSR56uzx_BQgP-kij-tAaEn3vluc9-tVIL0WzHwc2wb0qnHCT_fXvL_XZPY/exec";

export async function checkEmailInSheet(email: string): Promise<boolean> {
  // Opcional: se quiser verificar duplicados no futuro
  return false;
}

export async function addToSheet(email: string, sector: string): Promise<void> {
  const res = await fetch(SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, sector }),
  });

  const text = await res.text(); // <– para debug
  console.log("Resposta do Google Sheets:", text);

  if (!res.ok) {
    throw new Error("Erro ao salvar no Google Sheets");
  }
}

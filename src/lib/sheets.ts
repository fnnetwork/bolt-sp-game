const SHEET_ID = '1PUQl06YOWJKFqNl_mT7Q3j_Op3rMKaDf2pzdwAEjKrQ';
const SHEET_NAME = 'Pessoas';
const API_KEY = 'AIzaSyAcBmUwBM40iya-70_EStB24GlaVSSK9EE';

const SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?alt=json&key=${API_KEY}`;
const APPEND_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}:append?valueInputOption=RAW&key=${API_KEY}`;

export async function checkEmailInSheet(email: string): Promise<boolean> {
  const res = await fetch(SHEET_URL);
  const data = await res.json();

  if (!data.values) return false;

  return data.values.some((row: string[]) => row[0] === email);
}

export async function addToSheet(email: string, sector: string): Promise<void> {
  const res = await fetch(APPEND_URL, {
    method: 'POST',
    body: JSON.stringify({
      values: [[email, sector, new Date().toLocaleString()]]
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Erro ao adicionar ao Sheets: ${error}`);
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */

export const saveJSON = (filename: string, data: any) => {
  const blob = new Blob([JSON.stringify(data)]);
  const link = document.createElement("a");
  link.download = filename;
  link.href = window.URL.createObjectURL(blob);
  link.click();
};

export const saveCSV = (filename: string, data: any) => {
  const blob = new Blob([data], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.download = filename;
  link.href = window.URL.createObjectURL(blob);
  link.click();
};

export function jsonToCSV(jsonArray: any) {
  // Check if jsonArray is not an array or is empty
  if (!Array.isArray(jsonArray) || jsonArray.length === 0) {
    return null;
  }

  // Extract headers
  const headers = Object.keys(jsonArray[0]);
  const csvRows = jsonArray.map((row) => {
    return headers
      .map((fieldName) => {
        // Handle null and undefined values
        let value = row[fieldName] == null ? "" : row[fieldName];
        // Escape double quotes in values
        value = value.toString().replace(/"/g, '""');
        // Wrap values with double quotes
        return `"${value}"`;
      })
      .join(",");
  });

  // Add header row
  csvRows.unshift(headers.join(","));

  // Join rows with newline characters
  return csvRows.join("\n");
}

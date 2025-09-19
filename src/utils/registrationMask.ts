/**
 * Utilitário para máscara de matrículas
 * Formato: F + 7 números, separados por vírgula
 */

export function formatRegistrations(value: string): string {
  const cleaned = value.replace(/[^0-9,F]/g, "");
  const registrations = cleaned.split(",");

  const formatted = registrations.map((reg) => {
    const trimmed = reg.trim();
    if (!trimmed) return "";

    if (/^\d/.test(trimmed)) {
      return "F" + trimmed.slice(0, 7);
    }

    if (trimmed.startsWith("F")) {
      const numbers = trimmed.slice(1).replace(/\D/g, "");
      return "F" + numbers.slice(0, 7);
    }

    return "";
  });

  return formatted.join(",");
}

export function validateRegistrations(value: string): boolean {
  if (!value.trim()) return true;

  const registrations = value
    .split(",")
    .map((reg) => reg.trim())
    .filter((reg) => reg !== "");

  return registrations.every((reg) => /^F\d{7}$/.test(reg));
}

export function getValidRegistrationsCount(value: string): number {
  if (!value.trim()) return 0;

  const registrations = value
    .split(",")
    .map((reg) => reg.trim())
    .filter((reg) => reg !== "");

  return registrations.filter((reg) => /^F\d{7}$/.test(reg)).length;
}

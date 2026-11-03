// Names, links and dates can stay as strings; translated text uses { pt, en }.
export function translate(value, language) {
  return typeof value === 'string' ? value : value?.[language] ?? value?.pt ?? '';
}

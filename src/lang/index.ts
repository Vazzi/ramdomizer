import en from './en.json';

export function loadMessages(locale: string): Record<string, string>  {
  switch (locale) {
    case "en":
      return en;
    default:
      return en;
  }
}

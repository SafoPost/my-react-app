export const toLocaleCurrency = value => value.toLocaleString('ru-RU',
  { style: 'currency', currency: 'RUB' });
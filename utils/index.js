export const isObject = (val) => {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

export const stripTags = (input) => {
  if (!input) return '';
  return input.replace(/<(?:.|\n)*?>/gm, '');
};

export const formatDate = (date) => {
  const selectedDate = new Date(date);
  let dd = selectedDate.getDate();
  let mm = selectedDate.getMonth() + 1;
  const yyyy = selectedDate.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  return `${dd}.${mm}.${yyyy}`;
};

/**
 * @param {string} key
 * @param {Object} el
 * @param {string} locale
 * @return {string}
 */
export const getLocale = (key, el, locale) => {
  if (!isObject(el)) return '';
  if (locale === defaultLocale) return el[key];
  const current = el.translations
    .filter((t) => t.locale === locale)
    .find((t) => t.column_name === key);
  return isObject(current) ? current.value : '';
};

/**
 * @param {string} key
 * @param {Array} options
 * @return {string}
 */
export const getOption = (key, options) => {
  const emptyOption = {
    id: NaN,
    key: '',
    value: '',
  };
  if (!options || !optionKeys.includes(key)) return emptyOption.value;
  const currentOption = options.find((option) => option.key === key);
  if (currentOption) return currentOption.value;
  return emptyOption.value;
};

export const capitalize = (str: string): string => {
  const strArr = str.split(' ');
  const capitalizedArr = strArr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedArr.join(' ');
};

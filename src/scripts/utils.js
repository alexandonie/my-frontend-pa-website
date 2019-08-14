const random = (_min = 0, _max = 9) => {
  const min = Math.ceil(_min);
  const max = Math.floor(_max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export {
  // eslint-disable-next-line import/prefer-default-export
  random,
};

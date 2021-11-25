module.exports = (tickets) =>
  tickets.sort((a, b) => {
    if (a.to !== b.from) {
      return 1;
    }
    if (a.to === b.from) {
      return -1;
    }
    return -1;
  });

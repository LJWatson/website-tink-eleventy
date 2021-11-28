const moment = require('moment');

module.exports = value => {
  const dateObject = moment(value);
  return `${dateObject.format('DD')} ${dateObject.format('MMMM YYYY')}`;
};

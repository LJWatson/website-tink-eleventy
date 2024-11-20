import moment from 'moment';

export default value => {
  const dateObject = moment(value);
  return `${dateObject.format('DD')} ${dateObject.format('MMMM YYYY')}`;
};

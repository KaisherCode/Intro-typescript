// var _ = require('lodash');
import _ from 'lodash'

const data = [
  {
    username: 'abel',
    role: 'admin'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'samantha',
    role: 'seller'
  },
  {
    username: 'Jesus',
    role: 'customer'
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);


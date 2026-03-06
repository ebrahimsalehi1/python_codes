const STATUS = [
  'created',
  'requesting',
  'importing',
  'completed',
  'failed',
];

type STATUS_NUM = (typeof STATUS)[number];

const a: STATUS_NUM = 'created';
console.log(a);

type STATUS2 =
  | 'created'
  | 'requesting'
  | 'importing'
  | 'completed'
  | 'failed';
const b: STATUS2 = 'created';
console.log(b);

// Stop writing your union types twice in TypeScript!

// ❌ Bad: type and values are separate —
// they can go out of sync
type Status =
  | 'created'
  | 'requesting'
  | 'importing'
  | 'completed'
  | 'failed';

const STATUS_LIST = [
  'created',
  'requesting',
  'importing',
  'completed',
  'failed',
];

// ✅ Good: single source of truth —
// add to the array, type updates automatically
const STATUS = [
  'created',
  'requesting',
  'importing',
  'completed',
  'failed',
] as const;

type Status2 = (typeof STATUS)[number];
// "created" | "requesting" | "importing"
// | "completed" | "failed"

const current: Status2 = 'created';

// ✅ iterate at runtime too
STATUS.forEach((s) => console.log(s));

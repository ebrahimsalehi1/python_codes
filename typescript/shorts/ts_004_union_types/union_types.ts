type Status =
  | 'success'
  | 'error'
  | 'loading';

let status: Status = 'loading';

// ❌ Error: pending is not 
// assignable to type
status = 'pending';

// ✅ Success
status = 'success';

console.log(status);

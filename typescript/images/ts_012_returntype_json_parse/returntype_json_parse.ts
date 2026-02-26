// How to type JSON.parse results correctly in TypeScript 🔥

function createUser() {
  return {
    id: 1,
    name: 'Ebrahim',
    role: 'admin',
  };
}

// JSON.parse always returns `any` — no type info at all
const rawData = JSON.parse(
  '{"id": 2, "name": "Cyrus", "role": "editor"}',
);

// ❌ #1 — already `any`, zero type safety
const user1 = rawData as any;
console.log(user1.naem); // 💥 typo — no TS error, silent bug!

// ❌ #2 — hardcoded type, gets stale when createUser() changes
const user2 = rawData as unknown as {
  id: number;
  name: string;
  role: string; // 👈 must update manually every time
};
console.log(user2.name);

// ✅ Best way — always in sync with createUser()
const user3 =
  rawData as unknown as ReturnType<
    typeof createUser
  >;
console.log(user3.name);


# 1) What are some differences between interfaces and types in TypeScript?




##  Interface vs Type

TypeScript-এ `Interface` এবং `Type` দুটোই ডেটার structure নির্ধারণে ব্যবহৃত হয়, তবে তাদের ব্যবহারের ক্ষেত্র ভিন্ন।

### Interface

 - অবজেক্টের নির্দিষ্ট  `shape enforce ` করতে ব্যবহৃত হয়

- সহজে `extend` ও `declaration merge` করা যায়

- ক্লাস, অবজেক্ট এবং `reusable model design` এ বেশি উপযোগী

### Type

- আরও `flexible`, যা `primitive, union, intersection, function signature` সব ধরণের টাইপ প্রকাশ করতে পারে।

- জটিল টাইপ structure ও কম্পোজিশনে বেশি কার্যকর

### কখন কোনটির ব্যাবহার?

- Object / Model / Class Structure → Interface

- Union / Intersection / Flexible Type Definition → Type

###  Example 1 : Interface for Object Shape
```ts
interface User {
  name: string;
  age: number;
}

const rakib: User = {
  name: "Rakib",
  age: 25,
};
```

### Example 2 : Type for Union
```ts
type ID = string | number;

const userId1: ID = 101;
const userId2: ID = "A-552";
```
### Example 3 : Type for Intersection
```ts
type Person = {
  name: string;
};

type Employee = Person & {
  salary: number;
};

const emp: Employee = {
  name: "Asha",
  salary: 50000,
};
```

# 2) Provide an example of using union and intersection types in TypeScript.

## Union and Intersection Type

### TypeScript-এ `Union` মানে হলো একটি ভ্যারিয়েবল একাধিক টাইপের যেকোনো একটিকে নিতে পারে। আর `Intersection` মানে হলো দুই বা ততোধিক টাইপকে একত্রে মিশিয়ে একটি পূর্ণাঙ্গ টাইপ তৈরি করা।

### Union Type Example : 
```ts
type ID = string | number;

let userId: ID;

userId = 101;        // valid
userId = "USER-01";  // valid
```
### `Union মানে: দুই টাইপের মধ্যে যেকোনো একটি গ্রহণযোগ্য।`

### Intersection Type Example:
```ts
type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type Staff = Person & Employee;

const member: Staff = {
  name: "Asha",
  salary: 40000,
};
```
### `Intersection মানে: দুই টাইপের সব property-ই থাকতে হবে।`


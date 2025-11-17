
# Interface vs Type: TypeScript-এর পার্থক্য সংক্ষেপে






TypeScript-এ `Interface` এবং `Type` দুটোই ডেটার structure নির্ধারণে ব্যবহৃত হয়, তবে তাদের ব্যবহারের ক্ষেত্র ভিন্ন।

## Interface

 - অবজেক্টের নির্দিষ্ট  `shape enforce ` করতে ব্যবহৃত হয়

- সহজে `extend` ও `declaration merge` করা যায়

- ক্লাস, অবজেক্ট এবং `reusable model design` এ বেশি উপযোগী

## Type

- আরও `flexible`, যা `primitive, union, intersection, function signature` সব ধরণের টাইপ প্রকাশ করতে পারে।

- জটিল টাইপ structure ও কম্পোজিশনে বেশি কার্যকর

## কখন কোনটির ব্যাবহার?

- Object / Model / Class Structure → Interface

- Union / Intersection / Flexible Type Definition → Type
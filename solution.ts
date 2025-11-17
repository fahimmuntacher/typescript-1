const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

const getLength = <T>(value: string | T[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

interface Item {
  title: string;
  rating: number;
}

function filterByRating(items: Item[]): Item[] {
  const filterRating = items.filter((item) => {
    if (item.rating >= 4) {
      return item;
    }
  });
  return filterRating;
}

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  const activeUser = users.filter((user) => {
    if (user.isActive) {
      return user;
    }
  });
  return activeUser;
}


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book) {
  const { title, author, publishedYear, isAvailable } = book;
  return `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
    isAvailable ? "Yes" : "No"
  }`;
}

function getUniqueValues<T>(arr1: T[], arr2: T[]) {
  const newArr : T[] = [];
  const unique : T[] = [];
  for(let i = 0; i < arr1.length; i++){
    newArr[newArr.length] = arr1[i];
  }
  for(let i = 0; i < arr2.length; i++){
    newArr[newArr.length] = arr2[i]
  }

  for(let i = 0; i < newArr.length; i++){
    let element = newArr[i];
    let found = false;
    for(let i = 0; i < unique.length ; i++){
      if(unique[i] === element){
        found = true;
        break;
      }
    }
    if(!found){
      unique[unique.length] = element;
    }
  }
  return unique;
}

interface Products {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Products[]) {
  if (products.length > 0) {
    return products.reduce((acc, product) => {
      const discount = product.discount ?? 0;
      const afterDiscount =
        product.price * product.quantity * (1 - discount / 100);
      return acc + afterDiscount;
    }, 0);
  } else {
    return 0;
  }
}

// problem 1
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

// problem 2
const getLength = <T>(value: string | T[]) : number => {
    if(typeof value === "string"){
        return value.length;
    }else {
        return value.length
    }
}

// problem 3
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

// problem 4
interface Item {
  title: string;
  rating: number;
}

function filterByRating(items: Item[]) {
  const filterRating = items.filter((item) => {
    if (item.rating >= 4 && item.rating <= 5) {
      return item;
    }
  });
  return filterRating;
}

// problem 5
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}


function filterActiveUsers(users : User[]){
    const activeUser = users.filter(user => {
        if(user.isActive){
            return user;
        }
    })
    return activeUser;
}


// problem 6
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}


function printBookDetails(book : Book){
    const {title, author, publishedYear, isAvailable} = book;
    console.log(
        `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable ? "Yes" : "No"}`
    )
}

// problem 7
function getUniqueValues<T>(arr1: T[], arr2: T[]) {
    const arr3 = arr1.concat(arr2);
    const unique = [...new Set(arr3)]
    return unique
}

// problem 8 
interface Products {
    name: string;
    price: number;
    quantity: number;
    discount?: number
}

function calculateTotalPrice(products : Products[]){
    if(products.length > 0){ 
        return products.reduce((acc, product) => {
            const discount = product.discount ?? 0;
            const afterDiscount = (product.price * product.quantity) * (1 - discount / 100);
            return acc + afterDiscount;
        }, 0) 
    }else {
        return 0;
    }
}
# type

```
// Creating a type
type Geeks {
    name: string;
    age: number
}

type Geeks {
    email: string;
}

// Using the merged type
const gfg: Geeks = {
    name: " kgowda",
    age: 20,
    email: " kgowda@gmail.com"
};

console.log(gfg);
//output: "Duplicate identifier 'Geeks'" error.
```
# interface

```
// Creating a interface
interface Geeks {
name: string;
age: number
}

interface Geeks {
email: string;
}

// Using the merged interface
const gfg: Geeks = {
name: " kgowda",
age: 20,
email: " kgowda@gmail.com"
};

console.log(gfg);
//output:name: " kgowda", age: 20, email: " kgowda@gmail.com"
```


| Type | Interface |
| --- | --- |
| It is a collection of data types. | It is a form of syntax. |
| It supports the creation of a new name for a type. | It provides a way to define the entities. |
| It has less comparatively less capabilities. | It has comparatively more capabilities. |
| It does not support the use of an object. | It supports the use of an object. |
| Multiple merged declarations cannot be used. | Multiple merged declarations can be used. |
| Two types having the same name raise an exception. | Two interfaces having the same name get merged. |
| It does not have implementation purposes. | It has an implementation purpose. |

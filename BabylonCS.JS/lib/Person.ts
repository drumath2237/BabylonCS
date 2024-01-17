export class Person {
  public name: string;
  public age: number;
  public isChild: boolean;

  public constructor(name: string, age: number, isChild: boolean) {
    this.name = name;
    this.age = age;
    this.isChild = isChild;
  }
}

/**
 * Person factory
 * @param name name
 * @returns Person Object
 */
export const getPerson = (name: string) => new Person(name, 18, false);

/**
 * persont to string
 * @param person person object
 * @returns print string
 */
export const printPerson = (person: Person): string =>
  `{name: ${person.name}, age: ${person.age}, child: ${person.isChild}}`;

export const changeName = (person: Person, name: string): void => {
  person.name = name;
};

export const personImports = {
  getPerson,
  printPerson,
  changeName,
};

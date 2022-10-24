import { observable, action, makeObservable } from "mobx";

import { createContext } from "react";

export class RootStore {
  public count = 1;

  constructor() {
    makeObservable(this, {
      count: observable,
      changeCounter: action,
    });
  }

  changeCounter = () => (this.count += 1);
}

const store = new RootStore();

export default createContext(store);

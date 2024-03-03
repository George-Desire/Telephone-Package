class Observer {
  update(phoneNumber) {
    console.log(`Phone number dialed: ${phoneNumber}`);
  }
}

class Telephone {
  constructor() {
    this.phoneNumbers = [];
    this.observers = [];
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    const index = this.phoneNumbers.indexOf(phoneNumber);
    if (index !== -1) {
      this.phoneNumbers.splice(index, 1);
    }
  }

  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.includes(phoneNumber)) {
      this.notifyObservers(phoneNumber);
    } else {
      console.log("Phone number not found.");
    }
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach(observer => {
      observer.update(phoneNumber);
    });
  }
}

const telephone = new Telephone();
const observer1 = new Observer();
const observer2 = {
  update: function(phoneNumber) {
    console.log(`Now Dialing ${phoneNumber}`);
  }
};

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.addPhoneNumber("2347023232");

telephone.dialPhoneNumber("2347023232");

telephone.removePhoneNumber("2347023232");

telephone.dialPhoneNumber("2347023232");
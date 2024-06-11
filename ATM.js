class ATM {
  constructor(balance = 0) {
    this.balance = balance;
  }

  checkBalance() {
    console.log(`Your balance is $${this.balance.toFixed(2)}`);
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`You deposited $${amount.toFixed(2)}`);
    } else {
      console.log("Invalid deposit amount");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`You withdrew $${amount.toFixed(2)}`);
    } else {
      console.log("Invalid withdraw amount or insufficient funds");
    }
  }

  start() {
    const prompt = require('prompt-sync')();
    let action;
    
    do {
      console.log("\nATM Menu:");
      console.log("1. Check Balance");
      console.log("2. Deposit");
      console.log("3. Withdraw");
      console.log("4. Exit");
      action = prompt("Choose an option (1-4): ");
      
      switch (action) {
        case '1':
          this.checkBalance();
          break;
        case '2':
          const depositAmount = parseFloat(prompt("Enter deposit amount: "));
          this.deposit(depositAmount);
          break;
        case '3':
          const withdrawAmount = parseFloat(prompt("Enter withdraw amount: "));
          this.withdraw(withdrawAmount);
          break;
        case '4':
          console.log("Thank you for using the ATM. Goodbye!");
          break;
        default:
          console.log("Invalid option. Please choose 1-4.");
      }
    } while (action !== '4');
  }
}

const atm = new ATM(100); // Initial balance of $100
atm.start();

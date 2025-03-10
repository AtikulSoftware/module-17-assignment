let balance = 0;
let transactionHistory = [];

function updateUI() {
  document.getElementById("balance").innerText = `৳ ${balance}`;
  const historyList = document.getElementById("transaction-history");
  historyList.innerHTML = "";
  transactionHistory.forEach((txn) => {
    const li = document.createElement("li");
    li.className = `p-2 rounded ${
      txn.type === "Add" ? "bg-green-100" : "bg-red-100"
    }`;
    li.innerText = `${txn.date} - ${txn.type}: ৳ ${txn.amount}`;
    historyList.appendChild(li);
  });
}

function addMoney() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }
  balance += amount;
  transactionHistory.push({
    date: new Date().toLocaleString(),
    type: "Add",
    amount,
  });
  updateUI();
  document.getElementById("amount").value = "";
}

function withdrawMoney() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }
  if (amount > balance) {
    alert("Insufficient balance.");
    return;
  }
  balance -= amount;
  transactionHistory.push({
    date: new Date().toLocaleString(),
    type: "Withdraw",
    amount,
  });
  updateUI();
  document.getElementById("amount").value = "";
}

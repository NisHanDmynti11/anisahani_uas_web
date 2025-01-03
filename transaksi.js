const form = document.getElementById('transaction-form');
const transactionList = document.getElementById('transaction-list').querySelector('tbody');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('transaction-name').value;
  const category = document.getElementById('transaction-category').value;
  const amount = document.getElementById('transaction-amount').value;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${name}</td>
    <td>${category}</td>
    <td>Rp ${parseInt(amount).toLocaleString()}</td>
  `;
  transactionList.appendChild(row);

  form.reset();
});

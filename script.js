const userContainer = document.getElementById('user-container');

  function fetchUsers() {
  const spinner = document.getElementById('loading-spinner');
  userContainer.innerHTML = '';
  spinner.style.display = 'block';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) throw new Error('Network error');
      return response.json();
    })
    .then(users => {
  setTimeout(() => {
    spinner.style.display = 'none';
    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'user-card';
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      `;
      userContainer.appendChild(card);
    });
  }, 1000); 
})
    .catch(error => {
      spinner.style.display = 'none';
      userContainer.innerHTML = `<p style="color:red;">Failed to fetch users. ${error.message}</p>`;
    });
}


fetchUsers();

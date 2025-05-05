document.addEventListener('DOMContentLoaded', function () {
    const userList = document.getElementById('user-list');
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        users.forEach(user => {
          const card = document.createElement('div');
          card.className = 'user-card';
  
          card.innerHTML = `
            <img src="https://robohash.org/${user.id}?set=set2" alt="Avatar">
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
          `;
  
          userList.appendChild(card);
        });
  
        // Search Functionality
        const searchInput = document.getElementById('search');
        searchInput.addEventListener('input', function () {
          const value = this.value.toLowerCase();
          document.querySelectorAll('.user-card').forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = name.includes(value) ? 'block' : 'none';
          });
        });
      })
      .catch(error => {
        userList.innerHTML = '<p>Error loading users.</p>';
        console.error('Fetch error:', error);
      });
  });
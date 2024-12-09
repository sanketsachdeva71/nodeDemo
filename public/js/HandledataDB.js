document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
    };

    try {
      const response = await fetch('/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.text();
      document.getElementById('responseMessage').textContent = result;
    } catch (error) {
      document.getElementById('responseMessage').textContent = 'There was an error submitting the form. Please try again later.';
    }
  });
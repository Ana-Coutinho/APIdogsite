const factElement = document.getElementById('abc');
const getFactBtn = document.getElementById('butao');

getFactBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('https://dog-api.kinduff.com/api/facts'); 
    const data = await response.json();

    factElement.textContent = data.facts; 

  } catch (error) {
    console.error('Erro no fetch:', error);
    factElement.textContent = 'Erro no Fetch';}
  });
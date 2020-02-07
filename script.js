const results = document.querySelector('#results');

async function asyncFetch(value) {
	const res = await fetch(`https://swapi.co/api/${value}/`);
	const data = await res.json();
	displayResults(data, value);
}

function displayResults(data, value) {
	let output = '';
	if (value === 'films') {
		data.results.forEach(item => {
			output += `
            <div class="card"> 
                <h4 class="card_title">${item.title}</h4>
                <div class="card_content">
                    <h5><span>Producer:</span> ${item.producer}</h5>
                    <h5><span>Director:</span> ${item.director}</h5>
                </div>
            </div>

            `;
		});
	}
	results.innerHTML = output;
}

//event listener for buttons
document.querySelector('#buttons').addEventListener('click', e => {
	asyncFetch(e.target.textContent.trim().toLowerCase());
});

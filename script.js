const results = document.querySelector('#results');

async function asyncFetch(value) {
	const res = await fetch(`https://swapi.co/api/${value}/`);
	const data = await res.json();
	displayResults(data, value);
}

function displayResults(data, value) {
	let output = '';
	console.log(data);
	//films card
	if (value === 'films') {
		data.results.forEach(item => {
			output += `
            <div class="card"> 
                <h4 class="card_title">${item.title}</h4>
                <div class="card_content">
                    <h5><span>Producer:</span> ${item.producer}</h5>
                    <h5><span>Director:</span> ${item.director}</h5> 
                    <h5><span>Release Date:</span> ${item.release_date}</h5> </br>
                    <p>${item.opening_crawl}</p>
                </div>
            </div>

            `;
		});
	}

	//people card
	if (value === 'people') {
		data.results.forEach(item => {
			output += `
            <div class="card"> 
                <h4 class="card_title">${item.name}</h4>
                <div class="card_content">
                    <h5><span>Birth Year:</span> ${item.birth_year}</h5> 
                    <h5><span>Gender:</span> ${item.gender}</h5> 
                    <h5><span>Height:</span> ${item.height}cm</h5>
                    <h5><span>Mass:</span> ${item.mass}kg</h5> 
                    <h5><span>Skin Color:</span> ${item.skin_color}</h5> 
                </div>
            </div>

            `;
		});
	}

	//species card
	if (value === 'species') {
		data.results.forEach(item => {
			output += `
            <div class="card"> 
                <h4 class="card_title">${item.name}</h4>
                <div class="card_content">
                    <h5><span>Classification:</span> ${item.classification}</h5> 
                    <h5><span>Average Height:</span> ${item.average_height}</h5> 
                    <h5><span>Skin Colors:</span> ${item.skin_colors}</h5> 
                    <h5><span>Hair Colors:</span> ${item.hair_colors}</h5>
                    <h5><span>Average Lifespan:</span> ${item.average_lifespan}</h5> 
                    <h5><span>Language:</span> ${item.language}</h5> 
                </div>
            </div>

            `;
		});
	}

	//spaceships card
	if (value === 'starships') {
		data.results.forEach(item => {
			output += `
            <div class="card"> 
                <h4 class="card_title">${item.name}</h4>
                <div class="card_content">
                    <h5><span>Model:</span> ${item.model}</h5> 
                    <h5><span>Starship Class:</span> ${item.starship_class}</h5> 
                    <h5><span>Manufacturer:</span> ${item.manufacturer}</h5> 
                    <h5><span>Length:</span> ${item.length}m</h5>
                    <h5><span>Max Speed:</span> ${item.max_atmosphering_speed} km/h</h5> 
                    <h5><span>Crew:</span> ${item.skin_crew}</h5> 
                    <h5><span>Passengers:</span> ${item.passengers}</h5> 
                </div>
            </div>

            `;
		});
	}

	//vehicles card
	if (value === 'vehicles') {
		data.results.forEach(item => {
			output += `
            <div class="card"> 
                <h4 class="card_title">${item.name}</h4>
                <div class="card_content">
                    <h5><span>Model:</span> ${item.model}</h5> 
                    <h5><span>Starship Class:</span> ${item.starship_class}</h5> 
                    <h5><span>Manufacturer:</span> ${item.manufacturer}</h5> 
                    <h5><span>Length:</span> ${item.length}m</h5>
                    <h5><span>Max Speed:</span> ${item.max_atmosphering_speed} km/h</h5> 
                    <h5><span>Crew:</span> ${item.skin_crew}</h5> 
                    <h5><span>Passengers:</span> ${item.passengers}</h5> 
                </div>
            </div>

            `;
		});
	}

	//planets card
	if (value === 'planets') {
		data.results.forEach(item => {
			output += `
            <div class="card"> 
                <h4 class="card_title">${item.name}</h4>
                <div class="card_content">
                    <h5><span>Rotation Period:</span> ${item.rotation_period}</h5> 
                    <h5><span>Orbital Period:</span> ${item.orbital_period}</h5> 
                    <h5><span>Diameter:</span> ${item.diameter}</h5> 
                    <h5><span>Climate:</span> ${item.climate}</h5>
                    <h5><span>Gravity:</span> ${item.gravity}</h5> 
                    <h5><span>Terrain:</span> ${item.terrain}</h5> 
                    <h5><span>Surface Water:</span> ${item.surface_water}%</h5> 
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

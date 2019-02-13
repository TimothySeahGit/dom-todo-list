const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];

//const toggleTaskCompletion = preventDefault();

const initialiseTasks = () =>{
	tasks.forEach(task => {
		const li = document.createElement('li');
		//length.addEventListener('click', (toggleTaskCompletion));
		li.textContent = task;
		console.log(task);
		const ul = document.querySelector('ul');
		const removeButton = document.createElement('button');
		removeButton.textContent = "Remove";
		removeButton.classList.add('removeButton');
		li.appendChild(removeButton);
  		ul.appendChild(li);
	})
}

initialiseTasks();



let input = document.querySelector('input');
let button = document.querySelectorAll('button');

button[0].addEventListener('click', (event) => {
  //event.preventDefault();
  
  const entry = document.createElement('li');
  const removeButton = document.createElement('button');
  removeButton.textContent = "Remove";
  removeButton.classList.add('removeButton');
  entry.textContent = input.value;
  const ul = document.querySelector('ul');
  entry.appendChild(removeButton);
  ul.appendChild(entry);
  button = document.querySelectorAll('button');
  
  
})



function remoove(e){
	// e.target refers to the clicked <li> element
	// This is different than e.currentTarget which would refer to the parent <ul> in this context
	
	console.log(e.target.textContent)	
	if (e.target.textContent === 'Remove') {
		e.target.parentNode.remove();
	}
	else {
		if (e.target.classList.value === 'strikethrough') {
			e.target.classList.remove('strikethrough');
			//console.log("Hello");
		  } 
		else {
			e.target.classList.add('strikethrough');
			//console.log("bye");
		  }
	}
	
  }
  
  // Attach the listener to the list
  // It will fire when each <li> is clicked
  const hider = document.querySelector('ul');
  hider.addEventListener('click', remoove, false);


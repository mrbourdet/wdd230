const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
	if (input.value != "") 
    {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        deleteButton.setAttribute("aria-label", "Delete Button");
        li.append(deleteButton);
        list.append(li);
        input.focus();
        input.value = "";

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
            input.value = "";
        });
    }
    else 
    {
        alert("You must enter a value.");
    }
});
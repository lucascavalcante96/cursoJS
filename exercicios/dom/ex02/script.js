const input = document.querySelector('input');
const lista = document.querySelector('ul');

input.addEventListener('keyup', handleKeyUp);

function handleKeyUp(e){
    if (e.key === 'Enter'){
        if (input.value === ''){
            return;
        } else {
            const newLi = document.createElement('li');
            newLi.innerText = input.value;
            lista.append(newLi);

            input.value = '';
        }
        
    }
}
document.getElementById('joke').addEventListener('submit', loadJokes);

function loadJokes(e) {
    e.preventDefault();
    const amount = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${amount}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const result = JSON.parse(this.responseText);
            let output = '';
            if (result.type === 'success') {
                result.value.forEach((joke) => {
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += `<li>Something went wrong!</li>`;
            }

            document.getElementById('results').innerHTML = output;
        }
    }


    xhr.send();
}
document.querySelector('#localisation').addEventListener('keyup', function () {
    let inputContent = <HTMLInputElement>document.getElementById('localisation');
    //cible le container
    let container = document.getElementById('result');
    container.innerHTML = "";

    let url = `https://api-adresse.data.gouv.fr/search/?q=${this.value}&limit=6`;

        fetch(url)
        .then((response) => response.json()
        .then((data) => {
            console.log(data);
            //Boucle sur array de la requète, contient des objets.
            let result = data.features;

            result.forEach(element => {
        
                let listElement = document.createElement('li');
                listElement.classList.add('item');
                listElement.innerText = element.properties.label;
                container.appendChild(listElement);

                listElement.addEventListener('click', function(){
                    console.log(listElement.innerText);
                    inputContent.value = listElement.innerText;
                    container.innerHTML = "";
                })
            });
        })
    );
});



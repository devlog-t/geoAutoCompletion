document.querySelector('#localisation').addEventListener('keyup', function () {
    var inputContent = document.getElementById('localisation');
    //cible le container
    var container = document.getElementById('result');
    container.innerHTML = "";
    var url = "https://api-adresse.data.gouv.fr/search/?q=" + this.value + "&limit=6";
    fetch(url)
        .then(function (response) { return response.json()
        .then(function (data) {
        console.log(data);
        //Boucle sur array de la requète, contient des objets.
        var result = data.features;
        result.forEach(function (element) {
            var listElement = document.createElement('li');
            listElement.classList.add('item');
            listElement.innerText = element.properties.label;
            container.appendChild(listElement);
            listElement.addEventListener('click', function () {
                console.log(listElement.innerText);
                inputContent.value = listElement.innerText;
                container.innerHTML = "";
            });
        });
    }); });
});

let itens =  JSON.parse(localStorage.getItem('itens')) || [];


document.getElementById("send").onclick = function () {
    const name = document.getElementById("name").value;


    const item = {
        name: name,
    };

    itens.push(item);
    atualiza();
}


function apaga(index) {
    itens.splice(index, 1);
    atualiza();
   
}


function apagaTodos() {
    itens = [];
    atualiza();
   
}


function atualiza() {
    const list = document.getElementById("list");
    list.innerHTML = ``;

    itens.forEach((item, index) => {
        const newitem = document.createElement('div');
        newitem.className = 'col-md-4'; // Adiciona a classe col-md-4 para os cards
        newitem.innerHTML = `
            <div class="col md-3" style="border:1px solid lightgray">
              <img src="https://picsum.photos/200/100?random=${index}" class="card-img-top" style="" alt="...">
              <div class="card-body text-center">
                <h5 class="card-title">${item.name}</h5>
                <button class="btn btn-danger" onclick="apaga(${index})">Apagar</button>
              </div>
            </div>
        `;

        list.appendChild(newitem);
    });
   
}




document.getElementById('deleteAll').onclick = apagaTodos;

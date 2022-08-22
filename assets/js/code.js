function pokemones(url_a_consumir) {
    // var api_url = "https://pokeapi.co/api/v2/pokemon"
var consumo = fetch(url_a_consumir)
consumo.then(res => res.json())
    .then((pokemon) => {
        document.querySelector("#carta-pokemon").innerHTML=''
        for (const pokemon1 of pokemon.results) {
            var picachu = fetch(pokemon1.url)
            picachu.then(bulbasor => bulbasor.json())
                .then((picachu1) => {
                    let yuyu =""
                    // picachu1.stats.forEach(element => {
                    //     yuyu += element.ability.name+" "
                    // });
                        for (const pokemon2 of picachu1.game_indices) {
                            console.log(pokemon2)
                            let tank =""
                            picachu1.moves.forEach(levels => {
                                tank = levels.move+""
                            });
                        }
                    var ps = picachu1.stats[0].base_stat
                    var pelea = picachu1.stats[1].base_stat
                    var retirada = picachu1.stats[2].base_stat
                    var nombre_vida=picachu1.stats[0].stat.name
                    var nombre_ataque=picachu1.stats[1].stat.name
                    var nombre_defenza=picachu1.stats[2].stat.name
                        
                        document.querySelector("#carta-pokemon").innerHTML += `
                    <div class="card">
                    <img src="${picachu1.sprites.other.home.front_default}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${picachu1.name}</h5>
                            <h5 class="card-title">${yuyu}</h5>
                                <div class="row">
                                    <div class="col-3">
                                        <label>${nombre_vida}</label>
                                    </div>
                                    <div class="col-9">
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: ${ps}%;" aria-valuenow="${ps}" aria-valuemin="0" aria-valuemax="100">${ps}%</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3">
                                        <label>${nombre_ataque}</label>
                                    </div>
                                    <div class="col-9">
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: ${pelea}%;" aria-valuenow="${pelea}" aria-valuemin="0" aria-valuemax="100">${pelea}%</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3">
                                        <label>${nombre_defenza}</label>
                                    </div>
                                    <div class="col-9">
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: ${retirada}%;" aria-valuenow="${retirada}" aria-valuemin="0" aria-valuemax="100">${retirada}%</div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>
                    `
                })
        }
        creacion_boton(pokemon.next, pokemon.previous)
    })
}

function creacion_boton(url_pagina_siguiente, url_pagina_anterior){
    var paginasion = document.querySelector('#sigiente')
    paginasion.innerHTML=""
    var btn_next = document.createElement('button')
    btn_next.className = "btn btn-dark"
    btn_next.innerText= "siga"
    if(url_pagina_siguiente!=null){
        btn_next.setAttribute("onclick",`pokemones('${url_pagina_siguiente}')`)
    }else{
        btn_next.setAttribute("disabled","")
    } 
    paginasion.appendChild(btn_next)

    var btn_anterior=document.createElement('button')
    btn_anterior.classList.add("btn","btn-primary")
    btn_anterior.innerText="pagina anterior"
    if(url_pagina_anterior!=null){
        btn_anterior.setAttribute("onclick",`pokemones('${url_pagina_anterior}')`)
    }else{
        btn_anterior.setAttribute("disabled","")
    } 
    paginasion.appendChild(btn_anterior)

}

pokemones('https://pokeapi.co/api/v2/pokemon')

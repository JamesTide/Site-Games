$(document).ready(function () {
    $.ajax({
        url: "https://api.rawg.io/api/games?key=efd4ed785fcb443196f21afd993e2693",
        type: "GET",
        dataType: "json",
        crossDomain: true,
        success: function (result) {
            console.log(result);

            result.results
            for (i = 13; i < 16; i++) {
                let jogos = result.results[i]
                $("#Games").append(`
                    <div class="card">
                        <div class="card-body">
                            <section class="grid">
                                <img class="v" src=" ${jogos.short_screenshots[1].image}" style="border-radius: 1rem;" height="300px" width="550px">
                                <h2 class="gt"> ${jogos.name}</h2>
                                <p class="g"><b>Plataformas:</b> ${jogos.platforms[0].platform.name}, ${jogos.platforms[1].platform.name}, ${jogos.platforms[2].platform.name},
                                 ${jogos.platforms[3].platform.name}</p>
                                <p class="g"><b>Tempo de jogo: </b> ${jogos.playtime}h</p>
                                <p class="g"><b>Lançamento: </b> ${jogos.released}</p>
                                <p class="g"><b>Nota: </b> ${jogos.rating}/5.00</p>
                                <p class="g"><b>Genero: </b> ${jogos.playtime}</p>
                                <button type="button" class="btn btn-dark"><a href = "saibamais.html?jogoteste=${jogos.id}">Saiba mais</a></button>
                            </section>
                        </div>
                    </div>
                `)
            }
        },
    })
})
$(document).ready(function () {

    let urlString = window.location.href;

    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);

    for (let pair of queryString.entries()) {
        var jogo_id = pair[1];
    }

    $.ajax({
        url: "https://api.rawg.io/api/games/" + jogo_id + "?key=efd4ed785fcb443196f21afd993e2693",
        type: "GET",
        dataType: "json",
        crossDomain: true,
        success: function (gamesd) {

            console.log("testes", gamesd);
            gamesd.results
            $("#saibamais").append(`
            <div class="card">
                <div class="card-body">
                    <div class="how-section1">
                        <div class="row">
                            <div class="col-md-6 how-img">
                                <img src=" ${gamesd.background_image}" style="border-radius: 1rem;" height="500px" width="1000px">
                                <p> </p>
                                <p class="g"><b>Desenvolvedores:</b> ${gamesd.developers[1].name}, ${gamesd.developers[0].name}.</p>
                                <p class="g"><b>Conquistas:</b> ${gamesd.parent_achievements_count}.</p>
                                <p class="g"><b>Gêneros:</b> ${gamesd.genres[0].name}, ${gamesd.genres[1].name}.</p>
                                <p class="g"><b>Tempo de jogo:</b> Aproximadamente ${gamesd.playtime}h.</p>
                                <p class="g"><b>Nota:</b> ${gamesd.metacritic}.</p>
                            </div>
                            <div class="col-md-6">
                                <h2 class="gt">${gamesd.name}</h2>
                                <p class="g"><b>Descrição:</b> ${gamesd.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            `)
        },
    })
})

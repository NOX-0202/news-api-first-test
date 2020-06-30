function render(articles) {
    $('#result').html('')
    articles.forEach(element => {
        if (element.description != null) {
            $('#result').append(`<article class="article_box"><header class="article_header"><h2 class="article_title">${element.title}</h2><img src="${element.urlToImage}" class="article_img"/></header><p class="desc">${element.description}</p><a class="article_link" href="${element.url}">Leia mais >>></a></article>`)     
        }
    })
}

function renderSources(data) {
    console.log(data)
    for (let index = 0; index < 20; index++) {
        $('#Sources').append(`<article><header><h2 class="h6 font-weight-bold">${data[index].name}</h2></header><p class="h6">${data[index].description}</p></article>`);
    }
}

function save(title) {
    $('#list_visited').append(`<li>${title}</li>`)
}

function search() {

    $.ajax({
        url: './api/search.php',
        type: 'POST',
        data: {
            words: $('#search').val()
        }, 
        success: response => {
            render(JSON.parse(response))
            save($('#search').val())
            $('#search').val('')
        }
    })
}

$.ajax({
    url: './api/Headlines.php',
    type: 'GET',
    data: {}, 
    success: response => {
        render(JSON.parse(response))
    }
})


$.ajax({
    url: './api/Souces.php',
    type: 'GET',
    data: {}, 
    success: response => {
        renderSources(JSON.parse(response))
    }
})

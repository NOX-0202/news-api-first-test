function render(articles) {
    console.log(articles)

    articles.forEach(element => {
        if (element.description != null) {
            $('#result').append(`<article><header><h2>${element.title}</h2><img src="${element.urlToImage}" width="250"/></header><p>${element.description}</p></article>`)     
        }
    })
}

$.ajax({
    url: './../api/Headlines.php',
    type: 'GET',
    data: {}, 
    success: response => {
        render(JSON.parse(response))
    }
})


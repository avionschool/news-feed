class News{
    api(){
        return fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=d7wW7yS7JGSVjxpJiJ2ZDOdqlP0zReac")
        .then((response) => {
            return response.json();
        })
    }
}

export default News;
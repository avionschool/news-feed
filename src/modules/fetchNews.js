const getNews = async () =>{
    const result=[];
    const error="";
    const API_KEY = "d7wW7yS7JGSVjxpJiJ2ZDOdqlP0zReac";
    
    await fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=" + API_KEY,{
        method: "GET",
        headers: {
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
        }})
      .then(response => response.json())
      .then(data => {
          result=data})
      .catch(error => error=error);         
      
      return result;
  } 

export default getNews;  
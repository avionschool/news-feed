async function getNewsArticles() {
  try {
    const result = await fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=d7wW7yS7JGSVjxpJiJ2ZDOdqlP0zReac"
    );
    const data = await result.json();
    return data;
  } catch (e) {
    return e;
  }
}

export { getNewsArticles };

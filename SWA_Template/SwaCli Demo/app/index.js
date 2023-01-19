async function displayQuote() {
  let quote;

  try {
    // Fetch Authors data from DB
    let response = await fetch("/data-api/graphql", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query: `{
          authors {
            items{
              id,
              first_name,
              last_name
            }
          }
          }`,
      }),
    });
    quote = await response.json();
    // console.log(quote.data.authors.items[0].first_name);
  } catch (error) {
    quote = { text: `Could not get quote: ${error.message}` };
  }

  // Update text
  const div = document.getElementById("quote");
  div.textContent = "";
  var items = quote.data.authors.items;
  for(i=0; i < items.length; i++){
  // div.textContent += quote.data.authors.items[i].first_name;
  div.textContent += quote.data.authors.items[i].last_name;
  div.textContent += ";\n";
  }
}

displayQuote();

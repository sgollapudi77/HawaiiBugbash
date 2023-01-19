import * as React from "react";
import { render } from "react-dom";
import "./styles.css";
import "graphiql/graphiql.min.css";
import GraphiQL from "graphiql";

const URL = "/data-api/graphql";

function graphQLFetcher(graphQLParams, opts = {headers: {}}) {
  return fetch(URL, {
    method: "post",
    headers: { "Content-Type": "application/json", ...opts.headers },
    body: JSON.stringify(graphQLParams)
  }).then(response => response.json());
}

const container = document.getElementById("root");

const defaultQuery = `
{
  players {
    items {
      id
      name
      played
      winPercent
      currentStreak
      maxStreak
    }
  }
}

# mutation
# {
#   updatePlayer(id:"1", _partitionKeyValue:"1", item: {
#     id: "1"
#     name: "Joe"
#     played: 51
#     winPercent: 0.8
#     currentStreak: 3
#     maxStreak: 10
#   }) {
#       id
#       name
#       played
#       winPercent
#       currentStreak
#       maxStreak
#   }
# }
`;

render(
  <GraphiQL fetcher={graphQLFetcher} defaultQuery={defaultQuery} />,
  container
);

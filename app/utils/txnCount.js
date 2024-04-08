async function countTransactionEdges(graphqlUrl, query) {
    let totalEdges = 0;
    let hasNextPage = true;
    let afterCursor = null;

    while (hasNextPage) {
        const requestBody = {
            query: query,
            variables: afterCursor ? { after: afterCursor } : {}
        };

        try {
            const response = await fetch(graphqlUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) throw new Error('Network response was not ok.');

            const data = await response.json();
            const edges = data.data.transactions.edges;
            totalEdges += edges.length;

            hasNextPage = data.data.transactions.pageInfo.hasNextPage;
            afterCursor = edges.length > 0 ? edges[edges.length - 1].cursor : null;
        } catch (error) {
            console.error("Error fetching data: ", error);
            break;
        }
    }

    return totalEdges;
}

const graphqlUrl = "https://arweave.net/graphql";
const query = `query ($after: String) {
  transactions(recipients: ["6MTxRWEt5xYVqRYCzemN3sSrWyRxnn-u_eXPkTDVqoE"], tags: [{name: "Data-Protocol", values: ["ao"]}, {name: "Variant", values: ["ao.TN.1"]}, {name: "Service", values: ["0rbit"]}], first: 100, after: $after, sort: HEIGHT_ASC) {
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        block {
          timestamp
        }
        tags {
          name
          value
        }
        bundledIn {
          id
        }
      }
    }
  }
}`;

// Call the function and log the result
countTransactionEdges(graphqlUrl, query).then(totalEdges => {
    console.log("Total edges:", totalEdges);
}).catch(error => {
    console.error("Error:", error);
});

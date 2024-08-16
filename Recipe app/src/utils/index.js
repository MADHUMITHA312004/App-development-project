const appId = "c6c23908";
 const appKey = "9f4ee00ee9384eac4c47f2db4cfdc63d";

 
 export async function fetchRecipes (filter){
    const {query, limit} = filter;

    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=${limit}&`;


    const response = await fetch(url)

    const data = await response.json();

    return data?.hits;
}

export async function fetchRecipe(id){
const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${appId}&app_key=${appKey}`

const response = await fetch(url)

const data = await response.json();

return data[0];
}

// const fetchRecipe = async () => {
//     try {
//       const data = await fetchRecipe({ query, limit });
//       setRecipes(data || []); // Ensure recipes is always an array
//     } catch (error) {
//       console.error('Failed to fetch recipes:', error);
//       setRecipes([]); // Handle errors gracefully
//     } finally {
//       setLaoding(false);
//     }
//   };
  
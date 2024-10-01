
// // Function to fetch news articles from the database
// export const getAllNews = async () => {
//   const response = await fetch(`http://localhost:8088/news`);
//   const data = await response.json();
//   return data;
// };

// // Function to save a new news article to the database
// export const saveNewArticle = async (newArticle) => {
//   const response = await fetch(`http://localhost:8088/news`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newArticle),
//   });
//   const data = await response.json();
//   return data;
// };

// // Function to delete a news article from the database
// export const deleteArticle = async (id) => {
//   await fetch(`http://localhost:8088/news/${id}`, {
//     method: 'DELETE',
//   });
// };

// //update article
// export const updateArticle=(article)=>{
//     return fetch (`http://localhost:8088/news/${article.id}`,{
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(article),
//     })
// }


const apiUrl = 'http://localhost:8088';

export const getAllNews = async () => {
  const response = await fetch(`${apiUrl}/articles`);
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  const data = await response.json();
  return data;
};

export const createNewArticle = async (article) => {
  // Ensure the timestamp is correctly set when creating a new article
  const articleWithTimestamp = { ...article, timestamp: new Date().toISOString() };
  
  const response = await fetch(`${apiUrl}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(articleWithTimestamp),
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to create article: ${errorText}`);
  }
  const data = await response.json();
  return data;
};

export const deleteArticle = async (id) => {
  const response = await fetch(`${apiUrl}/articles/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete article');
  }
  return;
};

export const modifyArticle = async (id, updatedArticle) => {
  // Ensure the timestamp is preserved when updating an article
  const response = await fetch(`${apiUrl}/articles/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedArticle),
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to update article: ${errorText}`);
  }
  const data = await response.json();
  return data;
};

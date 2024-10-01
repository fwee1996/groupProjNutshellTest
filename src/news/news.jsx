// import React, { useState, useEffect } from 'react';
// import { getAllNews, saveNewArticle, deleteArticle } from '../services/newsServices';

// const NewsComponent = () => {
//   const [news, setNews] = useState([]);
//   const [newArticle, setNewArticle] = useState({
//     title: '',
//     synopsis: '',
//     url: ''
//   });

//   const getAllNewsArticles = async () => {
//     const allArticles = await getAllNews();
//     setNews(allArticles);
//   };

//   useEffect(() => {
//     getAllNewsArticles();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewArticle((prevArticle) => ({
//       ...prevArticle,
//       [name]: value
//     }));
//   };

//   const saveArticle = async () => {
//     await saveNewArticle(newArticle);
//     getAllNewsArticles();
//     setNewArticle({
//       title: '',
//       synopsis: '',
//       url: ''
//     });
//   };

//   const deleteArticleById = async (articleId) => {
//     await deleteArticle(articleId);
//     getAllNewsArticles();
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         name="title"
//         placeholder="News title"
//         value={newArticle.title}
//         onChange={handleInputChange}
//       />
//       <input
//         type="text"
//         name="synopsis"
//         placeholder="Synopsis"
//         value={newArticle.synopsis}
//         onChange={handleInputChange}
//       />
//       <input
//         type="text"
//         name="url"
//         placeholder="URL"
//         value={newArticle.url}
//         onChange={handleInputChange}
//       />
//       <button onClick={saveArticle}>Save Article</button>

//       <ul>
//         {news.map((article) => (
//           <li key={article.id}>
//             <h3>{article.title}</h3>
//             <p>{article.synopsis}</p>
//             <a href={article.url}>Read more</a>
//             <button onClick={() => deleteArticleById(article.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NewsComponent;





import React, { useState, useEffect } from 'react';
import { getAllNews, saveNewArticle, deleteArticle, updateArticle } from '../services/newsServices';

export const news = ({ currentUser }) => {
  const [news, setNews] = useState([]);
  const [newArticle, setNewArticle] = useState({
    title: '',
    synopsis: '',
    url: ''
  });
  const [editingArticle, setEditingArticle] = useState(null);

  const getAllNewsArticles = async () => {
    const allArticles = await getAllNews();
    setNews(allArticles);
  };

  useEffect(() => {
    getAllNewsArticles();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({ ...newArticle, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingArticle) {
      await updateArticle({ ...editingArticle, ...newArticle });
      setEditingArticle(null);
    } else {
      await saveNewArticle({ ...newArticle, userId: currentUser.id, timestamp: new Date().toISOString() });
    }
    getAllNewsArticles();
    setNewArticle({ title: '', synopsis: '', url: '' });
  };

  const handleEdit = (article) => {
    setEditingArticle(article);
    setNewArticle({ title: article.title, synopsis: article.synopsis, url: article.url });
  };

  const handleDelete = async (id) => {
    await deleteArticle(id);
    getAllNewsArticles();
  };

  return (
    <div>
      <h2>News Articles</h2>
      <ul>
        {news.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).map(article => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.synopsis}</p>
            <a href={article.url}>Read more</a>
            <button onClick={() => handleEdit(article)}>Edit</button>
            <button onClick={() => handleDelete(article.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>{editingArticle ? "Edit Article" : "Add New Article"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={newArticle.title} onChange={handleInputChange} placeholder="Title" />
        <input type="text" name="synopsis" value={newArticle.synopsis} onChange={handleInputChange} placeholder="Synopsis" />
        <input type="text" name="url" value={newArticle.url} onChange={handleInputChange} placeholder="URL" />
        <button type="submit">{editingArticle ? "Update Article" : "Save Article"}</button>
      </form>
    </div>
  );
};


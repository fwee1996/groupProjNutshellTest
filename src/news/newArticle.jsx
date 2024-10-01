// import React, { useState, useEffect } from "react";
// import { createArticle, getAllNews} from "../../services/newsServices";
// import { useNavigate } from "react-router-dom";

// export const NewArticle = ({ currentUser }) => {
//     const [article, setArticle] = useState({ title: "", synopsis: "", url: "" });
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Fetch topics from the API
//         getAllNews().then(articles => {
//             const uniqueTopics = Array.from(new Set(articles.map(article => article.topic.id)));
//             setTopics(uniqueTopics);
//         });
//     }, []);

//     const handleTopicChange = (event) => {
//         setArticle({ ...article, topicId: parseInt(event.target.value) });
//     };

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setArticle({ ...article, [name]: value });
//     };

//     const handleSave = (event) => {
//         event.preventDefault();
//         if (article.title && article.synopsis && article.url) {
//             // Create a new article object with user ID
//             const newArticle = {
//                 userId: currentUser.id,
//                 title: article.title,
//                 synopsis: article.synopsis,
//                 //dateCompleted: new Date().toISOString(), // Assuming this is the date format expected by your backend
//             };
//             // Call the API to create the article
//             createArticle(newArticle).then(() => {
//                 // Redirect to allArticles after successful creation
//                 navigate("/news");
//             }).catch(error => {
//                 console.error("Error creating article:", error);
//                 // Handle error (show message to the user, etc.)
//             });
//         } else {
//             // Show error message if any field is missing
//             window.alert("Please fill out all fields!");
//         }
//     };

//     return (
//         <form>
//             <h2>New Article</h2>
//             <fieldset>
//                 <div>
//                     <label>Title</label>
//                     <input type="text" name="title" value={article.title} onChange={handleInputChange} />
//                 </div>
//             </fieldset>

//             <fieldset>
//                 <div>
//                     <label>Body</label>
//                     <input type="text" name="body" value={article.body} onChange={handleInputChange} />
//                 </div>
//             </fieldset>

//             <fieldset>
//                 <div>
//                     <label>Topic</label>
//                     <select name="topicId" onChange={handleTopicChange} value={article.topicId}>
//                         <option value={0}>Select a topic</option>
//                         {topics.map(topicId => (
//                             <option key={topicId} value={topicId}>{topicId}</option>
//                         ))}
//                     </select>
//                 </div>
//             </fieldset>

//             <fieldset>
//                 <div className="form-group">
//                     <button className="form-btn btn-info" onClick={handleSave}>Save</button>
//                 </div>
//             </fieldset>
//         </form>
//     );
// };

// export default NewArticle;



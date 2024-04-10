
import axios from 'axios';


// Get all posts for the home page
export const getPosts = async ()=>{
    try{
        const posts = await axios.get(`${import.meta.env.VITE_APP_BLOG_API_BASE_URL}/api/v1/posts?limit=20&page=2`);
        return posts.data.data;
    } catch{
        console.log(error);
        return error;
    }
}


// Get authors for the author list page
export const getAuthors = async () => {
    try{
        const author = await axios.get(`${import.meta.env.VITE_APP_BLOG_API_BASE_URL}/api/v1/authors?page=1&limit=100`);
        return author.data.data;
    } catch{
        console.log(error)
        return error;
    }
}


// Get a single post by slug
export const getPostBySlug = async (slug) => {
    try{
        const post = await axios.get(`${import.meta.env.VITE_APP_BLOG_API_BASE_URL}/api/v1/posts/${slug}`);
        return post.data.data;
    } catch{
        console.log(error);
        return error;
    }
}
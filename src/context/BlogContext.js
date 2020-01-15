import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {

    switch (action.type) {

        case 'get_blogPost':
            return action.payload;

        case 'add_blogpost':
            return [...state,
            {
                id: Math.floor(Math.random() * 9999),
                title: action.payload.title,
                content: action.payload.content,
            }
            ];

        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload);

        case 'edit_blogpost':
            return state.map = (blogPost) => {
                blogPost.id === action.payload.id
                    ? blogPost
                    : state
            }

        default:
            return state;
    }
}

const getBlogPost = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogPosts');
        dispatch({ type: 'get_blogpost', payload: response.data })
    };
};

const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogpost', { title, content })

        if (callback) {
            callback();
        }
    }


    /*  return (title, content, callback) => {
         dispatch({ type: 'add_blogpost', payload: { title, content } });
         callback();
     }; */
}

const deleteBlogPost = dispatch => {

    return async = (id) => {
        await jsonServer.delete(`/blogpost/${id}`)
        dispatch({ type: 'delete_blogpost', payload: id })
    };
};

const editBlogPost = dispatch => {

    return async = (title, content, id, callback) => {
       
        await jsonServer.put(`/blogpost/${id}`, { title, content });
       
        dispatch({
            type: 'edit_blogpost',
            payload: { title, content, id }
        })

        callback();
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
    []
);


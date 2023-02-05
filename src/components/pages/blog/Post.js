import { useParams } from "react-router-dom";

function Post() {

const {postId} = useParams();

    return (<>
        <h1>Single Post </h1>
        <h3>Post Id : {postId}</h3>
        </>
        );
}

export default Post;
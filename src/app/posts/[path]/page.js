import { getPost } from "@/service/posts";

export default async function PostPage(props) {
    console.log(props.params.path);
    const test = await getPost(props.params.path);

    console.log(test);
    return (
        <div>
            
        </div>
    );
}


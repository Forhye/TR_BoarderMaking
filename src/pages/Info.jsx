import { useParams } from "react-router-dom";

const Info = () => {
    const param = useParams();

    return (
        <div>
            {param.id}번 글이니다.
        </div>
    )
}

export default Info;
import './Create.css'
import Button from '../components/Button';

const Create = () => {
    return (
        <div className="create_info">
            <div>
                <div className="title">
                    <div>제목</div>
                    <input type='text' />
                </div>
                <div className="date">
                    <div>날짜</div>
                    <input type="date" />
                </div>
                <div className="content">
                    내용
                    <textarea></textarea>
                </div>
            </div>

            <Button type="PRIMARY" text="작성하기" />

        </div>
    )
}

export default Create;
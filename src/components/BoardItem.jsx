import './BoardItem.css'

const BoardItem = ({ title, content, date }) => {
    return (
        <div className='Board'>
            <div className='title'>{title}</div>
            <div className='content'>{content}</div>
            <div className='date'>{new Date(date).toLocaleDateString()}</div>
        </div>
    )
}

export default BoardItem;
import './Card.css';
export const Card = () => {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src="" alt="이미지 파일이 잘못됨" />
            </div>
            <div className='card-content'>
                <div className = 'card-title'>
                    Lorem ipsum
                </div>
                <div className = 'card-description'>
                    Lorem ipsum dolor sit amet consectetur. At dignissim orci
                </div>
            </div>
        </div>
    );
}
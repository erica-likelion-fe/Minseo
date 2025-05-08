export const Nav = ({index}) => {
    return (
        <nav style = {{display: 'flex',flexDirection:'row', gap: '10px' }} >
            {index.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </nav>
    )
}
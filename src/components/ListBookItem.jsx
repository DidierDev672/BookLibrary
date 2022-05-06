export default function ListBookItem({ book }){
    return(
        <div>
            <ul className="list-li card-book">
                <li> 
                    <img src={book.coverUrl} width="300px" />
                    <br />
                    <strong> 
                        { book.title } 
                    </strong> 
                </li>
                <li>
                    <span><strong>({book.author})</strong></span>
                </li>
                <li>
                    <span> { book.saga } </span>
                </li>
                <li>
                   <span>Paginas: <strong> { book.page } </strong></span> 
                </li>
            </ul>
        </div>
    )
}
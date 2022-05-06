import { Card } from "react-bootstrap"
import { booksData } from "../API_Books/index"
import ListBookItem from "./ListBookItem"

export default function Home (){
    return(
        <div className="grid-item">
            <Card style={{ width: '50rem' }}>
                <Card.Header>Mi Estanderia</Card.Header>
                    <Card.Body>
                        <div className="flex-book">
                            {booksData.map((book) => (
                                <ListBookItem key={book.id} book={book} />
                            ))}
                        </div>
                    </Card.Body>
            </Card>
        </div>
    )
}
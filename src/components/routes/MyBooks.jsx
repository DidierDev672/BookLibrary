import React,{ Fragment } from "react"
import { booksData  } from "../../API_Books/index"
import { Container, Card } from "react-bootstrap"

import ListItemLibrary from "../ListItemLibrary"

export default function MyBooks() {
  return (
    <Fragment>
        <Container>
            <Card>
                <Card.Header>My Books 📖</Card.Header>
                    <Card.Body>
                        <div className="flex-book">
                            {booksData.map((book) => (
                                <ListItemLibrary key={book.id} book={book} />
                            ))}
                        </div>
                    </Card.Body>
            </Card>
        </Container>
    </Fragment>
  )
}

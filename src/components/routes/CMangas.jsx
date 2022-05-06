import React, { Fragment } from 'react'
import { MComincsData } from "../../API_Books/comicsManga"
import { Container,Card } from "react-bootstrap"

import ListItemCMangas from "../ListItemCMangas"

export default function CMangas() {
  return (
    <Fragment>
        <Container className="py-3">
            <Card>
                <Card.Header>My Comics and Mangas 📔</Card.Header>
                <Card.Body>
                    <div className="flex-book">
                        {MComincsData.map((cmanga) => (
                            <ListItemCMangas key={cmanga.id} cmanga={cmanga} />
                        ))}
                    </div>
                </Card.Body>
            </Card>
        </Container>
    </Fragment>
  )
}
import React, { Fragment } from 'react'

export default function ListItemLibrary( { book } ) {
  return (
    <Fragment>
        <ul className="list-li card-book">
            <li><img src={book.coverUrl}  width="300px" /></li>
            <li><span>{ book.title }</span></li>
            <li><span>(<strong>{book.author}</strong>)</span></li>
            <li><span>{ book.saga }</span></li>
            <li><span>Paginas: <strong>{book.page}</strong></span></li>
            <li className="flex-item">
               <button type="button" className="btn-edit">Editar</button>
               <button type="button" className="btn-delete">Eliminar</button>
            </li>
        </ul>
    </Fragment>
  )
}

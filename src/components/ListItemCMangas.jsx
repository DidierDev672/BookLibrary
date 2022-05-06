import React, { Fragment } from 'react'

export default function ListItemCMangas({ cmanga }) {
  return (
    <Fragment>
        <ul className="card-book list-li">
            <li><img src={cmanga.coverUrl} style={{ width: '300px' }} /></li>
            <li><span>{ cmanga.title }</span></li>
            <li><span>(<strong>{cmanga.author}</strong>)</span></li>
            <li><span>{cmanga.saga}</span></li>
            <li><span>Paginas:<strong>{cmanga.page}</strong></span></li>
            <li className="flex-item">
               <button type="button" className="btn-edit">Editar</button>
               <button type="button" className="btn-delete">Eliminar</button>
            </li>
        </ul>
    </Fragment>
  )
}
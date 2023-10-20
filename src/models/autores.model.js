const selectAllAuthor = () => {
    return db.query('select * from autores')
}

const selectAuthorById = (id) => {
    return db.query('select * from autores where id=?',[id])
}

const insertAuthor = ({nombre, email,imagen}) => {
    return db.query('insert into autores (nombre, email,imagen) values (?,?,?)', [nombre, email,imagen])
}

const updateAuthorById = (id,{nombre, email,imagen}) => {
    return db.query('update autores set nombre = ?, email = ?, imagen = ? where id = ?', [nombre, email,imagen, id])
}

const deleteAuthorById = (id) =>{
    return db.query("delete from autores where id=?",[id])
}

module.exports = {selectAllAuthor,selectAuthorById,insertAuthor,updateAuthorById,deleteAuthorById}
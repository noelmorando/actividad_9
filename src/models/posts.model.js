const dayjs = require('dayjs')

const selectAllPosts = () => {
    return db.query('select * from posts')
}

const selectPostById = (id) => {
    return db.query('select * from posts where id=?',[id])
    
}

const selectPostByAuthorId = (id) => {
    return db.query('select * from posts where autor_id=?',[id])
}

const insertPost = ({titulo, descripcion, categoria, autor_id}) => {
    fecha = dayjs().format('DD-MM-YYYY HH:mm:ss')
    return db.query('insert into posts (titulo, descripcion, categoria, autor_id,fecha) values (?,?,?,?,?)', [titulo, descripcion, categoria, autor_id,fecha])
}

const updatePostById = (id,{titulo, descripcion, categoria, autor_id,fecha}) => {
    if(fecha == ""){
        fecha = dayjs().format('DD-MM-YYYY HH:mm:ss')
    }
    return db.query('update posts set titulo = ?, descripcion = ?, categoria = ?, autor_id = ?, fecha = ? where id = ?', [titulo,descripcion,categoria,autor_id,fecha, id])
}

const deletePostById = (id) =>{
    return db.query("delete from posts where id=?",[id])
}

const deleteAuthorPosts = (AuthorId) => {
    return db.query("delete from posts where autor_id=?",[AuthorId])
}

module.exports = {selectAllPosts, insertPost,selectPostById,updatePostById,deletePostById,deleteAuthorPosts,selectPostByAuthorId}
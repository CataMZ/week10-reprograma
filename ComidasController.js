// const repository = require('./ComidasRepository')
// repository.connect()
const { connect } = require('./ComidasRepository')
const comidasModel = require('./ComidasSchema')
connect() // para conectar no MongoDB

const getAll = async () => {
  return comidasModel.find((error, comidas) => {
    // if(error){
    //   console.error(error)
    // }
    return comidas
  })
}

const getById = async (id) => {
  // const comidaCadastrada = getAll().find(comida => {
  //   return comida.id === id
  // })
  // return comidaCadastrada
  return comidasModel.findById(
    id,
    (error, comida) => {
      return comida
    }
  )
}

const add = (comida) => {
  // comida.id = Math.random().toString(36).substr(-8)
  // getAll().push(comida)
  // TODO: usar o mongoose para inserir uma nova comida
  const novaComida = new comidasModel ({
    nome: comida.nome,
    descricao: comida.descricao
  })

  novaComida.save()
}

const remove = async (id) => {
  // comidas.pratosFavoritos = getAll().filter((comida) => {
  //   return comida.id !== id
  // })
  return comidasModel.findByIdAndDelete(id)
}

const update = async (id, comida) => {
  // let comidaCadastrada = getAll().find(comida => {
  //   return comida.id === id
  // })

  // if(comidaCadastrada === undefined){ // nao encontrou a comida
  //   return false
  // }
  // else {
  //   if(comida.nome !== undefined) {
  //     comidaCadastrada.nome = comida.nome
  //   }
  //   if(comida.descricao !== undefined) {
  //     comidaCadastrada.descricao = comida.descricao
  //   }

  //   return true
  // } --> update do array local

  return comidasModel.findByIdAndUpdate(
    id,
    { $set: comida },
    { new: true }, // RETORNAR A COMIDA JA ATUALIZADA NO CALLBACK
    function (error, comida) { // é o nosso callback
      return comida
    }
  )
}

module.exports = {
  getAll,
  add,
  remove,
  update,
  getById
}
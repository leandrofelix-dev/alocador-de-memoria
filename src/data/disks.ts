type Disk = {
    id: number
    name: string
    size: number
}
export const disks: Disk[] = [
    {id: 1, name: 'Contígua', size: 256},
    {id: 1, name: 'Encadeada', size: 256},
    {id: 1, name: 'Alocação', size: 256}
]


// let disk = {nome: 'disco1', size: 180, arquivos: [{ init, end, id}]}

// disk.arquivos[id]
// // Transformar o objeto em string e salvar em localStorage
// localStorage.setItem('pessoa', JSON.stringify(pessoa));
// // Receber a string
// let pessoaString = localStorage.getItem('pessoa');
// // transformar em objeto novamente
// let pessoaObj = JSON.parse(pessoaString);
// console.log(pessoaObj.nome); // Matheus
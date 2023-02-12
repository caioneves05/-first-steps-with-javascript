function pegaListaLinks(arrLinks) {
    // Extraindo apenas os valores de cada objeto
    //O JOIN pega o conteúdo de um Array e converte em String.
    return arrLinks.map((link) => Object.values(link).join());
}


export default function listaValidada(listaLinks) {
    return pegaListaLinks(listaLinks);
};
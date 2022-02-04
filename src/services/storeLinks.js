
export async function getLinksSave(key){
    const mayLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(mayLinks) || [];

    return linksSaves;
}

export async function saveLinks(key, newLink) {
    let linkStorage = await getLinksSave(key);

    const hasLink = linkStorage.some(link => link.id === newLink.id);

    if(hasLink) {
        console.log('Esse link já existe na sua lista');
        return;
    }

    linkStorage.push(newLink);

    await localStorage.setItem(key, JSON.stringify(linkStorage));
    console.log('Link salvo com sucesso!')
}

export function deleteLink(links, id) {
    let myLinks = links.filter(item => {
        return (item.id !== id)
    });

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));

    console.log('Link deletado com sucesso!');

    return myLinks;
}
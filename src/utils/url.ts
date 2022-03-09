export const getProductDataFromUrlKey = (url: string | string[] | undefined) => {
    let urls: string[] = [];
    if (
        Array.isArray(url)
    ) {
        urls = url ? url[0].split('.') : []
    } else if (url) {
        urls = url.split('.')
    } 
    return urls[0]
}
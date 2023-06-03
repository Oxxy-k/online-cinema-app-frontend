export const getMovieGenreItem = (name: string, index: number, listLength: number) => {
    return index === listLength - 1 ? name : `${name}, `
}

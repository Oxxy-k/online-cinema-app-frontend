export const getText = (value: string, limit: null | number = null): string => {
    const result = value
        .replace(/<[^>]+>/g, '')
        .replace(/&[^;]+./g, '')
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

    return limit ? `${result.slice(0, limit)}...` : result
}

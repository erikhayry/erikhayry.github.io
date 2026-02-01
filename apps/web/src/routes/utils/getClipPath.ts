function format(value: number): string {
    const truncated = Math.floor(value * 1000) / 1000

    if (Number.isInteger(truncated)) {
        return `${truncated}`
    }

    return truncated.toFixed(3)
}

const INSET = 10


export function getClipPath(index: number, total: number): string {
    const step = 100 / total
    const left = step * index
    const right = step * (index + 1)

    const bottomLeft = index === 0 ? left : left - INSET

    const bottomRight = index === total - 1 ? right : right - INSET


    return `polygon(${format(left)}% 0%, ${format(right)}% 0%, ${format(bottomRight)}% 100%, ${format(bottomLeft)}% 100%)`
}
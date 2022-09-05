export function calcSpace(sizeDisk: number, spaceUsed: number): number {
    if(spaceUsed > 100) {
        return 100
    } else {
        return Math.round((spaceUsed * 100) / sizeDisk)
    }
}

export function unidade() {
    
}
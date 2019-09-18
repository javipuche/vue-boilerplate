export const zIndex = {
    pawn: 'c-overlay--pawn',
    knight: 'c-overlay--knight',
    bishop: 'c-overlay--bishop',
    rook: 'c-overlay--rook',
    queen: 'c-overlay--queen',
    king: 'c-overlay--king'
}

export class Overlay {
    constructor (zIndex) {
        this.activeClass = 'c-overlay'
        this.zIndex = zIndex
    }

    showOverlay () {
        document.body.classList.add(this.activeClass, this.zIndex)
    }

    hideOverlay () {
        document.body.classList.remove(this.activeClass, this.zIndex)
    }

    toggleOverlay () {
        document.body.classList.toggle(this.activeClass)
        document.body.classList.toggle(this.zIndex)
    }
}

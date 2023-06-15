import { makeAutoObservable } from "mobx"

class AwareState {
    activeModal = false

    constructor() {
        makeAutoObservable(this)
    }

    toggleModal(arg) {
        this.activeModal = arg
    }
}

// eslint-disable-next-line
export default new AwareState()
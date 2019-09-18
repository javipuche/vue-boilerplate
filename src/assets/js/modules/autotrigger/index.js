export default class AutoTrigger {
    constructor (Classes) {
        Classes.forEach(ClassToInizialize => {
            document.querySelectorAll(ClassToInizialize.defaultClass).forEach((el) => new ClassToInizialize(el))
        })
    }
}

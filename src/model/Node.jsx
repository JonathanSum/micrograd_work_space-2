import { v4 as uuid } from "uuid";
export default class Node {
    constructor(node, label = "", style = "") {

        this.node = node
        this.label = label
        this.style = style
        // New unique id
        const unique_id = uuid();

        const small_id = unique_id.slice(0, 8);
        this.id = small_id
        this.meName = `D[Keep]`
    }
    graphString() {

        return ""
    }

    getId() {
        return this.id
    }
    setId(id) {
        this.id = id
    }
    getLabel() {
        return this.label
    }
    setLabel(label) {
        this.label = label
    }
}

class Edge {
    constructor(from, to, label = "", style = "", id = "") {
        this.label = label;
        this.from = from;
        this.to = to;
        this.style = style
        this.id = id
    }
    markdownCode(op) {
        if (op === "*") {
            return "#10038;"
        }
        else if (op == "+") {
            return "#43;"
        }

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

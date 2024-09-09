import React, { useEffect, useMemo, useState } from 'react'
// import Canvas from './canvas/Canvas'
import { crossEntropy, MLP, Value } from './micrograd'
// import Mermaid from './Mermaid';
import MermaidComponent from './MermaidComponent';
import Mermaid from './Mermaid';

// import { marker } from './nodes-edges';
import Zoom from './Zoom';


const trace = (root) => {

    const nodes = new Set(); const edges = new Set()
    const build = (v) => {
        if (!nodes.has(v)) {
            nodes.add(v)

            for (const child of v._prev) {
                edges.add([child, v])
                build(child)
            }
        }
    }
    build(root)
    return { nodes: nodes, edges: edges }
}

const edgeType = 'smoothstep';

const objIdMap = new WeakMap; let objectCount = 0;
function id(object) {
    if (!objIdMap.has(object)) objIdMap.set(object, ++objectCount);
    return objIdMap.get(object);
}
const opName = (op) => {
    if (op === "+") {
        return "plus"
    } else if (op === "*") {
        return "multi"
    }
    return op
}
const Top = () => {
    const position = { x: 0, y: 0 };
    const [data, setData] = useState(`graph LR
  A --> B`);
    const [dataL, setDataL] = useState([`graph LR
  A --> B`]);

    const draw_dot = (root) => {
        let graph = `graph LR\n `
        const gl = [`graph LR\n `]
        const dot = { node: [], edge: [] }
        const { nodes, edges } = trace(root)



        for (const n of nodes) {
            const uid = id(n).toString()
            // console.log("debug here")
            // console.log(nodes)
            const l = n.label !== "" ? n.label + "|" : ""
            const node_string = `${uid}[\"${l}| data ${n.data.toFixed(2)} | grad ${n.grad.toFixed(2)}\"]\n `
            graph += node_string
            gl.push(node_string)

            if (n._op !== "") {
                const opNodeString = `${uid + opName(n._op)}((${opName(n._op)})) --> ${uid} \n `
                dot.edge.push(opNodeString)
                graph += opNodeString
                gl.push(opNodeString)
            }
        }
        for (const n of edges) {
            const id0 = id(n[0]); const id1 = id(n[1])

            const edgeString = `${id0.toString()}--> ${id1.toString() + opName(n[1]._op)} \n `
            dot.edge.push(edgeString)
            graph += edgeString
            gl.push(edgeString)
        }
        // console.log(gl)
        // console.log("debug")
        // return graph
        return gl

    }


    useEffect(() => {
        // //---------------------
        // const model = new MLP(2, [8, 3]);
        // // console.log("yea");

        // const x = [1, 2]
        // const y = [2]
        // const x1 = new Value(x[0]); const x2 = new Value(x[1])
        // x1.setLabel("input"); x2.setLabel("input")
        // const logits = model.forward([x1, x2])
        // const loss = crossEntropy(logits, y);
        // loss.backward();
        // loss.setLabel('loss')
        // const { nodes, edges } = trace(loss)
        // // console.log("1-------------")
        // console.log(nodes)
        // // console.log("2-------------")
        // console.log(edges)
        // // console.log("Here!!! s")
        // // console.log(draw_dot(loss).length)
        // // console.log("Here!!! e")
        // const o1 = draw_dot(loss)
        // // // setData(o1)
        // //--------------
        // setDataL(o1)

        // setData(o1.join(''))
        // let a = new Value(2);
        // console.log(a)
        // let b = new Value(-3);
        // let c = new Value(10);

        // let e = a.mul(b)


        // let d = e.add(c)


        // let f = new Value(-2);

        // // //this block is the course example
        // let L = d.mul(f)
        // // a.setLabel('a');
        // // b.setLabel('b');
        // // c.setLabel('c');
        // // d.setLabel('d');
        // // e.setLabel('e');
        // // f.setLabel('f');
        // // L.setLabel('L');
        // L.backward();
        // // console.log(e)
        // // const o1 = draw_dot(L)
        // // console.log(o1)
        // // setData(o1)

        //this block above is the course example


        const model = new MLP(2, [8, 3]);
        // console.log("yea");

        const x = [1, 2]
        const y = [2]
        const x1 = new Value(x[0]); const x2 = new Value(x[1])
        x1.setLabel("input"); x2.setLabel("input")
        const logits = model.forward([x1, x2])
        const loss = crossEntropy(logits, y);
        loss.backward();
        loss.setLabel('loss')


        const o1 = draw_dot(loss)
        console.log(o1.length)
        setData(o1.join(' '))
    }, []);
    // const useMemoFunction = useMemo(() => {
    //     const model = new MLP(2, [8, 3]);
    //     // console.log("yea");

    //     const x = [1, 2]
    //     const y = [2]
    //     const x1 = new Value(x[0]); const x2 = new Value(x[1])
    //     x1.setLabel("input"); x2.setLabel("input")
    //     const logits = model.forward([x1, x2])
    //     const loss = crossEntropy(logits, y);
    //     loss.backward();
    //     loss.setLabel('loss')


    //     const o1 = draw_dot(loss)
    //     console.log(o1.slice(0, 20).join(' '))
    //     setData(o1.join(' '))
    // }, []);
    // useMemoFunction()


    return (
        <>
            <Zoom > <Mermaid chart={data} id="app1" /> </Zoom>
            {/* <Mermaid chart={data} id="app1" /> */}
            {/* <Flow data={data} /> */}
            {/* <MermaidComponent id={"app1"} source={data} /> */}
        </>

    )
}






export default Top
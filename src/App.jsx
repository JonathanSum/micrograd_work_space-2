import { useEffect, useState } from 'react'
import example from './example/example'
import Mermaid from './component/Mermaid'
import Top from './component/Top'
import Node from './model/Node'
import MermaidComponent from './component/MermaidComponent'
import { Grid, GridItem } from '@chakra-ui/react'
function App() {
  const [count, setCount] = useState(0)
  const [graph, setGraph] = useState("graph LR\n")
  const a = "A[Enter Chart Definition]"
  const b = "B(Preview)"
  const c = "C{decide}"
  const d = "D[Keep]"
  const e = "E[Edit Definition]"
  const f = "F[Save Image and Code]"
  // const graph = "graph TD\nA[Enter Chart Definition] --> B(Preview)\nB --> C{decide}\nC --> D[Keep]\nC --> E[Edit Definition]\nE --> B\nD --> F[Save Image and Code]\nF --> B\n"
  // const graph1 = `graph TD\n${a} --> ${b}\n ${b} --> ${c}\n `
  // const graph2 = `${c} --> ${d}\n ${c} --> ${e}\n `
  // const graph3 = `${e} --> ${b}\n ${d} --> ${f}\n ${f} --> ${b}\n`
  // const graph = graph1 + graph2 + graph3
  // let graph0 = "graph LR\n"
  // let graph1 = 'A --> B(Preview)\n '
  // let graph2 = 'C --> D(Preview)\n '
  // let graph = graph0 + graph1
  // graph += graph2
  // console.log(graph)
  //const graph = `graph TD\n${a} --> ${a}\nB --> ${c}\nC --> ${d}\nC --> ${e}\nE --> B\nD --> ${f}\nF --> B\n`
  // const graph = `graph TD\n${a} --> B(Preview)\n`
  const n = new Node();
  console.log(n.getId())

  let graph0 = 'graph LR\n '
  let graph1 = 'A --> B(Preview)\n '
  let graph2 = 'C --> D(Preview)\n '
  let graph3 = '8["| data -8.00 | grad 1.00"]\n '
  graph0 += graph3
  // graph0 += graph2
  // graphThis += graph3
  let graph11 = graph0
  const lg = ['graph LR\n ', '8["| data -8.00 | grad 1.00"]\n ', '8mult((mult)) --> 8 \n ', '9["| data 4.00 | grad -2.00"]\n ', '9plus((plus)) --> 9 \n ', '10["| data -6.00 | grad -2.00"]\n ', '10mult((mult)) --> 10 \n ', '11["| data 2.00 | grad 6.00"]\n ', '12["| data -3.00 | grad -4.00"]\n ', '13["| data 10.00 | grad -2.00"]\n ', '14["| data -2.00 | grad 4.00"]\n ', '9--> 8mult \n ', '10--> 9plus \n ', '11--> 10mult \n ', '12--> 10mult \n ', '13--> 9plus \n ', '14--> 8mult \n ']

  return (
    <>
      <div style={{ backgroundColor: "yellow" }}>

        {/* <h1>React Mermaid Example</h1>*/}
        {/* <Mermaid id={"app0"} chart={lg.join('')} /> */}

        {/* <MermaidComponent id={"app1"} source={lg.join('')} /> */}
        {/* <Top /> */}
      </div>
      <Grid
        h='100vh'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={4} bg='gray.50'><Top /></GridItem>
        <GridItem colSpan={2} bg='papayawhip' ></GridItem>
        <GridItem colSpan={2} bg='tomato' ></GridItem>
      </Grid>
    </>
  )
}

export default App
// graph TD
// A[Enter Chart Definition]--> B(Preview)
// B-- > C{ decide }
// C-- > D[Keep]
// C-- > E[Edit Definition]
// E-- > B
// D-- > F[Save Image and Code]
// F-- > B

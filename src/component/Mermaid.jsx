import mermaid from "mermaid";
import { useEffect } from "react";
mermaid.initialize({});

// mermaid.initialize({ init: { "flowchart": { "htmlLabels": false } } });
// 
const Mermaid = ({ chart, id }) => {
  useEffect(() => {

    mermaid.run({
      suppressErrors: true,
    });
    document.getElementById(id)?.removeAttribute("data-processed");
    mermaid.contentLoaded();


  }, [chart, id]);

  return (
    <div className="mermaid" id={id}>
      {chart}
    </div>
  );
};

export default Mermaid;
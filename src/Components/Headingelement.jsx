const Headingelement = ({ element, highlight, color,size,bottom }) => {

  const parts = element.split(new RegExp(`(${highlight})`, "gi"));

  return (
    <div className="heading-element">
        <h1 style={{"--font-size":size}} className="fw-bold mb-4">
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span
              key={index}
              className="highlight-word position-relative"
              style={{ "--highlight-color": color, "--bottom":bottom}}
            >
              {part}
            </span>
          ) : (
            part
          )
        )}
      </h1>
    </div>
  );
};

export default Headingelement;

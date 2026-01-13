const TextBox = ({text,color,textc}) => {
  return (
    <div className="text-box d-inline-block" style={{background:color,color:textc}}>
        {text}
    </div>
  )
}

export default TextBox
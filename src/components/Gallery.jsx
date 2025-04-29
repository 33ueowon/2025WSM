function Gallery(){
  const imges = [
    "/청첩장 이한 2.jpg",
    "/청첩장 이한.jpg",
    "/청첩장.jpg"
  ]

  return(
    <div>
      <h2>추억</h2>
      <div style={{display: 'flex', gap: '10px', flexWrap:'wrap'}}>
        {imges.map((src, index)=>(
          <img
            key={index} //중요!
            src={src}
            alt={`기념사진${index+1}`}
            width="150"
            />
        ))}
      </div>
    </div>
  )
}
export default Gallery

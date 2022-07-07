import React, { useState, useEffect, useRef }  from 'react'

const Test = () => {
  const [image, setImage] = useState(null)
  const canvas = useRef(null)
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')

  useEffect(() => {
    const catImage = new Image();
    catImage.src = "../../assets/elements/dummy/dummy_1.png"
    catImage.onload = () => setImage(catImage)
    console.log(catImage)
  }, [])

  useEffect(() => {
    if(image && canvas) {
      const ctx = canvas.current.getContext("2d")
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, 400, 400)
      ctx.drawImage(image, (200), 40)

      ctx.font = "20px Comic Sans MS"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"

      ctx.fillText(topText, (400 / 2), 25)
      ctx.fillText(bottomText, (400 / 2), 256 + 40 + 25)

    }
  }, [image, canvas, topText, bottomText])

  return (
    <div>
      <h1>Cat Meme!</h1>

      <div>
        <canvas 
          ref={canvas}
          width={400}
          height={256}
        />
      </div>

      <div>
        <input type="text"
          value={topText}
          onChange={e => setTopText(e.target.value)}
        />
        <br />
        <input type="text"
          value={bottomText}
          onChange={e => setBottomText(e.target.value)}
        />
      </div>

    </div>
  )
}


export default Test
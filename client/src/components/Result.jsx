import React, { useState } from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  flex: 1;
  font-size: 18px;
  color: #616161;
  font-weight: 500;
  margin: 5px 0px 0px 0px;
  display: flex;
  gap: 4px;
  align-items: center;
  z-index: 1;

`

const Name = styled.span`
  font-size: 20px;
  color: #141414;
  font-weight: 800;
`

const ImageContainer = styled.div`
  flex: 7;
  height: 318px;
  width: 438px;

`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

`
const Copy = styled.div`
  display: flex;
  flex: 1;
  width: 438px;
  align-items: center;
  gap: 5px;
`
const Input = styled.input`
  flex: 6;
  height: 30px;
  outline: 2px solid #2cc3ff;
  border: none;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  &:focus{
    background-color: #3f3f3f;
    color: white;
    outline: 2px solid #3f3f3f;
  }
`

const Button = styled.div`
  display: flex;
  height: 34px;
  background-color: #a8e2f9;
  border: 1px solid #000000;
  cursor: pointer;
  font-weight: 700;
  flex: 2;
  align-items: center;
  justify-content: center;
`

const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db; 
  border-radius: 50%;
  width: 12px;
  height: 12px;
  animation: spin 2s linear infinite;

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

const Banner = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  background-color: #00800096;
  font-size: 100px;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  color: white;
  cursor: pointer;
`

function Result({name, image}) {
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const timer = () => {
    setCopied(false)
  }

  const handleCopy = async () => {
    try{
      setLoading(true)
      await navigator.clipboard.writeText(image);
      setCopied(true)
      setTimeout(timer, 500)
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
    }
  }

  return (
    <>
      {copied && <Banner>COPIED</Banner>
      }
      <Heading>Posted by <Name>{name}</Name></Heading>
      <ImageContainer>
        <Image src={image}/>
      </ImageContainer>
      <Copy>
        <Input 
          type="text"
          defaultValue={image}
          readonly
        />
        <Button onClick={handleCopy}>{!loading ? "Copy Link" : <Loader />}</Button>
      </Copy>
    </>
  )
}

export default Result
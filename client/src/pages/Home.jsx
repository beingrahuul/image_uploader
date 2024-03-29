import styled from 'styled-components'
import Card from '../components/Card'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FAFAFB;
`

const Created = styled.p`
  
`
const Link = styled.a`
  text-decoration: none;
  font-weight: 800;
  font-size: 16px;
  color: #000000;
`

const Reload = styled.button`
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  font-weight: 800;
  color: #000000;
  background-color: #8ebbff;
  border: none;
  cursor: pointer;
`


function Home() {
  return (
    <Container>
      <Card />
      <Reload onClick={() => window.location.reload()}>Reload</Reload>
      <Created>Created by <Link href='https://beingrahuul.com/'>Beingrahuul</Link></Created>
    </Container>
  )
}

export default Home
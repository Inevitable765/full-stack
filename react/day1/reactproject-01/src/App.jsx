import './App.css'
import img  from'./assets/html.png'
import Card from'./component/card'
import Userlist from './component/Userlist'
import Form from './component/Form'

function App(){
  return(
    <>
    <button text='click'/>
    <button text='submit'/>
    <Userlist/>
    <Form/>
    <div className='flex justify-center'>
      <Card img={img} text='html'/>
      </div>
    </>

  )
}
export default App;
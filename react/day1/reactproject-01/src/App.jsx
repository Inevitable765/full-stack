import './App.css'
import img  from'./assets/html.png'
import Card from'./component/card'


function App(){
  return(
    <>
    <button text='click'/>
    <button text='submit'/>
    <div className='flex justify-center'>
      <Card img={img} text='html'/>
      </div>
    </>

  )
}
export default App;
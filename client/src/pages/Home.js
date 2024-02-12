import React ,{useState} from 'react'
import pirate from '../images/onepiece.png'
function Home() {
  const [pastevalue,setpaste] = useState()
  const [search,setsearch] = useState()
  console.log(search)
  const handleclick =  async (e)=>{
    try{

      const val =  await navigator.clipboard
      setpaste(val)
      // console.log(val);
    }
    catch(err)
    {
      console.log(err)
    }
  }
  return (

    <div className='home'>
      <div className="container">
        <div className="hero">
          <h6>
          <span style={{float:"left"}}> 
             Download your favourite Spotify playlist with ease 
            </span> 
            <img src={pirate} alt="" /> 
          </h6>
           
        </div>
        <div className='search_field'>

      <input type="text" name="search" placeholder='Your playlist link' value={search} onChange = {e=>setsearch(e.target.value)}id="" />
      

      {/* <img src={pirate} alt="" style={{width:"30px",height:"30px"}} onClick={e=>handleclick(e)}/>  */}
    
    
        </div>
      <div className="submit">
        <button type="submit">
          Search
        </button>
      </div>
      </div>
    </div>
  )
}

export default Home
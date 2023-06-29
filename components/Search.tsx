import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'

function Search() {
    const [showInput, setShowInput] = useState(false)

    function searchInput (e:any) {
        console.log(e.target.value)
    }

    return (
      <div className='flex flex-col items-center'>
        <BsSearch className='onHover' onClick={() => {setShowInput(!showInput)}} />
        {showInput ? (<input onChange={searchInput} className='outline-none text-center bg-transparent placeholder-white/50' type="text" placeholder='Search Amazon.com' />) : null }
        
      </div>
      )
}

export default Search
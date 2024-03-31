

import React from 'react'

const profilePicture = () => {

    const imgClick = (e)=> e.target.style.display = "none" 
  return (
    <div>
        <img onClick={(e)=> imgClick(e)} src="https://imgs.search.brave.com/ZlfF6sZu_-BVrirOMjKNqtcp25hLCsoL_q9S-SuJ9cU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci80ODAv/NTgzL0hELXdhbGxw/YXBlci1hYmQtZHJl/YW0tMTEtZ29hdC1p/cGwtcmNiLXQyMC1h/YmQtdGh1bWJuYWls/LmpwZw" alt="" />
    </div>
  )
}

export default profilePicture



// const App = () => {

  
//     return (
//      <>
     
//      <ProfilePicture />
     
//      </>
//     )
//   }
  
//   export default App
  
import React from 'react'

function Service() {
  return (
    <div className='page-content bg-light w-100'>
      <div className="ues container-fluid">
        <div className="row ">
          <div className="c1 col border">
             <div className='ues1'>
             <p>Wide Range of Books</p>
             <ul className='list-unstyled'>
              <li><img src='\src\assets\temple_buddhist_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png' className='me-2'></img>Historical Fiction</li>
              <li><img src='\src\assets\character.png' className='me-2'></img>Science Fiction</li>
              <li><img src='\src\assets\magic-book.png' className='me-2'></img>Fantasy</li>
              <li><img src='\src\assets\mystery.png' className='me-2'></img>Mystery</li>
              <li><img src='\src\assets\detective-story.png' className='me-2'></img>Thriller</li>
              <li><img src='\src\assets\hearts.png' className='me-2'></img>Romance</li>
              <li><img src='\src\assets\meditation.png' className='me-2'></img>Spirituality</li>
             </ul>
             </div>
          </div>


          <div className="c2 col border">
            <p>New Releases</p>
            <div className='ies border '>
              <img className="ies4"src="\src\assets\81q-dTf0P-L._UF1000,1000_QL80_.jpg" alt="alt" />
              
                <p className='ies3'>Geronimo Stilton The Midnight Heist</p>
                {/* <p className='ies4'>The Seventeenth Adventure in the Kingdom of Fantasy</p> */}
              
            </div>
            
          </div>
          <div className="c3 col border">
            column3
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Service
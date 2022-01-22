import React from 'react';
import Product from '../../Components/Product/Product';
import './Home.css'
function Home() {
  return (
     
       
    <div className='home'>
         <section>
         <div className='box'>
           <h3>Trading</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Fusce ullamcorper in nulla a venenatis. Duis porta velit odio, at sagittis erat porta a.
              Pellentesque dapibus nisl orci, a fringilla dolor posuere ac. 
              Suspendisse eget ligula et quam bibendum bibendum. 
              Sed venenatis orci eget tellus iaculis, et finibus risus vehicula.
               Nunc dignissim, lorem id rhoncus mollis, turpis arcu eleifend magna, eu scelerisque ex lectus ut tellus. 
               Sed ligula ligula, viverra nec odio nec, viverra finibus felis.
                Nunc venenatis orci sed dui rutrum ultrices. Curabitur feugiat orci et turpis aliquet posuere. 
                Quisque facilisis viverra congue.  Donec sed enim quis quam interdum auctor sit amet at ligula. 
                Suspendisse non massa commodo, scelerisque dolor ac, dictum elit.
                 Phasellus eu velit imperdiet, fringilla nunc tincidunt, pellentesque felis. 
                 Sed congue vel erat a pulvinar. Nulla facilisi. Duis id dignissim arcu.
                 </p>
         </div>
       </section>
             <div className='home_row'>
           <Product
           id='23452345'
           title='Blockchain Development : Using Node.JS'
           price={3000}
           className="homeImage"
           image='https://i.pinimg.com/originals/13/12/a1/1312a1ae1772638c21dc136d8e96b8aa.png'
             /> 
             <Product
           id='12341234'
           title='Crypto-Trading : From Beginner To Advanced'
           price={8000}
           className="homeImage"
           image='https://i.ytimg.com/vi/W5gz25iQI_0/maxresdefault.jpg'
             /> 
             <Product
           id='34123412'
           title='Learn Stock Trading : From Scratch '
           price={5000}
           className="homeImage"
           image='https://i.ytimg.com/vi/fjNJmPYH3S8/maxresdefault.jpg'
             /> 
             </div>
             <div className='home_row'>
             <Product
           id='41234123'
           title='Introduction to Blockchain'
           price={2500}
           className="homeImage"
           image='https://www.openaccessgovernment.org/wp-content/uploads/2018/05/dreamstime_s_112455461.jpg'
             /> 
             <Product
           id='34523452'
           title='Introduction to Stock Market'
           price={3499}
           className="homeImage"
           image='https://d3e44x6tjqv3e6.cloudfront.net/sites/default/files/2019-07/TMW%20Stock%20terms%20min.jpg'
             /> 
             <Product
           id='34513451'
           title='Introduction to Forex Market'
           price={10000}
           className="homeImage"
           image='https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2020/03/IMG_20200310_142756_926.jpg?fit=1013%2C666&ssl=1'
             />  
             </div>
         
    </div>
    
  );
        
}

export default Home;



import './karan.css'
import img1 from '../assets/ana.jpg'
import img2 from '../assets/james.jpg'
import img3 from '../assets/lon.jpg'
import img4 from '../assets/ong.webp'
import img5 from '../assets/man.jpg'
import img6 from '../assets/party.jpg'
import img7 from '../assets/diya.webp'
import img8 from '../assets/rrr.jpg'
import img9 from '../assets/kira.jpg'
import img10 from '../assets/bahu.jpg'
function karan() {

  return (
    <>
      <div className='main'>
        <div className='left'>
        <div className='all'><b>All movies</b></div>
          <div className='lf1'>
            <div className='t1'>
              <img src={img1} alt=""srcSet='' className='k1' />
            </div>
            <div className='b1'>
              <div className='a1'>Anathan Kaadu</div>
              <div className='a2'>
               <button className='m1'>22/04/2022</button>
               <button className='m11'>english</button>
              </div>
              <div className='a3'>A Viking prince seeks revenge</div>
            </div>
          </div>
          <div className='lf2'>
            <div className='t2'>
              <img src={img3} alt=""srcSet='' className='l19' />
            </div>
            <div className='lt1'>
              <div className='c1'>1920</div>
              <div className='c2'>
               <button className='m2'>23/04/2022</button>
               <button className='m22'>english</button>
              </div>
              <div className='c3'>Tony stark faces his most dangerous enemy</div>
            </div>

          </div>
          <div className='lf3'>
            <div className='t3'>
              <img src={img5} alt="" srcSet='' className='im2'/> </div>
            <div className='lt3'>
              <div className='e1'>Ironman 3</div>
              <div className='e2'>
               <button className='m3'>03/03/2025</button>
               <button className='m33'>english</button>
              </div>
              <div className='e3'>Tony stark faces his most dangerous enemy</div>
            </div>
          </div>
          <div className='lf4'>
            <div className='t4'> 
              <img src={img7} alt="" srcSet='' className='a1' />
            </div>
            <div className='lt4'>
              <div className='g1'>Diya</div>
              <div className='g2'>
               <button className='m4'>03/05/2026</button>
               <button className='m44'>Kannada</button>
              </div>
              <div className='g3'>Tony stark faces his most dangerous enemy</div>
            </div>
            </div>
          <div className='lf5'>
            <div className='t5'>
              <img src={img9} alt="" srcSet='' className='r1'/> </div>
            <div className='lt5'>
              <div className='i1'>Kirataka</div>
              <div className='i2'>
               <button className='m5'>22/04/2022</button>
               <button className='m55'>Kannada</button>
              </div>
              <div className='i3'>A Viking prince seeks revengey</div>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='none'></div>
          <div className='rt1'>
            <div className='rb1'>
          <img src={img2} alt="" srcSet='' className='j1' />
            </div>
            <div className='rb2'>
              <div className='r1'>James</div>
              <div className='r2'>
                <button className='b11'>03/05/2025</button>
                <button className='b2'>english</button>
              </div>
              <div className='r3'>Tony stark faces his most dangerous enemy</div>
            </div>
          </div>
          <div className='rt2'>
            <div className='rb3'>
              <img src={img4} alt="" srcSet='' className='o1' />
            </div>
            <div className='rb4'>
              <div className='d1'>Ong Bac</div>
              <div className='d2'>
                <button className='b22'>22/04/2022</button>
                <button className='b0'>english</button>
              </div>
              <div className='d3'>A Viking prince seeks revenge</div>
            </div>
          </div>
          <div className='rt3'>
            <div className='rb5'>
              <img src={img6} alt="" srcSet='' className='p1'/>
            </div>
            <div className='rb6'>
              <div className='f1'>Kirik party</div>
              <div className='f2'>
                <button className='b4'>22/04/2022</button>
                <button className='b44'>english</button>
              </div>
              <div className='f3'>A Viking prince seeks revenge</div>
            </div>
          </div>
          <div className='rt4'>
            <div className='rb7'>
              <img src={img8} alt="" srcSet='' className='a2' />
            </div>
            <div className='rb8'>
              <div className='h1'>RRR</div>
              <div className='h2'>
                <button className='b5'>26/04/2026</button>
                <button className='b55'>english</button>
              </div>
              <div className='h3'>Tony stark faces his most dangerous enemy</div>
            </div>
          </div>
          <div className='rt5'>
            <div className='rb9'>
              <img src={img10} alt="" srcSet='' className='n1' />
            </div>
            <div className='rb10'>
              <div className='j1'>Bahubali</div>
              <div className='j2'>
                <button className='b6'>03/05/2026</button>
                <button className='b66'>Telugu</button>
              </div>
              <div className='j3'>A Viking prince seeks revenge</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default karan

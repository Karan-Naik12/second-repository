import './Krn.css'
import img1 from '../assets/star.png'
import img2 from '../assets/ana.jpg'
import img3 from '../assets/left.png'

function Krn() {

  return (
    <>
    <div className='main'>
        <div className='top'>
            

            <div className='t1'>
                <img src={img3} alt=""srcSet='' className='a1' />
            </div>
            <div className='t2'><b>Anathan kaadu</b>
            </div>
            <div className='t3'>English * 1h 40min
            </div>
        </div>
        <div className='bottom'>
            <div className='btm1'>
                <button className='b1'><img src={img1} alt="" srcSet='' className='sr1'/>6.2
                </button>
                <button className='b2'>1h 40min</button>
                <button className='b3'>english</button>
                <button className='b4'>6+</button>
            </div>
            <div className='btm2'>
                <div className='bm1'><b>Synopsis</b></div>
                <div className='bm2'>A Viking prince seeks revange</div>
            </div>
            <div className='btm3'><b>Movie info</b></div>
            <div className='btm4'>
                <div className='left'>
                    <div className='l1'>
                        <p>Release date</p>
                        <p>22 apr 2022</p>
                    </div>
                    <div className='l2'>
                        <p>Duration</p>
                        <p>1h 40min</p>
                    </div>
                </div>
                <div className='right'>
                    <div className='r1'>
                        <p>Language</p>
                        <p>English</p>
                    </div>
                    <div className='r2'>
                        <p>status</p>
                        <p>Released</p>
                    </div>
                </div>
            </div>
            <div className='btm5'>
                <div className='bt1'><b>production</b></div>
                <div className='bt2'>produced by: <b>ABC Productions</b></div>
                <div className='bt3'>Distrubuted by: <b>Namma Cinema</b></div>
            </div>
           </div>
    </div>

    
    </>

  )
}

export default Krn

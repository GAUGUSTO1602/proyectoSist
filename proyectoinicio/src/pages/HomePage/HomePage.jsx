import Styles from "./HomePage.module.css"
import NavBar from "../../components/NavBar/NavBar";


function HomePage() {

  return (
    <>
        <div>
            <NavBar/>
        </div>
        
        <div className={Styles.Container}>
        
        <section className={Styles.block1}>

            <div className={Styles.imageBlock1}>
                <img src="img/Foto inicio.png" alt=""/>

            </div>

            <div className={Styles.textBlock1}>
                
                <div className={Styles.titleBlock1}>
                    <h1>
                        Psicopana
                    </h1>
                </div>

                <div className={Styles.parragraphBlock1}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spublishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>

            </div>
        </section>
        
        <section>
            <div className={Styles.rectangulo}>
                
            </div>

            <div className={Styles.vector}> 
                <img src='img/vector.jpg' alt=""/>              
            </div>
        </section>


        </div>
    </>
 
  )
}

export default HomePage;
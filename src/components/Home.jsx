import vg from "../assets/2.webp";
import { AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from "react-icons/ai";
export default function Home(){
    return(
        <>
        <div className="home" id="home">Home
        <main>
            <h1>TechStar</h1>
            <p>Solution to all you problems.</p>
        </main>
        </div>
        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
                <p>
                    
                We are the leading providers of Technological Solutions, dedicated to empowering businesses and individuals alike with innovative tools and strategies.

                </p>
            </div>
        </div>
        <div className="home3" id="about">
            <div>
                <h1>Who we are?</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. At urna condimentum mattis pellentesque id nibh tortor. Nunc sed blandit libero volutpat. Tincidunt ornare massa eget egestas purus viverra accumsan. Libero nunc consequat interdum varius sit. Auctor neque vitae tempus quam pellentesque nec nam. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Egestas sed sed risus pretium quam.

Quam quisque id diam vel quam elementum. Morbi non arcu risus quis varius. 
Amet justo donec enim diam vulputate ut pharetra sit amet. Lectus quam id leo in vitae turpis massa. Praesent semper feugiat nibh sed. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Commodo quis imperdiet massa tincidunt nunc pulvinar. Aliquam ut porttitor leo a diam. Risus quis varius quam quisque id diam. Orci ac auctor augue mauris augue neque gravida in fermentum. Hac habitasse platea dictumst vestibulum. Quam viverra orci sagittis eu volutpat odio facilisis mauris. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Venenatis lectus magna fringilla urna porttitor. Nulla facilisi etiam dignissim diam. Elit at imperdiet dui accumsan. Augue neque gravida in fermentum. Lacus laoreet non curabitur gravida arcu.
                </p>
            </div>
        </div>
       
        <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                    </div>
                    <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                    </div>
                    <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                    </div>
                    <div style={{animationDelay:"1.0s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
        </>
    );
}

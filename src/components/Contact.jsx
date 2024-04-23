export default function Contact(){
    return(
        <div className="contact">
            <main>
                <h1>Contact Us</h1>
                <form action="">
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder="ABC"/>
                    </div>
                    <div>
                        <label>E-Mail</label>
                        <input type="text" placeholder="ABC@XYZ.com"/>
                    </div>
                    <div>
                        <label>Message</label>
                        <input type="text" placeholder="Feedback"/>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </main>
        </div>
    );
}
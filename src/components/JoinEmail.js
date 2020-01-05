import React from "react"
import PatreonButton from '../img/patreonButton.png'

function JoinEmail(props) {

    return (
        <div className={props.display || "block mb-6"}>
            <div className="text-white max-w-xs bg-teal-600 flex flex-wrap mx-auto py-6 justify-center rounded">
                <div className="block mb-4 mx-4">Join the mailing list to be notified when new content releases.</div>
                <form className="border rounded overflow-hidden flex" name="emailList" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="fake-form" />
                    <input type="email" name="email" className="p1-2 py-2 text-black" placeholder="Your email..."></input>
                    <button type="submit" className="flex items-center justify-center px-1 bg-pink-700">
                        Subscribe
                        </button>
                </form>
            </div>
            <div className="text-white max-w-xs bg-black flex flex-wrap mx-auto mt-8 py-6 justify-center rounded">
                <div className="block mb-4 mx-4">To support me, get deals on books, early access to blogs and flash fics become a patron.</div>
                <a href="https://www.patreon.com/teratomi"><img className="w-64" alt="patreon logo next to subscribe button" src={PatreonButton} /></a>
            </div>
        </div>
    )
}

export default JoinEmail
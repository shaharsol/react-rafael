import './NewPost.css'

export default function NewPost() {
    return (
        <div className='NewPost'>
            <form>
                <input placeholder="enter title..."/>
                <textarea placeholder="enter post..."></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}
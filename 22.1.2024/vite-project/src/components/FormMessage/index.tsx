

function FormMessage(){
    return (
        <form>
            <h1>Contact us

            </h1>

            <label>
                Email: <input type="email"/>
            </label>

            <label>
                Topic <select>
                    <option>Topic 1</option>
                    <option>Topic 2</option>
                    <option>Topic 3</option>
                    <option>Topic 4</option>
                    <option>Topic 5</option>
                </select>
            </label>

            <label>
                <input type="checkbox"/> I agree to process my personal data
            </label>

            <label>
                Message <textarea></textarea>
            </label>

            <button>Send</button>
        </form>
    )
}

export default FormMessage;
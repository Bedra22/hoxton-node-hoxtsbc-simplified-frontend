

export function MainPage({ signUp }) {
    return (
        <div>
            <h1>👋 WELCOME 👋</h1>
            <h2>Please Sign In</h2>
            <form
                className='sign-up-form'
                onSubmit={event => {
                    event.preventDefault()

                    fetch('http://localhost:5000/sign-up', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: event.target.email.value,
                            password: event.target.password.value
                        })
                    })
                        .then(resp => resp.json())
                        .then(data => {
                            if (data.error) {
                                alert(data.error)
                            } else {
                                signUp(data)
                            }
                        })
                }}
            >
                <h2>Sign Up Form</h2>
                <label>
                    Email: <input type='email' name='email' required />
                </label>

                <label >
                    Password: <input type='password' name='password' required />
                </label>

                <button>
                    Sign Up!!!
                </button>
            </form>

            <form
                className='log-in-form'
                onSubmit={event => {
                    event.preventDefault()

                    fetch('http://localhost:5000/log-in', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: event.target.email.value,
                            password: event.target.password.value
                        })
                    })
                        .then(resp => resp.json())
                        .then(data => {
                            if (data.error) {
                                alert(data.error)
                            } else {
                                signUp(data.user)
                            }
                        })
                }}
            >
                <h2>Log In Form</h2>

                <label>
                    Email: <input type='email' name='email' required />
                </label>

                <label >
                    Password: <input type='password' name='password' required />
                </label>

                <button>
                    Sign In!!!
                </button>
            </form>
        </div>
    )
}
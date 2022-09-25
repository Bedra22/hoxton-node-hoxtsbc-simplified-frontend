

export function SignIn({ signOut, user }) {
    return (
        <div className="signed-in-page">
            <h1>Welcome back {user.email} </h1>
            <button
                onClick={signOut}
            >
                Sign Out
            </button>

        </div>
    )
}
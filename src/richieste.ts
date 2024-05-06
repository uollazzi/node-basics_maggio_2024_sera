export const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res: Response) => {
            return res.json();
        })
        .then((dati: any[]) => {
            console.log("DATI:", dati.length);
        })
        .catch(err => {
            console.log("ERROR:", err);
        })
}

export const getPostsSync = async () => {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let dati: any[] = await res.json();
        console.log("DATI:", dati.length);
    } catch (err) {
        console.log("ERROR:", err);
    }
}

export const getUsersAndPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            return res.json();
        })
        .then((users: any[]) => {
            let u = users.slice(0, 3);

            for (const user of u) {
                fetch("https://jsonplaceholder.typicode.com/posts?userId=" + user.id)
                    .then(res => res.json())
                    .then(posts => console.log(posts));
            }
        })

    fetch("https://jsonplaceholder.typicode.com/users").then();
    fetch("https://jsonplaceholder.typicode.com/posts").then();
}


type BlogProps = {
    id: string
    name: string
}

function Blog({id, name}: BlogProps) {
    return (
        <div>
            <p>ID {id}</p>
            <p>Name {name}</p>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/users/dylanngo95')
    const user = await res.json()
    console.log(user);
    console.log("user");

  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        ...user,
      },
    }
}

export default Blog
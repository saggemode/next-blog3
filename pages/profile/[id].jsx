

const Profile = ({user}) => {
  return (
    <div>
        {/* {JSON.stringify(user, 2)} */}
        {user.name} <br/>
        {user.email}
    </div>
  )
}

export const getServerSideProps = async ({query}) => {
const u = await fetch(`https://jsonplaceholder.typicode.com/users/${query.id}`);
const userResp = await u.json();

    return {
        props:{
            user:userResp || null
        }
    }
}

export default Profile
import {Suspense} from "react";
import './App.css';
import spinner from './spinner.gif'

import {fetchData} from "./Api";

const resource = fetchData();

function App() {
  return (
    <div className="container my-5">
        <Suspense fallback={<Spinner />}>
            <ProfileDetails/>
            <ProfilePosts/>
        </Suspense>
    </div>
  );
}

const ProfileDetails = () => {
    const user = resource.user.read()

    return (
        <div className='card card-body my-3'>
            <h1 className='large text-primary'>{user.name}</h1>
            <ul>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>City: {user.address.city}</li>
            </ul>
        </div>
    );
}

const ProfilePosts = () => {
    const posts = resource.posts.read()

    return (
        <ul className='list-group'>
            <li className='list-group-item'>
                <strong>Latest Posts</strong>
            </li>
            {posts.map(post => (
                <li className='list-group-item' key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
    );
}

const Spinner = () => {
    console.log('Loading spinner')
    return (
        <>
            <img
                src={spinner}
                style={{width: '200px', margin: 'auto', display: 'block', backgroundColor:'pink'}}
                alt='Loading...'
            />
        </>
    );
}

export default App;

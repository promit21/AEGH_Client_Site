import useAuth from "../../Hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div className="flex justify-center items-center pt-32 pb-14">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={user.photoURL} alt="userImg" className="rounded-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user.displayName}</h2>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

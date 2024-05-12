import { getUserProfile, updateUser } from '@/lib/user';

const Profile = async () => {
  const user = await getUserProfile();
  const updateUserBody = {
    email: 'new@gmail.com',
    name: 'John Doe',
    language: 'Persion',
    latitude: 100,
    longitude: 200,
    city: 'Manchester',
    country: 'United Kingdom',
    timezone: 'UK',
    phone_number: '0000099393',
    profile_picture: '/assets/avatar',
    prefered_language: 'English',
    online_status: 'Online',
    selected_country: 'United Kingdom',
    geo_resolve_tries: 'Pro',
    is_onboarded: true,
  };
  const updatedUser = await updateUser(updateUserBody);
  // TODO: put all all useStates and other hooks into child nodes,
  // const [editProfile, setEditProfile] = useState<boolean>(false);
  // const [profileVal, setProfileVal] = useState(
  //   `I am looking to enhance my skills in advanced web development and contribute to innovative projects. Seeking opportunities to excel in UI design and collaborative environments. Passionate about creating efficient and user-friendly web systems.`
  // );
  // const router = useRouter();
  // const user = useAuthStore((state) => state.user);
  return (
    <div className="grid gap-4 p-4 lg:grid-cols-4 lg:gap-8 lg:p-8">
      <pre>{JSON.stringify(user)}</pre>
      <pre>{JSON.stringify(updatedUser)}</pre>
      {/* <UserInfoPanel online_status={user.online_status} /> */}
      {/* <UserInfoMobilePanel online_status={user.online_status} /> */}
      {/* <ProfileTabs
        editProfile={editProfile}
        setEditProfile={setEditProfile}
        profileVal={profileVal}
      /> */}
    </div>
  );
};
export default Profile;

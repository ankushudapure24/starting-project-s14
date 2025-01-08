import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

const DUMMY_USERS = [
  { id: "u1", name: "Arjun" },
  { id: "u2", name: "Ananya" },
  { id: "u3", name: "Rohit" },
  { id: "u4", name: "Priya" },
  { id: "u5", name: "Kabir" },
  { id: "u6", name: "Aditi" },
  { id: "u7", name: "Vikram" },
  { id: "u8", name: "Sneha" },
  { id: "u9", name: "Karan" },
  { id: "u10", name: "Isha" },
  { id: "u11", name: "Rahul" },
  { id: "u12", name: "Pooja" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
import { Component } from 'inferno';
import UserService from './services/user.service';
import Loader from './components/shared/Loader';
import withLoading from './hocs/withLoading';
import UserTable from './components/table/UserTable';
import styles from './App.module.css';

const UserTableWithLoadingIndicator = withLoading(
  UserTable,
  Loader
);

export default class App extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  fetchUsers = () => {
    this.setState({ isLoading: true }, () => {
      UserService
        .getAll()
        .then(response => response.json())
        .then(data => {
          this.setState({
            data,
            isLoading: false
          });
        });
    });
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <div className={styles.app}>
        <UserTableWithLoadingIndicator
          {...{
            users: data,
            isLoading,
          }}
        />
      </div>
    );
  }
}
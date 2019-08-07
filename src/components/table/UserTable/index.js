import styles from './index.module.css';

const fields = {
  id: 'Id',
  name: 'Name',
  email: 'Email',
  phone: 'Phone'
};

const renderTableHead = (fields) => (
  <thead className={styles['user-table__head']}>
    <tr className={styles['user-table__row']}>
      {Object
        .entries(fields)
        .map(([key, value]) => (
          <th className={styles['user-table__heading']} key={key}>
            {value}
          </th>
        ))}
    </tr>
  </thead >
);

const renderTableBody = (data, fields) => (
  <tbody className={styles['user-table__body']}>
    {data.map(item => (
      <tr className={styles['user-table__row']} key={item.id}>
        {Object.entries(fields).map(([key, value]) => (
          <td className={styles['user-table__cell']} key={key}>
            <span className={styles['user-table__label']}>{value}</span>
            <span className={styles['user-table__value']}>{item[key]}</span>
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);

const UserTable = ({ users }) => (
  <table className={styles['user-table']}>
    {renderTableHead(fields)}
    {renderTableBody(users, fields)}
  </table>
);

export default UserTable;